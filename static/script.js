function search() {
    const name = document.getElementById("countryInput").value;

    fetch(`/country?name=${name}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            document.getElementById("card").classList.remove("hidden");
            document.getElementById("flag").src = data.flag;
            document.getElementById("name").textContent = data.name;
            document.getElementById("capital").textContent = data.capital;
            document.getElementById("population").textContent = data.population.toLocaleString();
            document.getElementById("continent").textContent = data.continent;
            document.getElementById("region").textContent = data.region;
            document.getElementById("currency").textContent = data.currency;
            document.getElementById("language").textContent = data.language;

            document.getElementById("mapBtn").onclick = () => {
                window.open(`https://www.google.com/maps?q=${data.lat},${data.lng}`);
            }
        });
}
