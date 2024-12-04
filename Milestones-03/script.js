// script.ts
// This function updates the right side preview from the left input fields
function updateResumeFromLeft() {
    // Get values from the form on the left side
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    // Update the right side preview with the values from the left section
    document.getElementById('resumeName').textContent = name || 'Not Provided';
    document.getElementById('resumeEmail').textContent = email || 'Not Provided';
    document.getElementById('resumePhone').textContent = phone || 'Not Provided';
    document.getElementById('resumeAddress').textContent = address || 'Not Provided';
    // Handle Work Experience (split into rows)
    var experienceItems = experience.split(',').map(function (experience) { return experience.trim(); }).filter(function (experience) { return experienceItems !== ''; });
    var experienceSection = document.getElementById('resumeExperience');
    experienceSection.innerHTML = '';
    if (experienceItems.length > 0) {
        experienceItems.forEach(function (experience) {
            var row = document.createElement('div');
            row.classList.add('row');
            row.textContent = experience;
            experienceSection.appendChild(row);
        });
    }
    else {
        experienceSection.innerHTML = '<div class="row">No Experience Provided</div>';
    }
    // Handle Skills (split into rows)
    var skillsItems = skills.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill !== ''; });
    var skillsSection = document.getElementById('resumeSkills');
    skillsSection.innerHTML = '';
    if (skillsItems.length > 0) {
        skillsItems.forEach(function (skill) {
            var row = document.createElement('div');
            row.classList.add('row');
            row.textContent = skill;
            skillsSection.appendChild(row);
        });
    }
    else {
        skillsSection.innerHTML = '<div class="row">No Skills Provided</div>';
    }
    // Handle Education (split into rows)
    var educationItems = education.split(',').map(function (education) { return education.trim(); }).filter(function (education) { return education !== ''; });
    var educationSection = document.getElementById('resumeEducation');
    educationSection.innerHTML = '';
    if (educationItems.length > 0) {
        educationItems.forEach(function (education) {
            var row = document.createElement('div');
            row.classList.add('row');
            row.textContent = education;
            educationSection.appendChild(row);
        });
    }
    else {
        educationSection.innerHTML = '<div class="row">No Education Provided</div>';
    }
}
// Call the function to initialize the preview when the page loads
window.onload = updateResumeFromLeft;
