var darkTheme = document.querySelector("#dark");
var lightTheme = document.querySelector("#light");
var cssRoots = document.querySelector(":root");
var cardList = document.querySelector(".card-list");

function setCssVar([variable, value]) {
  cssRoots.style.setProperty(variable, value);
}

darkTheme.addEventListener("click", () => {
  colorPlate = [
    ["--bg-primary", "#17141d"],
    ["--bg-sec", "#201c29"],
    ["--card-shadow", "#000"],
    ["--thumb-shadow-1", "rgba(255, 255, 255, 0.25)"],
    ["--thumb-shadow-2", "rgba(255, 255, 255, 0.25)"],
    ["--icon-bg", "rgba(0, 0, 0, 0.25)"],
    ["--active-icon-bg", "#ffee07"],
    ["--active-icon-fg", "rgb(3, 3, 3)"],
    ["--text-color", "#fff"],
    ["--c1", "#ffd518"],
    ["--c2", "rgb(255, 37, 171)"],
    ["--icon-border", "white"],
    ["--icon-sec", "rgba(255, 255, 255, 0.5)"],
  ];
  colorPlate.forEach((color) => setCssVar(color));
  lightTheme.classList.remove("active");
  darkTheme.classList.add("active");
  console.log("from dark theme");
});

lightTheme.addEventListener("click", () => {
  colorPlate = [
    ["--bg-primary", "#fff"],
    ["--bg-sec", "#f0f0f0"],
    ["--card-shadow", "#ccc"],
    ["--thumb-shadow-1", "rgba(255, 255, 255, 0.25)"],
    ["--thumb-shadow-2", "rgba(255, 255, 255, 0.25)"],
    ["--icon-bg", "rgba(255, 255, 255, 0.4)"],
    ["--active-icon-bg", "coral"],
    ["--active-icon-fg", "#fcfcfc"],
    ["--text-color", "#000"],
    ["--c1", "darkblue"],
    ["--c2", "coral"],
    ["--icon-border", "grey"],
    ["--icon-sec", "#ccc"],
  ];
  colorPlate.forEach((color) => setCssVar(color));
  lightTheme.classList.add("active");
  darkTheme.classList.remove("active");
  console.log("from light theme");
});

let AddNewCardTo = (container, i) => {
  container.innerHTML += `
    <article class="card">
        <header class="card-header">
          <h5>#${i + 2}</h5>
          <p>April 19th ${1920 + i}</p>
          <h2>Codeing is fun, if you know how to !</h2>
          <div class="card-author">
            <a href="#" class="author-avatar">
              <img src="me.png" alt="author image" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
          </div>
          <div class="author-name">
            <div class="author-name-prefix">Author</div>
            Shihabe Shnagvi
          </div>
        </header>
      </article>
    `;
};

let i = 0;
for (i = 0; i <= 20; i++) {
  AddNewCardTo(cardList, i);
}
