(function () {
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

  const container = document.createElement("div");
  container.className = "container";

  for (let i = 0; i < 5; i++) {
    const piller = document.createElement("div");
    piller.className = "piller";
    container.appendChild(piller);
  }

  document.body.appendChild(container);

  const pillers = container.querySelectorAll(".piller");
  const interval = setInterval(() => {
    pillers.forEach((el) => {
      el.style.height = 10 + Math.floor(Math.random() * 90) + "%";
    });
  }, 200);

  // Clean up when route changes
  window.addEventListener("unload", () => {
    clearInterval(interval);
    container.remove();
    style.remove();
  });
})();
