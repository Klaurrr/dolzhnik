const Scroll = (props) => {
	const { scrollButtons, desiredElement } = props;

	scrollButtons.forEach((button) => {
		button.addEventListener("click", () => {
			desiredElement.scrollIntoView({
				behavior: "smooth",
			});
		});
	});
};

export default Scroll;
