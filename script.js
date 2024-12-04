// TypeScript code to manage form data and resume generation
// TypeScript code to manage form data and resume generation
document.addEventListener("DOMContentLoaded", function () {
    var addEducationBtn = document.getElementById("add-education-btn");
    var addExperienceBtn = document.getElementById("add-experience-btn");
    var addSkillsBtn = document.getElementById("add-skills-btn");
    var generateResumeBtn = document.getElementById("generate-resume-btn");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    var educationList = document.getElementById("education-list");
    var experienceList = document.getElementById("experience-list");
    var skillsList = document.getElementById("skills-list");
    var resumeOutput = document.getElementById("resume-output");
    var education = [];
    var experiences = [];
    var skills = [];
    addEducationBtn.addEventListener("click", function () {
        if (educationInput.value) {
            education.push(educationInput.value);
            educationInput.value = '';
            updateEducationList();
        }
    });
    addExperienceBtn.addEventListener("click", function () {
        if (experienceInput.value) {
            experiences.push(experienceInput.value);
            experienceInput.value = '';
            updateExperienceList();
        }
    });
    addSkillsBtn.addEventListener("click", function () {
        if (skillsInput.value) {
            skills.push(skillsInput.value);
            skillsInput.value = '';
            updateSkillsList();
        }
    });
    generateResumeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var username = document.getElementById("username").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var resumeHTML = "\n            <h3>".concat(name, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            \n             <h4>Education</h4>\n            <ul>\n                ").concat(education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n            </ul>\n            <h4>Experience</h4>\n            <ul>\n                ").concat(experiences.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "\n            </ul>\n            <h4>Skills</h4>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
    function updateEducationList() {
        educationList.innerHTML = education.map(function (exp, index) {
            return "<div class=\"item\">\n                        <span>".concat(exp, "</span>\n                        <button class=\"remove-btn\" data-index=\"").concat(index, "\">Remove</button>\n                    </div>");
        }).join('');
        educationList.querySelectorAll(".remove-btn").forEach(function (button) {
            button.addEventListener("click", function (e) {
                var index = parseInt(e.target.dataset.index || '0');
                education.splice(index, 1);
                updateEducationList();
            });
        });
    }
    function updateExperienceList() {
        experienceList.innerHTML = experiences.map(function (exp, index) {
            return "<div class=\"item\">\n                        <span>".concat(exp, "</span>\n                        <button class=\"remove-btn\" data-index=\"").concat(index, "\">Remove</button>\n                    </div>");
        }).join('');
        experienceList.querySelectorAll(".remove-btn").forEach(function (button) {
            button.addEventListener("click", function (e) {
                var index = parseInt(e.target.dataset.index || '0');
                experiences.splice(index, 1);
                updateExperienceList();
            });
        });
    }
    function updateSkillsList() {
        skillsList.innerHTML = skills.map(function (skill, index) {
            return "<div class=\"item\">\n                        <span>".concat(skill, "</span>\n                        <button class=\"remove-btn\" data-index=\"").concat(index, "\">Remove</button>\n                    </div>");
        }).join('');
        skillsList.querySelectorAll(".remove-btn").forEach(function (button) {
            button.addEventListener("click", function (e) {
                var index = parseInt(e.target.dataset.index || '0');
                skills.splice(index, 1);
                updateSkillsList();
            });
        });
    }
});
window.addEventListener('DOMContentLoaded', function () {
    var urlparams = new URLSearchParams(window.location.search);
    var username = urlparams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            username;
            document.getElementById("username").value;
            name;
            document.getElementById("name").value;
        }
    }
});
// Function to generate the resume preview
function generateResume(event) {
    event.preventDefault();
    // Get input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume data object
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        education: education,
        experience: experience,
        skills: skills
    };
    // Render the resume preview
    renderResume(resumeData);
}
// Function to render resume preview
function renderResume(data) {
    var resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = "\n      <h3>".concat(data.name, "</h3>\n      <p>Email: ").concat(data.email, "</p>\n      <p>Phone: ").concat(data.phone, "</p>\n      <p>Address: ").concat(data.address, "</p>\n      \n      <h4>Education:</h4>\n      <p>").concat(data.education, "</p>\n  \n      <h4>Work Experience:</h4>\n      <p>").concat(data.experience, "</p>\n  \n      <h4>Skills:</h4>\n      <ul>\n        ").concat(data.skills.split('\n').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n      </ul>\n    ");
}
// Add event listener to form
var form = document.getElementById('resumeForm');
form.addEventListener('submit', generateResume);
