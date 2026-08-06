/* ==========================================
   CV Builder Pro AI
   builder.js
   Part 1
========================================== */

"use strict";

/* ===============================
   DOM Elements
================================ */

const fullName = document.getElementById("fullName");
const jobTitle = document.getElementById("jobTitle");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const summary = document.getElementById("summary");

const profilePhoto = document.getElementById("profilePhoto");

/* ===============================
   Preview Elements
================================ */

const previewName = document.getElementById("previewName");
const previewJobTitle = document.getElementById("previewJobTitle");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewAddress = document.getElementById("previewAddress");
const previewSummary = document.getElementById("previewSummary");
const previewProfileImage = document.getElementById("previewProfileImage");

/* ===============================
   Live Text Update
================================ */

function updatePreview() {

    previewName.textContent =
        fullName.value || "Your Name";

    previewJobTitle.textContent =
        jobTitle.value || "Professional Title";

    previewEmail.textContent =
        email.value || "example@email.com";

    previewPhone.textContent =
        phone.value || "+92 300 1234567";

    previewAddress.textContent =
        address.value || "Pakistan";

    previewSummary.textContent =
        summary.value ||
        "Your professional summary will appear here.";

}

/* ===============================
   Input Events
================================ */

[
    fullName,
    jobTitle,
    email,
    phone,
    address,
    summary
].forEach(input => {

    input.addEventListener("input", updatePreview);

});

/* ===============================
   Profile Photo Preview
================================ */

profilePhoto.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewProfileImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

/* ===============================
   Initial Preview
================================ */

updatePreview();
/* ==========================================
   Education Section
========================================== */

const educationContainer =
    document.getElementById("educationContainer");

const addEducation =
    document.getElementById("addEducation");

const previewEducation =
    document.getElementById("previewEducation");

/* ==========================================
   Add Education
========================================== */

addEducation.addEventListener("click", () => {

    const card = document.createElement("div");

    card.className = "education-item";

    card.innerHTML = `

        <div class="form-group">

            <label>Degree</label>

            <input type="text"
                   class="degree"
                   placeholder="Bachelor of Computer Science">

        </div>

        <div class="form-group">

            <label>University</label>

            <input type="text"
                   class="university"
                   placeholder="University Name">

        </div>

        <div class="form-row">

            <div class="form-group">

                <label>Start</label>

                <input type="month"
                       class="educationStart">

            </div>

            <div class="form-group">

                <label>End</label>

                <input type="month"
                       class="educationEnd">

            </div>

        </div>

        <button
            type="button"
            class="remove-btn">

            Remove Education

        </button>

    `;

    educationContainer.appendChild(card);

    updateEducationPreview();

});

/* ==========================================
   Remove Education
========================================== */

document.addEventListener("click", function(e){

    if(e.target.classList.contains("remove-btn")){

        const card = e.target.closest(".education-item");

        if(card){

            card.remove();

            updateEducationPreview();

        }

    }

});

/* ==========================================
   Live Preview
========================================== */

function updateEducationPreview(){

    const items =
        document.querySelectorAll(".education-item");

    previewEducation.innerHTML = "";

    items.forEach(item=>{

        const degree =
            item.querySelector(".degree")?.value || "";

        const university =
            item.querySelector(".university")?.value || "";

        const start =
            item.querySelector(".educationStart")?.value || "";

        const end =
            item.querySelector(".educationEnd")?.value || "";

        previewEducation.innerHTML += `

            <div class="preview-block">

                <h4>${degree}</h4>

                <p>${university}</p>

                <small>${start} - ${end}</small>

            </div>

        `;

    });

}

/* ==========================================
   Live Input
========================================== */

document.addEventListener("input",function(e){

    if(

        e.target.classList.contains("degree") ||

        e.target.classList.contains("university") ||

        e.target.classList.contains("educationStart") ||

        e.target.classList.contains("educationEnd")

    ){

        updateEducationPreview();

    }

});
/* ==========================================
   Experience Section
========================================== */

const experienceContainer =
    document.getElementById("experienceContainer");

const addExperience =
    document.getElementById("addExperience");

const previewExperience =
    document.getElementById("previewExperience");

/* ==========================================
   Add Experience
========================================== */

