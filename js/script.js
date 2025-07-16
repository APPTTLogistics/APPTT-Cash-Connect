// script.js
$(document).ready(function() {
    // Initialize Slick slider for banner
    $('.banner-one').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1001,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
    });
    
    // Timeline animation
    const car = document.getElementById('carIcon');
    const popup = document.getElementById('popup');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    
    function animateToDot(i) {
        const dot = dots[i];
        const rect = dot.getBoundingClientRect();
        const parentRect = dot.parentElement.getBoundingClientRect();
        
        const x = rect.left - parentRect.left + dot.offsetWidth / 2;
        const y = rect.top - parentRect.top + dot.offsetHeight / 2;
        
        car.style.left = `${x}px`;
        car.style.top = `${y}px`;
        
        popup.innerHTML = `<strong>${dot.dataset.year}</strong><br>${dot.dataset.text}`;
        popup.style.left = `${x}px`;
        popup.style.top = `${y - 40}px`;
        popup.classList.add('show');
        
        setTimeout(() => {
            popup.classList.remove('show');
            index = (index + 1) % dots.length;
            setTimeout(() => animateToDot(index), 800);
        }, 3000);
    }
    
    window.addEventListener('load', () => animateToDot(index));
    
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/,/g, '');
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = (count + increment).toLocaleString();
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        
        updateCount();
    });
    
    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.theme-main-header').addClass('header-sticky');
            $('.white-logo').hide();
            $('.blue-logo').show();
        } else {
            $('.theme-main-header').removeClass('header-sticky');
            $('.white-logo').show();
            $('.blue-logo').hide();
        }
    });

window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

  });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
const slider = document.getElementById("sliderWrapper");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % 3;
  updateSlide();
});

prev.addEventListener("click", () => {
  index = (index - 1 + 3) % 3;
  updateSlide();
});

// Auto slide
setInterval(() => {
  index = (index + 1) % 3;
  updateSlide();
}, 5000);

// Hamburger
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

  dots.forEach((dot) => {
  dot.addEventListener('mouseenter', () => {
    const popup = dot.querySelector('.timeline-popup');
    const rect = dot.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    // Reset
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -120%)';

    // Left edge handling
    if (rect.left < 130) {
      popup.style.left = '10px';
      popup.style.transform = 'translate(0, -120%)';
    }

    // Right edge handling
    if (rect.right > screenWidth - 130) {
      popup.style.left = 'auto';
      popup.style.right = '10px';
      popup.style.transform = 'translate(0, -120%)';
    }
  });
});
