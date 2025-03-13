document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.animada');
    const paragraphs = document.querySelectorAll('.animadad');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.tagName.toLowerCase() === 'img') {
                    entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                } else if (entry.target.tagName.toLowerCase() === 'p') {
                    entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    images.forEach(image => {
        observer.observe(image);
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});