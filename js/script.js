window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  // Delay hiding loader by 2.5 seconds (2500 ms)
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.add("loaded");
  }, 2500);
});

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

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 100);
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    
    if (hamburger && navLinks && mobileOverlay && closeMenu) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.add('show');
            mobileOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', closeMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
    
    function closeMobileMenu() {
        if (navLinks && mobileOverlay) {
            navLinks.classList.remove('show');
            mobileOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    // Timeline animation
    const dots = document.querySelectorAll('.timeline-dot');
    if (dots.length > 0) {
        const car = document.querySelector('.timeline-car');
        const progress = document.querySelector('.timeline-progress');
        const dotCount = dots.length;
        let currentIndex = 0;
        
        function calculateDotPositions() {
            const container = document.querySelector('.timeline-track');
            if (!container) return [];
            
            const containerRect = container.getBoundingClientRect();
            const positions = [];
            
            dots.forEach(dot => {
                const dotRect = dot.getBoundingClientRect();
                positions.push(dotRect.left - containerRect.left + (dotRect.width / 2) - (car.offsetWidth / 2));
            });
            
            return positions;
        }
        
        let dotPositions = calculateDotPositions();
        
        window.addEventListener('resize', function() {
            dotPositions = calculateDotPositions();
            updateCarPosition();
        });
        
        function animateTimeline() {
            showContent(currentIndex);
            
            setTimeout(() => {
                hideContent(currentIndex);
                
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % dotCount;
                    updateCarPosition();
                    animateTimeline();
                }, 500);
            }, 3000);
        }
        
        function updateCarPosition() {
            if (car && progress) {
                car.style.left = `${dotPositions[currentIndex]}px`;
                progress.style.width = `${(currentIndex / (dotCount - 1)) * 100}%`;
                
                dots.forEach(d => {
                    d.classList.remove('active', 'pulse');
                });
                dots[currentIndex].classList.add('active', 'pulse');
            }
        }
        
        function showContent(index) {
            const dot = dots[index];
            const year = dot.getAttribute('data-year');
            const contentText = dot.getAttribute('data-content');
            const contentBox = dot.querySelector('.timeline-content-box');
            
            if (contentBox) {
                contentBox.innerHTML = `
                    <div class="content-title">${year}</div>
                    <div class="content-text">${contentText}</div>
                `;
                contentBox.classList.add('active');
            }
        }
        
        function hideContent(index) {
            const dot = dots[index];
            const contentBox = dot.querySelector('.timeline-content-box');
            if (contentBox) {
                contentBox.classList.remove('active');
                dot.classList.remove('pulse');
            }
        }
        
        updateCarPosition();
        animateTimeline();

        // Add popup handling for dots
        dots.forEach((dot) => {
            dot.addEventListener('mouseenter', () => {
                const popup = dot.querySelector('.timeline-popup');
                if (popup) {
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
                }
            });
        });
    }

    // Slider functionality
    const slider = document.getElementById("sliderWrapper");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    
    if (slider && prev && next) {
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
    }
});