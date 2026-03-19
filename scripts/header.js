// --------------------------------------------------------------------------------------
// Display Header for Mobile or PC
function isMobileOrPC() {
  const isMobile = window.matchMedia("(any-pointer:coarse)").matches;
  if (isMobile) {
    console.log("Device is likely mobile/touch-based.");
    return 'mobile';
  } else {
    console.log("Device is likely a PC/desktop (fine pointer available).");
    return 'pc';
  }
}


let headerHTML = '';

if(isMobileOrPC() === 'pc')
{
    headerHTML =
    `
    <a href="#About" class="header-logo">Allan Kangethe</a>
				<div class="menu">
					<a href="#About" class="menu-item js-menu-item">About</a>
					<a href="#Skills" class="menu-item js-menu-item">Skills</a>
					<a href="#Timeline" class="menu-item js-menu-item">Timeline</a> 
					<a href="#Projects" class="menu-item js-menu-item">Projects</a> 
					<a class="menu-item"></a>
					<button id="themeToggle">
						<img id="themeIcon" class="theme" src="./icons/header/sun.png" alt="" />
					</button>
				</div>
    `;
}
else if (isMobileOrPC() === 'mobile')
{
    headerHTML =
    `
    <a href="#About" class="header-logo">Allan Kangethe</a>
        <div class="header-buttons">
            <button id="themeToggle">
                <img id="themeIcon" class="theme" src="./icons/header/sun.png" alt="" />
            </button>
            <button id="menuToggle">
                <img id="menuIcon" class="menu" src="./icons/header/menu.png" alt="" />
            </button>
        </div>
        <div id="drop-menu" class="drop-down">
            <a href="#About" class="menu-item js-menu-item">About</a>
            <a href="#Skills" class="menu-item js-menu-item">Skills</a>
            <a href="#Timeline" class="menu-item js-menu-item">Timeline</a> 
            <a href="#Projects" class="menu-item js-menu-item">Projects</a> 
        </div>
    
    `;
    
}

document.querySelector(".js-header").innerHTML = headerHTML;
// --------------------------------------------------------------------------------------
// Menu Button Drop down
const button = document.getElementById("menuToggle");
const menu = document.getElementById("drop-menu");

button.addEventListener("click", () =>
{
    menu.classList.toggle("show");
});




// --------------------------------------------------------------------------------------
// Toggle Dark and Light Theme
const root = document.documentElement;
const icon = document.getElementById("themeIcon");

const ICON_LIGHT = "./icons/header/sun.png";   // shown when theme is light
const ICON_DARK  = "./icons/header/moon.png";  // shown when theme is dark

const setIcon = () => {
	const isDark = root.dataset.theme === "dark";
	icon.src = isDark ? ICON_DARK : ICON_LIGHT; // click shows opposite action
};

document.getElementById("themeToggle").onclick = () => {
	root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
	setIcon();
};

// set correct icon on initial load (if you set data-theme in HTML/CSS)
setIcon();
// --------------------------------------------------------------------------------------
// Menu Button Underline			
document.querySelectorAll(".js-menu-item").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".js-menu-item").forEach((a) => {
      a.classList.remove("is-active");
    });
    link.classList.add("is-active");
  });
});