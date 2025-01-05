const roles = ['Software Developer', 'Software Engineer', 'Web Developer', 'Full-Stack Developer', 'Backend Developer'];
let currentRoleIndex = 0;

function changeRoleText() {
    const roleText = document.querySelector('.home-section span');
    roleText.textContent = roles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
}

setInterval(changeRoleText, 5000); 

const filterButtons = document.querySelectorAll('.portfolio-filter button');
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
