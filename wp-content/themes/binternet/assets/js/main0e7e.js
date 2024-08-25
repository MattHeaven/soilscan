// Global JS here
const initPreventBehavior = () => {
	const link = document.querySelectorAll("a");
	
	link.forEach((val, idx) => {
		val.addEventListener("click", (e) => {
			if(val.getAttribute("href") === "#") e.preventDefault();
		});
	});
};


const initHeaderFixed = () => {
	let countScroll = $(window).scrollTop(),
		headerElement = $('.header');
	
	if (countScroll > 10) {
		headerElement.addClass("is-fixed");
	} else {
		headerElement.removeClass("is-fixed");
	}
	
};


const initSmoothScroll = () => {
	$('.anchor-js').on("click", (e) => {
		let linkHref = $(e.currentTarget).attr('href'),
			headerHeight = $(".header").outerHeight() || 0,
			topHeightOffset = $(linkHref).offset().top - headerHeight;
		
		$('body, html').animate({
			scrollTop: topHeightOffset
		}, 1000);
		
	});
};


const initSwiperNews = () => {
	if($('.newsSwiper').length > 0) {
		if($(window).width() > 767) {
			$('.news__slider').css({paddingLeft: $('.news__header h6')[0].getBoundingClientRect().left});
		}
	} else {
		return;
	}
	
	let newsSwiper = undefined,
		newsSwiperOpt = {
			loop: true,
			effect: 'slide',
			speed: 1000,
			slidesPerView: 'auto',
			spaceBetween: 30,
			navigation: {
				nextEl: '.news__btn--next',
				prevEl: '.news__btn--prev',
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						if($(window).width() > 767) {
							$('.news .news__btn-wrapper').css({opacity: 1});
						}

						$(swiper.$el).css({opacity: 1});
					}, 150);
				},
			}
		};
	
	if($(window).width() > 767) {
		newsSwiper = new Swiper('.newsSwiper', newsSwiperOpt);
	}
	
	
	/* RESIZE WIN */
	$(window).on('resize orientationchange', () => {
		if($(window).width() > 767 && newsSwiper === undefined) {
			newsSwiper = new Swiper('.newsSwiper', newsSwiperOpt);
		} else if($(window).width() < 768) {
			if(newsSwiper === undefined) return;
			
			newsSwiper.destroy(true, true);
			newsSwiper = undefined;
		}
		
		if($(window).width() > 767) {
			$('.news__slider').css({paddingLeft: $('.news__header h6')[0].getBoundingClientRect().left});
		}
	});
};


const initSwiperInvestors = () => {
	if($('.investorsSwiper').length > 0) {
		if($(window).width() > 767) {
			$('.investors__slider').css({paddingLeft: $('#partners .news__header h6')[0].getBoundingClientRect().left});
		}
	} else {
		return;
	}
	
	let investorsSwiper = undefined,
		investorsSwiperOpt = {
			loop: true,
			effect: 'slide',
			speed: 1000,
			slidesPerView: 'auto',
			spaceBetween: 30,
			navigation: {
				nextEl: '.investors__btn--next',
				prevEl: '.investors__btn--prev',
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						if($(window).width() > 767) {
							$('.news__btn-wrapper--investors').css({opacity: 1});
						}
						
						$(swiper.$el).css({opacity: 1});
					}, 150);
				},
			}
		};
	
	if($(window).width() > 767) {
		investorsSwiper = new Swiper('.investorsSwiper', investorsSwiperOpt);
	}
	
	/* RESIZE WIN */
	$(window).on('resize orientationchange', () => {
		// INVESTORS
		console.log(investorsSwiper);
		if($(window).width() > 767 && investorsSwiper === undefined) {
			investorsSwiper = new Swiper('.investorsSwiper', investorsSwiperOpt);
		} else if($(window).width() < 768) {
			if(investorsSwiper === undefined) return;
			
			investorsSwiper.destroy(true, true);
			investorsSwiper = undefined;
		}
		
		if($(window).width() > 767) {
			$('.investors__slider').css({paddingLeft: $('#partners .news__header h6')[0].getBoundingClientRect().left});
		}
	});
};


