document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) {
        const currentYear = new Date().getFullYear();
        footerCopy.innerHTML = footerCopy.innerHTML.replace(/\d{4}/, currentYear);
    }

    // Enhanced smooth scrolling for section navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});