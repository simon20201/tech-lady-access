```javascript
// script.js

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const matrix = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
    drops[i] = 1;
}

function drawMatrix(){

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){

        const text = matrix[
            Math.floor(Math.random()*matrix.length)
        ];

        ctx.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height &&
           Math.random() > 0.975){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

const beep = document.getElementById("beep");

let percent = 0;

const loading = document.getElementById("loading");

const loadInterval = setInterval(()=>{

    percent++;

    loading.innerHTML =
    "Hacking firewall... " + percent + "%";

    if(percent % 10 === 0){
        beep.play();
    }

    if(percent >= 100){

        clearInterval(loadInterval);

        loading.innerHTML =
        "TARGET ACQUIRED ✅";

        startTerminal();
    }

},60);

const terminalLines = [

"Initializing crush.exe...",
"Connecting to emotional database...",
"Decrypting her smile...",
"Firewall strength: WEAK 😏",
"",
"REQUESTING ACCESS TO:",
"[✓] Disturb her",
"[✓] Send memes",
"[✓] Steal attention",
"[✓] Think about her daily",
"",
"WARNING:",
"Her heart firewall disabled ❤️",
"",
"Awaiting authorization..."
];

const terminal = document.getElementById("terminal");

function startTerminal(){

    let i = 0;

    function typeLine(){

        if(i < terminalLines.length){

            const div = document.createElement("div");

            div.classList.add("line");

            terminal.appendChild(div);

            let text = terminalLines[i];
            let char = 0;

            const typing = setInterval(()=>{

                div.textContent += text[char];

                char++;

                beep.play();

                if(char >= text.length){

                    clearInterval(typing);

                    i++;

                    setTimeout(typeLine, 300);
                }

            },30);

        }else{

            startCountdown();

            document.getElementById("buttons")
            .classList.remove("hidden");
        }

    }

    typeLine();
}

function startCountdown(){

    let count = 10;

    const countdown =
    document.getElementById("countdown");

    const timer = setInterval(()=>{

        countdown.innerHTML =
        "AUTO-ACCESS IN: " + count;

        count--;

        if(count < 0){

            clearInterval(timer);

            grantAccess();
        }

    },1000);
}

const denyBtn =
document.getElementById("denyBtn");

denyBtn.addEventListener("mouseover", ()=>{

    const x = Math.random()*300;
    const y = Math.random()*100;

    denyBtn.style.left = x + "px";
    denyBtn.style.top = y + "px";
});

function grantAccess(){

    document.getElementById("buttons")
    .style.display = "none";

    document.getElementById("countdown")
    .style.display = "none";

    document.getElementById("finalMessage")
    .innerHTML = `
    ACCESS GRANTED ❤️<br><br>
    Disturbance protocol activated successfully.<br>
    Welcome to SimonOS.
    `;
}
```
