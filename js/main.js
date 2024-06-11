import Parallax from "./parallax";
import Modals from "./modals";
import Slider from "./slider";
import Scroll from "./scroll";
import Menu from "./menu";

import {
	mainParallax,
	helpsParallax,
	consultationParallax,
	bankruptcySliderParams,
	youtubeSliderParams,
	consultationScroll,
	storiesScroll
} from "./constants";


Menu()

Scroll(consultationScroll);
Scroll(storiesScroll)

Parallax(mainParallax);
Parallax(helpsParallax);
Parallax(consultationParallax);

Slider(bankruptcySliderParams);
Slider(youtubeSliderParams);

Modals();
