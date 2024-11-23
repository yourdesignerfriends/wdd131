document.addEventListener("DOMContentLoaded", function() {
    const temperature = 75;
    const wind = 5;
    const conditions = "Partly Cloudy";

    function calculateWindChill(T, V) {
        return (35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16))).toFixed(2);
    }

    document.getElementById("temp").innerHTML = temperature + "&deg;F";
    document.getElementById("condition").innerHTML = conditions;
    document.getElementById("wind").innerHTML = wind + "mph";
    document.getElementById("chill").innerHTML = "N/A";

    if (temperature <= 50 && wind > 3) {
        const chill = calculateWindChill(temperature, wind);
        document.getElementById("chill").innerHTML = chill + "&deg;F";
    } else {
        document.getElementById("chill").innerHTML = "N/A";
    }
});