const initSwiperPartners = () => {
	if($('.partnersSwiper').length > 0) {
		if($(window).width() > 767) {
			$('.partners__slider').css({paddingLeft: $('#partners .news__header h6')[0].getBoundingClientRect().left});
		}
	} else {
		return;
	}
	
	let partnersSwiper = undefined,
		partnersSwiperOpt = {
			loop: true,
			effect: 'slide',
			speed: 1000,
			slidesPerView: 'auto',
			spaceBetween: 30,
			navigation: {
				nextEl: '.partners__btn--next',
				prevEl: '.partners__btn--prev',
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						if($(window).width() > 767) {
							$('.news__btn-wrapper--partners').css({opacity: 1});
						}
						
						$(swiper.$el).css({opacity: 1});
					}, 150);
				},
			}
		};
	
	if($(window).width() > 767) {
		partnersSwiper = new Swiper('.partnersSwiper', partnersSwiperOpt);
	}
	
	/* RESIZE WIN */
	$(window).on('resize orientationchange', () => {
		if($(window).width() > 767 && partnersSwiper === undefined) {
			partnersSwiper = new Swiper('.partnersSwiper', partnersSwiperOpt);
		} else if($(window).width() < 768) {
			if(partnersSwiper === undefined) return;
			
			partnersSwiper.destroy(true, true);
			partnersSwiper = undefined;
		}
		
		if($(window).width() > 767) {
			$('.partners__slider').css({paddingLeft: $('#partners .news__header h6')[0].getBoundingClientRect().left});
		}
	});
};


const initPopup = () => {
	if($('.popup-video-js').length > 0) {
		$('.popup-video-js').magnificPopup({
			type: 'iframe',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'is-show',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: function(url) {
							var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
							if ( !m || !m[1] ) return null;
							return m[1];
						},
						src: '//www.youtube.com/embed/%id%?autoplay=1'
					},
					vimeo: {
						index: 'vimeo.com/',
						id: function(url) {
							var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
							if ( !m || !m[5] ) return null;
							return m[5];
						},
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					}
				}
			},
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
				},
				close: function() {}
			}
		});
	}
};


const initStellar = () => {
	if ($(".parallax-js").length) {
		$('.parallax .parallax__bg').each(function() {
            $(this).parallax("50%", .12);
		})
	}
};


const initHamburger = () => {
	const btn = $(".hamburger-js"),
		hideScrollContainer = $("html, body"),
		mobileContainer = $(".mobile-block-js");
	
	/**
	 * @description
	 */
	if(btn.length > 0) {
		btn.on("click", (ev) => {
			btn.toggleClass("is-active");
			$(".mobile-block-js").toggleClass("is-open");
			
			$("html, body").toggleClass('is-hideScroll')
		});
	}
	
};


const initMoreNews = () => {
	$('.more-news-js').on('click', (ev) => {
		$('.news__slider .swiper-slide:hidden').fadeIn(350);
		$(ev.currentTarget).hide();
	});
	
	$('.more-partners-js').on('click', (ev) => {
		$(ev.currentTarget).closest('.partners__wrapper').find('.swiper-container .swiper-slide:hidden').fadeIn(350);
		$(ev.currentTarget).hide();
	});
};


const collapseCB = () => {
	$('.join__collapse-head').on('click', (ev) => {
		const el = $(ev.currentTarget);
		
		if(el.hasClass('is-active')) {
			el.removeClass('is-active');
			el.siblings('.join__collapse-body').slideUp(350);
		} else {
			el.addClass('is-active');
			$('.join__collapse-body').slideUp(350);
			el.siblings('.join__collapse-body').slideDown(350);
		}
	});
};


window.addEventListener('load', () => {
	
	initPreventBehavior();
	initHeaderFixed();
	initSmoothScroll();
	initSwiperNews();
	initSwiperInvestors();
	initSwiperPartners();
	initPopup();
	initStellar();
	initHamburger();
	initMoreNews();
	collapseCB();
	
	if($(window).width() < 768) {
		$('.main__wrapper').css({height: document.documentElement.clientHeight});
	}
	
});

window.addEventListener('scroll', () => {
	
	initHeaderFixed();
	
});
