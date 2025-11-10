// Countdown Timer Logic
let timeLeft = 59;
let timerInterval;
let isPaused = false;

const timerElement = document.getElementById('timer');

function startTimer() {
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                redirectNow();
            }
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = !isPaused;
    const pauseButton = document.querySelector('.pause-button');

    if (isPaused) {
        pauseButton.textContent = 'Resume';
        timerElement.textContent = 'paused';
    } else {
        pauseButton.textContent = 'Pause';
        timerElement.textContent = timeLeft;
    }
}

function redirectNow() {
    // Track the redirect event (add your analytics here)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'migration_redirect', {
            'from': 'vercel',
            'to': 'flightcents'
        });
    }

    // Redirect to new domain
    window.location.href = 'https://flightcents.com';
}

// Animated Counter for Stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, duration / steps);
}

// Intersection Observer for Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
}

// Pause timer on any user interaction (optional)
document.addEventListener('click', (e) => {
    // Don't pause if clicking CTA button or pause button
    if (!e.target.classList.contains('cta-button') && 
        !e.target.classList.contains('pause-button')) {
        // Optional: auto-pause on interaction
        // Uncomment below to enable
        // if (!isPaused) pauseTimer();
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    setupScrollAnimations();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Track page visibility (pause timer when tab is hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && !isPaused) {
        pauseTimer();
    }
});
