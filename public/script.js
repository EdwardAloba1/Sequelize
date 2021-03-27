

async function getData(){
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json;
    return diningData;
}