//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
gradientFill.addColorStop(0, "rgba(143, 203, 155, 1)");
gradientFill.addColorStop(1, "rgba(143, 203, 155, 0.1)");
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["01/06", "02/06", "03/06", "04/06", "05/06", "06/06", "07/06"],
datasets: [{
label: "Peso da semana",
data: [100, 99.8, 99, 98.9, 99.5, 98.7, 98],
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