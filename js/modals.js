const CLIENTS_CONTAINER_ACTIVE = "modal__clients-container--active";
const PROCESS_CONTAINER_ACTIVE = "modal__process-container--active";

const MODAL_CONTENT_ACTIVE = "modal__content--active";
const MODALS_ACTIVE = "modals--active";

const Modals = () => {
	const modalButtons = document.querySelectorAll("[data-modal-button]");
	const closeButtons = document.querySelectorAll(".js-modal-close");
	const prevSlideButton = document.querySelector(".js-modal-prev");
	const nextSlideButton = document.querySelector(".js-modal-next");

	const rootModalContainer = document.querySelector(".js-modals");
	const modalClients = document.querySelector(".js-modal-clients");
	const modalProcess = document.querySelector(".js-modal-process");

	const openModal = (button) => {
		const buttonModalName = button.dataset.modalButton;
		const currentModal = document.querySelector(`[data-modal-name=${buttonModalName}]`);

		document.body.style.overflow = "hidden";
		rootModalContainer.classList.add(MODALS_ACTIVE);

		if (buttonModalName.startsWith("client")) {
			modalClients.classList.add(CLIENTS_CONTAINER_ACTIVE);
		} else {
			modalProcess.classList.add(PROCESS_CONTAINER_ACTIVE);
		}

		currentModal.classList.add(MODAL_CONTENT_ACTIVE);
	};

	const closeModal = () => {
		document.body.style.overflow = "initial";
		rootModalContainer.classList.remove(MODALS_ACTIVE);
		modalClients.classList.remove(CLIENTS_CONTAINER_ACTIVE);
		modalProcess.classList.remove(PROCESS_CONTAINER_ACTIVE);

		const activeModal = document.querySelector(`.${MODAL_CONTENT_ACTIVE}`);

		if (activeModal) {
			const iframe = activeModal.querySelector("iframe");

			if (iframe) {
				const iframeSrc = iframe.src;
				iframe.src = iframeSrc
			}

			activeModal.classList.remove(MODAL_CONTENT_ACTIVE);
		}
	};

	const swipeModal = (direction) => {
		const activeModal = document.querySelector(`.${MODAL_CONTENT_ACTIVE}`);
		const targetModal =
			direction === "next"
				? activeModal.nextElementSibling
				: activeModal.previousElementSibling;
		if (targetModal && targetModal.dataset.modalName) {
			activeModal.classList.remove(MODAL_CONTENT_ACTIVE);
			targetModal.classList.add(MODAL_CONTENT_ACTIVE);
		}
	};

	modalButtons.forEach((button) => {
		button.addEventListener("click", () => openModal(button));
	});

	closeButtons.forEach((button) => {
		button.addEventListener("click", closeModal);
	});

	[modalClients, modalProcess, rootModalContainer].forEach((container) => {
		container.addEventListener("click", (e) => {
			if (e.target === container) {
				closeModal();
			}
		});
	});

	prevSlideButton.addEventListener("click", () => swipeModal("prev"));
	nextSlideButton.addEventListener("click", () => swipeModal("next"));
};

export default Modals;
