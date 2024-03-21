document.addEventListener('DOMContentLoaded', function() {
    const buttonHard = document.getElementById('buttonHard');
    const buttonSoft = document.getElementById('buttonSoft');
    const hardSkills = document.getElementById('hardSkills');
    const softSkills = document.getElementById('softSkills');

    softSkills.style.display = 'none';

    function toggleVisibility(id) {
        const element = document.getElementById(id);
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }

    buttonHard.addEventListener('click', function() {
        toggleVisibility('hardSkills');
        toggleVisibility('softSkills');
        alert('Hard click')
    });

    buttonSoft.addEventListener('click', function() {
        toggleVisibility('hardSkills');
        toggleVisibility('softSkills');
        alert('Soft click')
    });
})