addExperience.addEventListener("click", () => {

    const card = document.createElement("div");

    card.className = "experience-item";

    card.innerHTML = `

        <div class="form-group">

            <label>Job Title</label>

            <input
                type="text"
                class="jobTitleInput"
                placeholder="Frontend Developer">

        </div>

        <div class="form-group">

            <label>Company</label>

            <input
                type="text"
                class="companyName"
                placeholder="Google">

        </div>

        <div class="form-row">

            <div class="form-group">

                <label>Start Date</label>

                <input
                    type="month"
                    class="jobStart">

            </div>

            <div class="form-group">

                <label>End Date</label>

                <input
                    type="month"
                    class="jobEnd">

            </div>

        </div>

        <div class="form-group">

            <label>Description</label>

            <textarea
                class="jobDescription"
                rows="4"
                placeholder="Describe your work..."></textarea>

        </div>

        <button
            type="button"
            class="remove-btn">

            Remove Experience

        </button>

    `;

    experienceContainer.appendChild(card);

    updateExperiencePreview();

});

/* ==========================================
   Remove Experience
========================================== */

document.addEventListener("click", function(e){

    if(

        e.target.classList.contains("remove-btn") &&

        e.target.closest(".experience-item")

    ){

        e.target.closest(".experience-item").remove();

        updateExperiencePreview();

    }

});

/* ==========================================
   Experience Preview
========================================== */

function updateExperiencePreview(){

    const items =
        document.querySelectorAll(".experience-item");

    previewExperience.innerHTML = "";

    items.forEach(item=>{

        const job =
            item.querySelector(".jobTitleInput")?.value || "";

        const company =
            item.querySelector(".companyName")?.value || "";

        const start =
            item.querySelector(".jobStart")?.value || "";

        const end =
            item.querySelector(".jobEnd")?.value || "";

        const description =
            item.querySelector(".jobDescription")?.value || "";

        previewExperience.innerHTML += `

            <div class="preview-block">

                <h4>${job}</h4>

                <strong>${company}</strong>

                <p>${start} - ${end}</p>

                <p>${description}</p>

            </div>

        `;

    });

}

/* ==========================================
   Live Update
========================================== */

document.addEventListener("input",function(e){

    if(

        e.target.classList.contains("jobTitleInput") ||

        e.target.classList.contains("companyName") ||

        e.target.classList.contains("jobStart") ||

        e.target.classList.contains("jobEnd") ||

        e.target.classList.contains("jobDescription")

    ){

        updateExperiencePreview();

    }

});

/* ==========================================
   Skills, Languages & Interests
========================================== */

const previewSkills =
document.getElementById("previewSkills");

const previewLanguages =
document.getElementById("previewLanguages");

const previewInterests =
document.getElementById("previewInterests");

/* ==========================================
   Skills Preview
========================================== */

function updateSkillsPreview(){

    previewSkills.innerHTML = "";

    document.querySelectorAll(".skill-item").forEach(item=>{

        const name =
        item.querySelector(".skillName")?.value || "";

        const level =
        item.querySelector(".skillLevel")?.value || "";

        if(name.trim() !== ""){

            previewSkills.innerHTML += `
                <div class="preview-skill">
                    <strong>${name}</strong>
                    <span>(${level})</span>
                </div>
            `;

        }

    });

}

/* ==========================================
   Languages Preview
========================================== */

function updateLanguagesPreview(){

    previewLanguages.innerHTML = "";

    document.querySelectorAll(".language-item").forEach(item=>{

        const name =
        item.querySelector(".languageName")?.value || "";

        const level =
        item.querySelector(".languageLevel")?.value || "";

        if(name.trim() !== ""){

            previewLanguages.innerHTML += `
                <div class="preview-language">
                    <strong>${name}</strong>
                    <span>(${level})</span>
                </div>
            `;

        }

    });

}

/* ==========================================
   Interests Preview
========================================== */

function updateInterestsPreview(){

    previewInterests.innerHTML = "";

    document.querySelectorAll(".interest-item").forEach(item=>{

        const hobby =
        item.querySelector(".interestName")?.value || "";

        if(hobby.trim() !== ""){

            previewInterests.innerHTML += `
                <div class="preview-interest">
                    • ${hobby}
                </div>
            `;

        }

    });

}

/* ==========================================
   Live Update
========================================== */

document.addEventListener("input",function(e){

    if(
        e.target.classList.contains("skillName") ||
        e.target.classList.contains("skillLevel")
    ){

        updateSkillsPreview();

    }

    if(
        e.target.classList.contains("languageName") ||
        e.target.classList.contains("languageLevel")
    ){

        updateLanguagesPreview();

    }

    if(
        e.target.classList.contains("interestName")
    ){

        updateInterestsPreview();

    }

});

/* ==========================================
   Initial Preview
========================================== */

