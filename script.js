const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

document.getElementById('city-input-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    weatherFn(cityName);
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (
