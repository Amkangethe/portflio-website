const root = document.documentElement;
			
			
			const icon = document.getElementById("themeIcon");

			const ICON_LIGHT = "./icons/sun.png";   // shown when theme is light
			const ICON_DARK  = "./icons/moon.png";  // shown when theme is dark

			const setIcon = () => {
				const isDark = root.dataset.theme === "dark";
				icon.src = isDark ? ICON_DARK : ICON_LIGHT; // click shows opposite action
			};

			const btn = document.getElementById("themeToggle");

			btn.onclick = () => {
				root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
				setIcon();
			};

			// set correct icon on initial load (if you set data-theme in HTML/CSS)
			setIcon();

