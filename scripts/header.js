// --------------------------------------------------------------------------------------
// Display Header for Mobile or PC
function isMobileOrPC() {
  const isMobile = window.matchMedia("(any-pointer:coarse)").matches;
  return isMobile ? 'mobile' : 'pc';
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
            <div class="drop-menu-back-button">
                <p class="menu-text">Menu</p>
                <img id="menuBackButton" class="menu-back-button" src="./icons/header/close.png" alt="" />
            </div>
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

if (button && menu)
{
    button.addEventListener("click", () =>
    {
        menu.classList.toggle("show");
    });
}

const menuItems = document.querySelectorAll(".js-menu-item");

if (menu)
{
    menuItems.forEach((item) =>
    {
        item.addEventListener("click", () =>
        {
            menu.classList.remove("show");
        });
    });
}

const menu_back_button = document.getElementById("menuBackButton");

if (menu_back_button && menu)
{
    menu_back_button.addEventListener("click", () =>
    {
        menu.classList.remove("show");
    });
}

// --------------------------------------------------------------------------------------
// Toggle Dark and Light Theme
// Toggle Dark and Light Theme
const root = document.documentElement;
const icon = document.getElementById("themeIcon");
const themeToggle = document.getElementById("themeToggle");

const ICON_LIGHT = "./icons/header/sun.png";
const ICON_DARK  = "./icons/header/moon.png";

// load saved theme
let currentTheme = localStorage.getItem("currentTheme");

if (!currentTheme)
{
    currentTheme = "dark"; // default theme
}

root.dataset.theme = currentTheme;

const setIcon = () =>
{
    const isDark = root.dataset.theme === "dark";
    icon.src = isDark ? ICON_DARK : ICON_LIGHT;
};

if (themeToggle && icon)
{
    themeToggle.addEventListener("click", () =>
    {
        const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = newTheme;
        localStorage.setItem("currentTheme", newTheme);
        setIcon();
    });
}

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