updateSkillsPreview();

updateLanguagesPreview();

updateInterestsPreview();
/* ==========================================
   Projects, Certificates & References
========================================== */

const previewProjects =
document.getElementById("previewProjects");

const previewCertificates =
document.getElementById("previewCertificates");

const previewReferences =
document.getElementById("previewReferences");

/* ==========================================
   Projects Preview
========================================== */

function updateProjectsPreview(){

    previewProjects.innerHTML = "";

    document.querySelectorAll(".project-item").forEach(item=>{

        const name =
        item.querySelector(".projectName")?.value || "";

        const tech =
        item.querySelector(".projectTech")?.value || "";

        const description =
        item.querySelector(".projectDescription")?.value || "";

        if(name.trim() !== ""){

            previewProjects.innerHTML += `

                <div class="preview-block">

                    <h4>${name}</h4>

                    <p><strong>Tech:</strong> ${tech}</p>

                    <p>${description}</p>

                </div>

            `;

        }

    });

}

/* ==========================================
   Certificates Preview
========================================== */

function updateCertificatesPreview(){

    previewCertificates.innerHTML = "";

    document.querySelectorAll(".certificate-item").forEach(item=>{

        const name =
        item.querySelector(".certificateName")?.value || "";

        const org =
        item.querySelector(".certificateOrg")?.value || "";

        const date =
        item.querySelector(".certificateDate")?.value || "";

        if(name.trim() !== ""){

            previewCertificates.innerHTML += `

                <div class="preview-block">

                    <h4>${name}</h4>

                    <p>${org}</p>

                    <small>${date}</small>

                </div>

            `;

        }

    });

}

/* ==========================================
   References Preview
========================================== */

function updateReferencesPreview(){

    previewReferences.innerHTML = "";

    document.querySelectorAll(".reference-item").forEach(item=>{

        const name =
        item.querySelector(".referenceName")?.value || "";

        const position =
        item.querySelector(".referencePosition")?.value || "";

        const company =
        item.querySelector(".referenceCompany")?.value || "";

        if(name.trim() !== ""){

            previewReferences.innerHTML += `

                <div class="preview-block">

                    <h4>${name}</h4>

                    <p>${position}</p>

                    <p>${company}</p>

                </div>

            `;

        }

    });

}

/* ==========================================
   Live Update
========================================== */

document.addEventListener("input",function(e){

    if(

        e.target.classList.contains("projectName") ||

        e.target.classList.contains("projectTech") ||

        e.target.classList.contains("projectDescription")

    ){

        updateProjectsPreview();

    }

    if(

        e.target.classList.contains("certificateName") ||

        e.target.classList.contains("certificateOrg") ||

        e.target.classList.contains("certificateDate")

    ){

        updateCertificatesPreview();

    }

    if(

        e.target.classList.contains("referenceName") ||

        e.target.classList.contains("referencePosition") ||

        e.target.classList.contains("referenceCompany")

    ){

        updateReferencesPreview();

    }

});

/* ==========================================
   Initial Preview
========================================== */

updateProjectsPreview();

updateCertificatesPreview();

updateReferencesPreview();
/* ==========================================
   Local Storage (Auto Save & Auto Load)
========================================== */

const STORAGE_KEY = "cv_builder_pro_data";

/* ==========================================
   Save Form Data
========================================== */

function saveFormData() {

    const data = {

        fullName: fullName.value,
        jobTitle: jobTitle.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        summary: summary.value

    };

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

}

/* ==========================================
   Load Form Data
========================================== */

function loadFormData() {

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) return;

    const data = JSON.parse(savedData);

    fullName.value = data.fullName || "";
    jobTitle.value = data.jobTitle || "";
    email.value = data.email || "";
    phone.value = data.phone || "";
    address.value = data.address || "";
    summary.value = data.summary || "";

    updatePreview();

}

/* ==========================================
   Auto Save Events
========================================== */

[
    fullName,
    jobTitle,
    email,
    phone,
    address,
    summary

].forEach(input => {

    input.addEventListener("input", saveFormData);

});

/* ==========================================
   Clear Form
========================================== */

const clearButton =
document.getElementById("clearForm");

if(clearButton){

    clearButton.addEventListener("click",()=>{

        if(confirm("Clear all resume data?")){

            localStorage.removeItem(STORAGE_KEY);

            location.reload();

        }

    });

}

/* ==========================================
   Load Saved Data
========================================== */

window.addEventListener("DOMContentLoaded",()=>{

    loadFormData();

});
