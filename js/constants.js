export const bankruptcySliderParams = {
	rootClass: ".bankruptcy__slider-inner",
	slideClass: "bankruptcy__card",
	navigation: {
		nextEl: ".js-bankruptcy__button-next",
		prevEl: ".js-bankruptcy__button-prev",
	},
	spaceBetween: 16,
	breakpoints: {
		576: {
			sliderPerView: 1
		}
	}
};

export const youtubeSliderParams = {
	rootClass: ".youtube__slider-inner",
	slideClass: "youtube__card",
	navigation: {
		nextEl: ".js-youtube__button-next",
		prevEl: ".js-youtube__button-prev",
	},
	spaceBetween: 8,
};

export const mainParallax = {
	rootElement: document.querySelector(".js-about-us"),
	circles: [
		{
			element: document.querySelector(".js-main-decor-1"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-main-decor-2"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-main-decor-3"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-main-decor-4"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-main-decor-5"),
			ratio: 3.5,
		},
	],
};

export const helpsParallax = {
	rootElement: document.querySelector(".js-helps"),
	circles: [
		{
			element: document.querySelector(".js-helps-decor-1"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-helps-decor-2"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-helps-decor-3"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-helps-decor-4"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-helps-decor-5"),
			ratio: 3.5,
		},
	],
};

export const consultationParallax = {
	rootElement: document.querySelector(".js-consultation"),
	circles: [
		{
			element: document.querySelector(".js-consultation-decor-1"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-consultation-decor-2"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-consultation-decor-3"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-consultation-decor-4"),
			ratio: 3,
		},
		{
			element: document.querySelector(".js-consultation-decor-5"),
			ratio: 3.5,
		},
		{
			element: document.querySelector(".js-consultation-decor-6"),
			ratio: 3,
		},
	],
};


export const consultationScroll = {
	scrollButtons: document.querySelectorAll(".js-consultation-button"),
	desiredElement: document.querySelector(".js-consultation")
}

export const storiesScroll = {
	scrollButtons: document.querySelectorAll(".js-stories-button"),
	desiredElement: document.querySelector(".js-clients")
}