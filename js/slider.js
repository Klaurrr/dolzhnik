import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";

const Slider = (props) => {
	const { rootClass, slideClass, navigation, ...rest } = props;

	new Swiper(rootClass, {
		modules: [Navigation, Pagination],
		slidesPerView: "auto",
		pagination: {
			clickable: true,
		},
		slideClass,
		navigation,
		...rest,
	});
};

export default Slider;
