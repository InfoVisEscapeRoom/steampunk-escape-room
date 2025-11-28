document.addEventListener('DOMContentLoaded', () => {
	const sliders = document.querySelectorAll('[data-slider]');
	if (!sliders.length) return;

	const AUTO_INTERVAL = 6000;

	sliders.forEach((slider) => {
		const slides = slider.querySelectorAll('.making-slider__slide');
		const prevBtn =
			slider.querySelector('[data-slider-prev]') ||
			slider.querySelector('.making-slider__control--prev');
		const nextBtn =
			slider.querySelector('[data-slider-next]') ||
			slider.querySelector('.making-slider__control--next');
		const dots = slider.querySelectorAll('.making-slider__dot');

		if (!slides.length) return;

		let currentIndex = 0;
		let autoTimer = null;

		const setActiveSlide = (index) => {
			slides.forEach((slide, slideIndex) => {
				slide.classList.toggle('is-active', slideIndex === index);
			});

			if (dots.length) {
				dots.forEach((dot, dotIndex) => {
					dot.classList.toggle('is-active', dotIndex === index);
					dot.setAttribute('aria-pressed', dotIndex === index ? 'true' : 'false');
				});
			}

			currentIndex = index;
		};

		const goToNext = () => {
			const nextIndex = (currentIndex + 1) % slides.length;
			setActiveSlide(nextIndex);
		};

		const goToPrev = () => {
			const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
			setActiveSlide(prevIndex);
		};

		const startAutoPlay = () => {
			stopAutoPlay();
			autoTimer = window.setInterval(goToNext, AUTO_INTERVAL);
		};

		const stopAutoPlay = () => {
			if (autoTimer) {
				clearInterval(autoTimer);
				autoTimer = null;
			}
		};

		if (prevBtn) {
			prevBtn.addEventListener('click', () => {
				goToPrev();
				startAutoPlay();
			});
		}

		if (nextBtn) {
			nextBtn.addEventListener('click', () => {
				goToNext();
				startAutoPlay();
			});
		}

		if (dots.length) {
			dots.forEach((dot) => {
				dot.addEventListener('click', () => {
					const targetIndex = Number(dot.dataset.slide);
					if (!Number.isNaN(targetIndex)) {
						setActiveSlide(targetIndex);
						startAutoPlay();
					}
				});
			});
		}

		slider.addEventListener('mouseenter', stopAutoPlay);
		slider.addEventListener('mouseleave', startAutoPlay);

		setActiveSlide(currentIndex);
		startAutoPlay();
	});
});

