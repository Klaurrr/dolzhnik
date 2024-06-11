const OPEN_MENU_CLASS = ".js-open-menu";
const CLOSE_MENU_CLASS = ".js-close-menu";

const MENU = ".js-menu";

const MENU_OPENED = "menu--opened";
const MENU_CLOSING = "menu--closing";

const Menu = () => {
	const openMenuButton = document.querySelector(OPEN_MENU_CLASS);
	const closeMenuButton = document.querySelector(CLOSE_MENU_CLASS);

	const menu = document.querySelector(MENU);

	openMenuButton.addEventListener("click", () => {
		menu.classList.add(MENU_OPENED);
	});

	closeMenuButton.addEventListener("click", () => {
		menu.classList.add(MENU_CLOSING);

		setTimeout(() => {
			menu.classList.remove(MENU_OPENED, MENU_CLOSING);
		}, 500);
	});
};

export default Menu;
