const ctxLine = document.getElementById("domainChart").getContext("2d");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Domains",
      data: [10000, 15000, 11000, 40000, 55000, 90000, 105256, 70000, 30000, 60000, 75000, 110000],
      fill: true,
      borderColor: "#f5c542",
      backgroundColor: "rgba(245, 197, 66, 0.2)",
      tension: 0.4,
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

const ctxDonut = document.getElementById("incomeChart").getContext("2d");
new Chart(ctxDonut, {
  type: "doughnut",
  data: {
    labels: ["Domain", "Leaks", "Alerts"],
    datasets: [{
      data: [55356, 20432, 14400],
      backgroundColor: ["#f5c542", "#ff3b30", "#4cd964"],
      borderWidth: 0,
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
    },
    cutout: "70%"
  }
});
