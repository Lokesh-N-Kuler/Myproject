const API_KEY = "7ad1a91860d72f8ccb59378a370fd64d";

export async function getWeather(city = "Bengaluru") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log("Request URL:", url);

    const response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("Response:", data);

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}