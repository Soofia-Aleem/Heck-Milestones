// TypeScript code to manage form data and resume generation

// TypeScript code to manage form data and resume generation

document.addEventListener("DOMContentLoaded", () => {
    const addEducationBtn = document.getElementById("add-education-btn") as HTMLButtonElement;
    const addExperienceBtn = document.getElementById("add-experience-btn") as HTMLButtonElement;
    const addSkillsBtn = document.getElementById("add-skills-btn") as HTMLButtonElement;
    const generateResumeBtn = document.getElementById("generate-resume-btn") as HTMLButtonElement;
    const educationInput = document.getElementById("education") as HTMLInputElement;
    const experienceInput = document.getElementById("experience") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const educationList = document.getElementById("education-list") as HTMLDivElement;
    const experienceList = document.getElementById("experience-list") as HTMLDivElement;
    const skillsList = document.getElementById("skills-list") as HTMLDivElement;
    const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;

    let education: string[] = [];
    let experiences: string[] = [];
    let skills: string[] = [];

    addEducationBtn.addEventListener("click", () => {
        if (educationInput.value) {
            education.push(educationInput.value);
            educationInput.value = '';
            updateEducationList();
        }
    });

    addExperienceBtn.addEventListener("click", () => {
        if (experienceInput.value) {
            experiences.push(experienceInput.value);
            experienceInput.value = '';
            updateExperienceList();
        }
    });

    addSkillsBtn.addEventListener("click", () => {
        if (skillsInput.value) {
            skills.push(skillsInput.value);
            skillsInput.value = '';
            updateSkillsList();
        }
    });

    generateResumeBtn.addEventListener("click", (e) => {
        e.preventDefault();

         const username = (document.getElementById("username") as HTMLInputElement).value;
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;


        const resumeHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            
             <h4>Education</h4>
            <ul>
                ${education.map(edu => `<li>${edu}</li>`).join('')}
            </ul>
            <h4>Experience</h4>
            <ul>
                ${experiences.map(exp => `<li>${exp}</li>`).join('')}
            </ul>
            <h4>Skills</h4>
            <ul>
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;

        resumeOutput.innerHTML = resumeHTML;
    });

    function updateEducationList() {
        educationList.innerHTML = education.map((exp, index) => {
            return `<div class="item">
                        <span>${exp}</span>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>`;
        }).join('');

        educationList.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = parseInt((e.target as HTMLButtonElement).dataset.index || '0');
                education.splice(index, 1);
                updateEducationList();
            });
        });
    }

    function updateExperienceList() {
        experienceList.innerHTML = experiences.map((exp, index) => {
            return `<div class="item">
                        <span>${exp}</span>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>`;
        }).join('');

        experienceList.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = parseInt((e.target as HTMLButtonElement).dataset.index || '0');
                experiences.splice(index, 1);
                updateExperienceList();
            });
        });
    }

    function updateSkillsList() {
        skillsList.innerHTML = skills.map((skill, index) => {
            return `<div class="item">
                        <span>${skill}</span>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>`;
        }).join('');

        skillsList.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = parseInt((e.target as HTMLButtonElement).dataset.index || '0');
                skills.splice(index, 1);
                updateSkillsList();
            });
        });
    }
});

  