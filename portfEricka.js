document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animada, .animadad');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animada')) {
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                } else if (entry.target.classList.contains('animadad')) {
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-service');
    const paragraphs = document.querySelectorAll('.text-service');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('icon-service')) {
                    entry.target.classList.add('animate__animated', 'animate__zoomInLeft');
                } else if (entry.target.classList.contains('text-service')) {
                    entry.target.classList.add('animate__animated', 'animate__zoomInRight');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    icons.forEach(icon => {
        observer.observe(icon);
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});