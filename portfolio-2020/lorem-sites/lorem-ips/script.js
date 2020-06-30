const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const sidebar = document.querySelector('.sidebar');

// Toggle nav
toggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-nav');
    //document.body.addEventListener('click', closeNavbar);
  });
  