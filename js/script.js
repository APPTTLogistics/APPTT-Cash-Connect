// script.js
$(document).ready(function() {
    // Initialize Slick slider for banner
    $('.banner-one').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1001,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
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
