let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const price = document.querySelector('#stock-price');

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    price.innerHTML = stockObject.p;
    //console.log(stockObject.p);
}


// Esta parte debe estar dentro de la función conversion()
function conversion() {
    const dolares = parseFloat(document.getElementById('ingresoUsd').value);

    if (isNaN(dolares)) {
        alert('Por favor ingrese un número válido en dólares.');
        return;
    }

    // Precio actual de BTC obtenido del WebSocket
    const precioActualBtc = parseFloat(price.innerHTML);

    // Cálculos
    const montoBtc = dolares / precioActualBtc;
    const montoCln = dolares * 8.75; // Tasa de conversión de 8.75 colones por 1 dólar

    // Actualizar los campos de salida
    document.getElementById('converBtc').value = montoBtc.toFixed(8);
    document.getElementById('converCln').value = montoCln.toFixed(2);
}