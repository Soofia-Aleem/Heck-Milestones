// script.ts

// This function updates the right side preview from the left input fields
function updateResumeFromLeft() {
    // Get values from the form on the left side
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  
    // Update the right side preview with the values from the left section
    document.getElementById('resumeName')!.textContent = name || 'Not Provided';
    document.getElementById('resumeEmail')!.textContent = email || 'Not Provided';
    document.getElementById('resumePhone')!.textContent = phone || 'Not Provided';
    document.getElementById('resumeAddress')!.textContent = address || 'Not Provided';
  
    // Handle Work Experience (split into rows)
    const experienceItems = experience.split(',').map(experience => experience.trim()).filter(experience => experienceItems !== '');
    const experienceSection = document.getElementById('resumeExperience')!;
    experienceSection.innerHTML = '';
    if (experienceItems.length > 0) {
      experienceItems.forEach(experience => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent = experience;
        experienceSection.appendChild(row);
      });
    } else {
      experienceSection.innerHTML = '<div class="row">No Experience Provided</div>';
    }
  
    // Handle Skills (split into rows)
    const skillsItems = skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    const skillsSection = document.getElementById('resumeSkills')!;
    skillsSection.innerHTML = '';
    if (skillsItems.length > 0) {
      skillsItems.forEach(skill => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent = skill;
        skillsSection.appendChild(row);
      });
    } else {
      skillsSection.innerHTML = '<div class="row">No Skills Provided</div>';
    }
  
    // Handle Education (split into rows)
    const educationItems = education.split(',').map(education => education.trim()).filter(education => education !== '');
    const educationSection = document.getElementById('resumeEducation')!;
    educationSection.innerHTML = '';
    if (educationItems.length > 0) {
      educationItems.forEach(education => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent = education;
        educationSection.appendChild(row);
      });
    } else {
      educationSection.innerHTML = '<div class="row">No Education Provided</div>';
    }
  }
  
  // Call the function to initialize the preview when the page loads
  window.onload = updateResumeFromLeft;