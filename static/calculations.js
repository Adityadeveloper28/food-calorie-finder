function showPopup() {
    document.getElementById("popupBox").style.display = "flex";
}
var showBtn = document.getElementById('button-addon2')
showBtn.addEventListener('click',showPopup);

// Hide Popup Box
function hidePopup() {

    document.getElementById("popupBox").style.display = "none";
    let weight = document.getElementById("textInput").value;
    console.log("Input Text: " + weight);

    var tot_run = (weight * 1.05) * 5
    console.log(tot_run)
    var api = "{{api.0.calories}}"
    var mna = parseInt((api / tot_run) * 60);
    document.getElementById('result_run').innerHTML = mna;


    var tot_walk = (weight * 0.49) * 5
    console.log(tot_walk)

    var ans = parseInt((api / tot_walk) * 60);
    document.getElementById('result_walk').innerHTML = ans;



}
var hidBtn = document.getElementById('hideBtn')
hidBtn.addEventListener('click',hidePopup)
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['carbohydrates', 'Cholesterol', 'Saturated fat', 'Total Fat', 'Fiber Content', 'Potassium', 'Protein','Sodium','Sugar'],
        datasets: [{
            label: 'Nutritional values of {{api.0.name | capfirst}}',
            data: [
                 '{{api.0.carbohydrates_total_g}}',
                  '{{api.0.cholesterol_mg}}',
                 '{{api.0.fat_saturated_g}}',
                  '{{api.0.fat_saturated_g}}',
                  '{{api.0.fat_total_g}}',
                  '{{api.0.potassium_mg}}',
                  '{{api.0.protein_g}}',
                  '{{api.0.sodium_mg}}',
'                              {{api.0.sugar_g}}',
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let popup = document.getElementById('popup');


function openbtn() {
    popup.classList.add("open-popup");

}

function closebtn() {
    popup.classList.remove("open-popup");
    let Weight = document.getElementById('Weight').value;
    var tot_run = (Weight * 1.05) * 5
    document.getElementById('result_run').innerHTML = tot_run;



    var tot_walk = (Weight * 0.49) * 5
    document.getElementById('result_walk').innerHTML = tot_walk;

}








