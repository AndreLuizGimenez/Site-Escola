document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slidesSections = document.querySelectorAll('.slides-section');
    const dots = document.querySelectorAll('.dot');
    const courseTabs = document.querySelectorAll('.course-tab');
    let startX;
    let currentSection = 0;
    let currentSlide = 0;


    function updateSlidesVisibility() {
        slidesSections.forEach((section, index) => {
            section.style.display = index === currentSection ? 'flex' : 'none';
        });
    }


    function updateSlideshow() {
        const section = slidesSections[currentSection];
        section.style.transform = `translateX(${-currentSlide * 100}vw)`;
        updateDots();
    }

 
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }


    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }


    function handleTouchMove(event) {
        if (!startX) return; 
        const currentX = event.touches[0].clientX; 
        const diffX = startX - currentX; 

  
        if (diffX > 50) {
            currentSlide++;
            if (currentSlide > 1) { 
                currentSlide = 1;
            }
            updateSlideshow();
            startX = null; 
        }
       
        else if (diffX < -50) {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = 0;
            }
            updateSlideshow();
            startX = null; 
        }
    }


    slideshowContainer.addEventListener('touchstart', handleTouchStart);
    slideshowContainer.addEventListener('touchmove', handleTouchMove);


    updateSlidesVisibility();
    updateSlideshow();
});
