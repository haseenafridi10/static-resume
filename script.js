// Function to toggle the visibility of the Skills section
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || !skillsSection.style.display) {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
