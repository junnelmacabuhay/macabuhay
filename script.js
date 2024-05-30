const sampleData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'DAILY EXPENSES DURING CLASS HOURS',
      data: [50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 80],
      backgroundColor: 'rgba(168, 56, 141, 0.8',
      borderColor: 'rgba(28, 255, 205, 0.91)',
      borderWidth: 1
    }]
  };
  
  const ctx = document.getElementById('myChart').getContext('2d');
  let currentChart;
  
  function renderChart(type) {
    if (currentChart) {
      currentChart.destroy();
    }
    
    currentChart = new Chart(ctx, {
      type: type,
      data: sampleData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function changeChartType(type) {
    renderChart(type);
  }
  
  renderChart('bar');
