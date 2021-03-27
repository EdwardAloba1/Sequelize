

async function getData(){
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json;
    
    let tr = '';
    let tableBody = document.querySelector('#table1');

    diningData.data.forEach((restaurant) => {
        let tr = document.createElement('tr');
        tr.textContent = data.id
        tableBody.appendChild(tr);
    });
}