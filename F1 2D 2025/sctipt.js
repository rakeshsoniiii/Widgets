const track = document.getElementById("track");
let highestScore = 0;

const f1_2025 = {
    teams: {
        mclaren: { color: "#FF8700" },
        red_bull: { color: "#1E41FF" },
        ferrari: { color: "#DC0000" },
        mercedes: { color: "#00D2BE" },
        williams: { color: "#005AFF" },
        sauber: { color: "#52E252" },
        aston_martin: { color: "#006F62" },
        haas: { color: "#B6BABD" },
        racing_bulls: { color: "#6c98ff" },
        alpine: { color: "#00a1e8" }
    },
    rounds: [
        { race: "Australia" }, { race: "China" }, { race: "Japan" }, { race: "Bahrain" },
        { race: "Saudi Arabia" }, { race: "Miami" }, { race: "Imola" }, { race: "Monaco" },
        { race: "Spain" }, { race: "Canada" }, { race: "Austria" }, { race: "Britain" },
        { race: "Belgium" }, { race: "Hungary" }, { race: "Netherlands" }, { race: "Italy" },
        { race: "Baku" }, { race: "Singapore" }, { race: "Austin" }, { race: "Mexico" },
        { race: "Brazil" }, { race: "Las Vegas" }, { race: "Qatar" }, { race: "Abu Dhabi" }
    ],
    drivers: {
        lando_norris: { name: "Lando Norris", team: "mclaren", races: [25,19,18,15,12,26,18,25,18,0,25,25,24,25,0,18,6,15,18,25,33,0,18,15], total: 423 },
        max_verstappen: { name: "Max Verstappen", team: "red_bull", races: [18,18,25,8,18,12,25,12,1,18,0,10,20,2,18,25,25,18,33,15,20,25,30,25], total: 421 },
        oscar_piastri: { name: "Oscar Piastri", team: "mclaren", races: [2,32,15,25,25,32,15,15,25,12,18,18,32,18,25,15,0,12,10,10,10,0,26,18], total: 410 },
        george_russell: { name: "George Russell", team: "mercedes", races: [15,20,10,18,10,20,6,0,12,25,10,1,10,15,12,10,18,25,15,6,18,18,15,10], total: 319 }
    }
};

function init() {
    track.dataset.drivers = Object.keys(f1_2025.drivers).length;
    track.dataset.rounds = f1_2025.rounds.length;

    // Set round names
    f1_2025.rounds.forEach((r, i) => {
        track.setAttribute(`data-r${i + 1}`, r.race);
    });

    for (const id in f1_2025.drivers) {
        const d = f1_2025.drivers[id];
        const car = document.createElement("div");
        car.className = "car";
        car.dataset.color = f1_2025.teams[d.team].color;
        car.dataset.total = d.total;

        const label = document.createElement("span");
        label.className = "car-label";
        label.textContent = d.name;
        car.appendChild(label);

        car.innerHTML += `<svg><use href="#car-template"></use></svg>`;

        d.races.forEach((p, i) => car.setAttribute(`data-r${i + 1}`, p));

        if (d.total > highestScore) highestScore = d.total;
        track.appendChild(car);
    }

    document.documentElement.style.setProperty("--highest-score", highestScore);
}

init();