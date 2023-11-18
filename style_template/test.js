const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01', '05', '10', '15', '20', '25'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 3,
            borderColor: '#18ad3b'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false,
                    color: 'gray',
                    dash: [4, 16]
                },
                grid: {
                    color: 'gray',
                    tickBorderDash: [4, 16],
                    tickBorderDashOffset: 4
                },
                ticks: {
                    color: 'white',
                    padding: 10
                }
            },
            x: {
                border: {
                    display: false,
                    color: 'gray'
                },
                grid: {
                    color: 'transparent'
                },
                ticks: {
                    color: 'white',
                    padding: 10
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});