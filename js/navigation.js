// Navigation system
const navigation = {
    currentSlide: 0,
    totalSlides: 9,
    
    init() {
        this.updateCounter();
        this.updateProgress();
        this.setupKeyboardNavigation();
    },
    
    next() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    },
    
    prev() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    },
    
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;
        
        const slides = document.querySelectorAll('.slide');
        slides[this.currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        
        this.currentSlide = index;
        this.updateCounter();
        this.updateProgress();
        
        // Initialize map if navigating to map slide
        if (index === 1 && typeof initMap === 'function') {
            setTimeout(initMap, 100);
        }
    },
    
    updateCounter() {
        document.getElementById('current-slide').textContent = this.currentSlide + 1;
        document.getElementById('total-slides').textContent = this.totalSlides;
    },
    
    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.getElementById('progress').style.width = progress + '%';
    },
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    navigation.init();
});