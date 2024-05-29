function convertTemperature() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    let celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("output").innerHTML = 
        `Grados Kelvin: ${kelvin.toFixed(2)}<br>Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
