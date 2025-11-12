// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// FAQ toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        content.style.display = expanded ? 'none' : 'block';
    });
});

// Chart.js - Difficulty chart
const ctx = document.getElementById('difficultyChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Beginner', 'Intermediate', 'Advanced'],
        datasets: [{
            label: 'Projects by Difficulty',
            data: [50, 35, 15],
            backgroundColor: ['#6366F1', '#8B5CF6', '#C4B5FD'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
    }
});
