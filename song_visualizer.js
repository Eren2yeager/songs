// Create styles
const style = document.createElement("style");
style.textContent = `
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 5px;
    width: 200px;
    height: 200px;
  }
  .piller {
    border-radius: 10px;
    background-color: green;
    width: 20%;
    height: 10%;
    transition: height 0.2s ease-in-out;
  }
`;
document.head.appendChild(style);

// Create container
const container = document.createElement("div");
container.className = "container";

// Create 5 pillers
for (let i = 0; i < 5; i++) {
  const piller = document.createElement("div");
  piller.className = "piller";
  container.appendChild(piller);
}

// Add container to body
document.body.appendChild(container);

// Animation logic
let pillers = document.querySelectorAll(".piller");
let a;

function start() {
  a = setInterval(() => {
    pillers.forEach((element) => {
      element.style.height = 10 + Math.floor(Math.random() * 90) + "%";
    });
  }, 200);
}

function stop() {
  clearInterval(a);
  pillers.forEach((element) => {
    element.style.height = "10%";
  });
}

// Auto start for demo (optional)
start();

// Stop after 5 seconds (for testing)
setTimeout(stop, 5000);
