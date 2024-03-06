/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const calc = module.require('./modules/calc'),
		  cards = module.require('./modules/cards'),
		  forms = module.require('./modules/forms'),
		  modal = module.require('./modules/modal'),
		  slider = module.require('./modules/slider'),
		  tabs = module.require('./modules/tabs'),
		  timer = module.require('./modules/timer');

	tabs();
	modal();
	timer();
	cards();
	calc();
	forms();
	slider();
});
