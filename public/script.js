async function getData(){
    const diningRequest = await fetch('/api/wholeMeals');
    const diningData = await diningRequest.json();
    //console.log(diningData);
    return diningData;
}

async function getDining(){
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();
    console.table(diningData.data);
<<<<<<< HEAD
    const rows = [diningData];
    diningData.data.forEach((place) => {
        targetBox = document.querySelector('.table_id');
        const appendItem = document.createElement('tr');
        appendItem.classList.add('tbl-row');
        for(i=0;i<diningData.data.length;i +=1){
            console.log(diningData.data[i].hall_name);
             appendItem.innerHTML = ' <td>"test"</td> ';
            // targetBox.append(appendItem);
            var td = document.createElement('td');
            targetBox.append(appendItem);
        }
    });
=======
>>>>>>> 87b1f68b0cf177d582a527c31db9413549505be5
    return diningData;
}

getDining();


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  
  const complete = {};
  async function windowActions(){
   
    const results = await getData();
    const meals = results.data;
    //console.table(meals.data);

    const mealArray = [1,2,3,4,5,6,7,8,9,10];
      const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0,meals.length - 1);
        return meals[random];
    });
    
    console.table(selectedMeals);
    
}

console.log(complete);

window.onload = function () {

   windowActions();
  
<<<<<<< HEAD
   console.table(windowActions());
=======
   //console.table(windowActions());
>>>>>>> 87b1f68b0cf177d582a527c31db9413549505be5

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Meals Vs Macros"
        },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Meals",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 56 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 41 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 75 },
                { x: new Date(2017, 1, 5), y: 98 }
            ]
        },
        {
            type: "stackedBar",
            name: "Snacks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 86 },
                { x: new Date(2017, 0, 31), y: 95 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 58 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 65 },
                { x: new Date(2017, 1, 5), y: 89 }
            ]
        },
        {
            type: "stackedBar",
            name: "Drinks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 48 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 41 },
                { x: new Date(2017, 1, 2), y: 55 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 83 }
            ]
        },
        {
            type: "stackedBar",
            name: "Dessert",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 61 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 61 },
                { x: new Date(2017, 1, 2), y: 75 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 105 }
            ]
        },
        {
            type: "stackedBar",
            name: "Takeaway",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 52 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 20 },
                { x: new Date(2017, 1, 2), y: 35 },
                { x: new Date(2017, 1, 3), y: 30 },
                { x: new Date(2017, 1, 4), y: 45 },
                { x: new Date(2017, 1, 5), y: 25 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }

    

var t = document.getElementById('table_id');
var r =document.createElement('TR');
t.tBodies[0].appendChild(r)


getData();
console.log('test');
windowActions();
//window.onload = windowActions;
// let tr = '';
// let tableBody = document.querySelector('#table_id');

// diningData.data.forEach((restaurant) => {
//     let tr = document.createElement('tr');
//     tr.textContent = data.id
//     tableBody.appendChild(tr);
// });