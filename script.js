const pi = 3.14;


function calculate() {
    let nummer = document.getElementById('number').value;
    document.getElementById('omtrek').innerHTML = nummer * pi;
    document.getElementById('oppervlakte').innerHTML = nummer * nummer * pi * 0.25;
    
}