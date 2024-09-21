// aos 
AOS.init();


// navigation
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menuToggle');

  const isMobile = window.matchMedia("(max-width: 800px)").matches;

  if (!isMobile) {
      return;
  }

  const isMenuOpen = window.getComputedStyle(menu).display === 'flex';

  if (isMenuOpen) {
      gsap.to(menu, { 
          duration: 0.5, 
          height: 0, 
          ease: 'power2.in',  
          onComplete: () => {
              menu.style.display = 'none'; 
          } 
      });
      menuToggle.innerHTML = '☰';
  } else {
      menu.style.display = 'flex'; 
      gsap.fromTo(menu, 
          { height: 0 }, 
          { 
              duration: 0.8, 
              height: 'auto', 
              ease: 'elastic.out(1, 0.5)',
          }
      );
      menuToggle.innerHTML = '✖';
  }
}

function handleScroll() {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);


function closeNav() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');

    // Check if the screen width is 767px or less
    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    if (!isMobile) {
        // If the screen width is greater than 767px, do nothing
        return;
    }

    const isMenuOpen = window.getComputedStyle(menu).display === 'flex';

    if (isMenuOpen) {
        // Close menu with GSAP animation
        gsap.to(menu, { 
            duration: 0.5, 
            height: 0, 
            ease: 'power2.in', // Smooth ease-in effect when closing
            onComplete: () => {
                menu.style.display = 'none'; // Hide menu after animation completes
            } 
        });
        menuToggle.innerHTML = '☰';
    }
}



// skills 

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { selector: ".graphic", width: "75%" },
  { selector: ".editing", width: "72%" },
  { selector: ".motion", width: "70%" },
  { selector: ".photoshop", width: "68%" },
  { selector: ".premiere", width: "65%" },
];

skills.forEach(skill => {
  gsap.fromTo(
    skill.selector, 
    { width: "0%" }, 
    {
      width: skill.width, 
      duration: 3, 
      scrollTrigger: {
        trigger: skill.selector, 
        start: "top 80%", 
        toggleActions: "play none none reverse", 
      }
    }
  );
});




//  tab 
function openTab(evt, adminPgName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", ""); 
  }
  document.getElementById(adminPgName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}



// service slider 

document.addEventListener( 'DOMContentLoaded', function() {
        
  var splide = new Splide( '.service-slider', {
      perPage: 3,
      gap: 20,
      perMove: 1,
      autoplay: false,
      pagination: false,
      arrows: true,
      breakpoints: {
          767: {
              perPage:1,
          },
          991: {
              perPage: 2,
          }
      }
  } ); 
  
  splide.mount();
  } );


// portfolio slider 

document.addEventListener( 'DOMContentLoaded', function() {
        
  var splide = new Splide( '.portfolio-slider', {
      perPage: 3,
      gap: 20,
      perMove: 1,
      autoplay: false,
      pagination: false,
      arrows: true,
      breakpoints: {
          767: {
              perPage:1,
          },
          991: {
              perPage: 2,
          }
      }
  } ); 
  
  splide.mount();
  } );



 // copyright 
 document.getElementById("year").textContent = new Date().getFullYear()