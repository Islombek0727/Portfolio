// Data for Chart.js
const data = {
    labels: ['Task 1', 'Task 2', 'Task 3'],
    datasets: [{
        label: 'Progress',
        data: [70, 50, 30],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for Chart.js
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
const userChart = new Chart(
    document.getElementById('userChart'),
    config
);