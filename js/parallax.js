"use strict";

const Parallax = (props) => {
	const { rootElement, circles } = props;
	const parallax = rootElement;

	if (parallax) {
		const SPEED = 0.2;

		let positionX = 0,
			positionY = 0;
		let coordXprocent = 0,
			coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + distX * SPEED;
			positionY = positionY + distY * SPEED;

			circles.forEach((circle) => {
				circle.element.style.cssText = `transform: translate(${
					positionX / circle.ratio
				}%,${positionY / circle.ratio}%);`;
			});

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const boundingRect = parallax.getBoundingClientRect();
			const coordX = e.clientX - boundingRect.left;
			const coordY = e.clientY - boundingRect.top;

			coordXprocent = (coordX / parallaxWidth) * 100;
			coordYprocent = (coordY / parallaxHeight) * 100;
		});
	}
};

export default Parallax;
