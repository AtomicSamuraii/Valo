const agentName = {
    Duelist: [
        { name: "Jett", splashArt: "images/jett-splash.jpg", voiceLine: "voices/jett-voiceline.mp3" },
        { name: "Phoenix", splashArt: "images/phoenix-splash.jpg", voiceLine: "voices/phoenix-voiceline.mp3" },
        { name: "Reyna", splashArt: "images/reyna-splash.jpg", voiceLine: "voices/reyna-voiceline.mp3" },
        { name: "Raze", splashArt: "images/raze-splash.jpg", voiceLine: "voices/raze-voiceline.mp3" },
        { name: "Yoru", splashArt: "images/yoru-splash.jpg", voiceLine: "voices/yoru-voiceline.mp3" },
        { name: "Neon", splashArt: "images/neon-splash.jpg", voiceLine: "voices/neon-voiceline.mp3" },
        { name: "Iso", splashArt: "images/iso-splash.jpg", voiceLine: "voices/iso-voiceline.mp3" }
    ],
    Controller: [
        { name: "Brimstone", splashArt: "images/brimstone-splash.jpg", voiceLine: "voices/brimstone-voiceline.mp3" },
        { name: "Viper", splashArt: "images/viper-splash.jpg", voiceLine: "voices/viper-voiceline.mp3" },
        { name: "Omen", splashArt: "images/omen-splash.jpg", voiceLine: "voices/omen-voiceline.mp3" },
        { name: "Clove", splashArt: "images/clove-splash.jpg", voiceLine: "voices/clove-voiceline.mp3" },
        { name: "Astra", splashArt: "images/astra-splash.jpg", voiceLine: "voices/astra-voiceline.mp3" },
        { name: "Harbour", splashArt: "images/harbour-splash.jpg", voiceLine: "voices/harbour-voiceline.mp3" }

        
    ],
    Sentinel: [
        { name: "Sage", splashArt: "images/sage-splash.jpg", voiceLine: "voices/sage-voiceline.mp3" },
        { name: "Cypher", splashArt: "images/cypher-splash.jpg", voiceLine: "voices/cypher-voiceline.mp3" },
        { name: "Deadlock", splashArt: "images/deadlock-splash.jpg", voiceLine: "voices/deadlock-voiceline.mp3" },
        { name: "Killjoy", splashArt: "images/killjoy-splash.jpg", voiceLine: "voices/killjoy-voiceline.mp3" },
        { name: "Chamber", splashArt: "images/chamber-splash.jpg", voiceLine: "voices/chamber-voiceline.mp3" },
        { name: "Vyse", splashArt: "images/vyse-splash.jpg", voiceLine: "voices/vyse-voiceline.mp3" }
    ],
    Initiator: [
        { name: "Sova", splashArt: "images/sova-splash.jpg", voiceLine: "voices/sova-voiceline.mp3" },
        { name: "Kayo", splashArt: "images/kayo-splash.jpg", voiceLine: "voices/kayo-voiceline.mp3" },
        { name: "Fade", splashArt: "images/fade-splash.jpg", voiceLine: "voices/fade-voiceline.mp3" },
        { name: "Gekko", splashArt: "images/gekko-splash.jpg", voiceLine: "voices/gekko-voiceline.mp3" },
        { name: "Skye", splashArt: "images/skye-splash.jpg", voiceLine: "voices/skye-voiceline.mp3" },
        { name: "Breach", splashArt: "images/breach-splash.jpg", voiceLine: "voices/breach-voiceline.mp3" }
    ] 
};



const agentNameDisplay = document.getElementById('agentName');
const agentSplash = document.getElementById('agentSplash');
const agentVoiceLine = document.getElementById('agentVoiceLine');


function spinForAgent(selectedType) {
    let selectedAgents;
    if (selectedType === "allAgents") {
        selectedAgents = [].concat(
            agentName.Duelist,
            agentName.Controller,
            agentName.Sentinel,
            agentName.Initiator
        );
    } else {
        selectedAgents = agentName[selectedType];
    }

    const randomAgent = selectedAgents[Math.floor(Math.random() * selectedAgents.length)];
    agentNameDisplay.textContent = randomAgent.name;
    agentSplash.src = randomAgent.splashArt;
    agentVoiceLine.src = randomAgent.voiceLine;
    agentSplash.classList.add("show-splash");
    agentSplash.style.display = "block";
    
    backgroundMusic.volume = 0.2;
    agentVoiceLine.play();

    agentVoiceLine.onended = () =>{
        backgroundMusic.volume = 0.5;
    };

    setTimeout(() => {
        agentSplash.classList.remove("show-splash")
        agentSplash.style.display = "none";
    }, 4000);
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedType = event.target.closest('a').id;
        spinForAgent(selectedType);
    });
});

document.getElementById('spinButton').addEventListener('click', () => {
    spinForAgent("allAgents");
});

document.getElementById('fullScreenButton').addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});