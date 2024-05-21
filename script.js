async function getTempo() {
    const uri = 'https://api.hgbrasil.com/weather?key=4b786d03&format=json-cors&city_name=Maceio,AL';
    const encodedURI = encodeURI(uri);
    
    const resposta = await fetch(encodedURI);
    const json = await resposta.json();

    document.getElementById('temperatura').innerHTML = json.results.temp;
    document.getElementById('cidade').innerHTML = json.results.city;
    document.getElementById('hora').innerHTML = json.results.time;
}

getTempo();