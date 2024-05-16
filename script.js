// efeito da barrinha no menu de navegação
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname; 
  
    const menuLinks = document.querySelectorAll('.header__menu__link');
    menuLinks.forEach(function(link) {
      if (link.href.includes(currentPage)) {
        link.classList.add('active'); 
      }
    });
  });
  