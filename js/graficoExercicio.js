//line
var ctxL = document.getElementById("lineChartExerc").getContext('2d');
var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
gradientFill.addColorStop(0, "rgba(143, 203, 155, 1)");
gradientFill.addColorStop(1, "rgba(143, 203, 155, 0.1)");
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Futebol", "Corrida", "Natação", "Basquete", "Academia"],
datasets: [{
label: "Exercícios da semana",
data: [600, 400, 859, 550, 350],
backgroundColor: gradientFill,
            borderColor: [
              '#5b9279',
            ],
            borderWidth: 2,
            pointBorderColor: "#12130f",
            pointBackgroundColor: "rgba(173, 53, 186, 0.1)"
},
]
},
options: {
responsive: true
}
});