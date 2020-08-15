function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '50%',
		triggerElement: '.test',
		triggerHook:0.5
	})
	.setPin('.test')
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '.about-title',
		triggerHook:0
	})
	.setPin('.about-title')
	.addIndicators()
	.addTo(controller);
}
splitScroll();