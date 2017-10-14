(function(){
	var me = {};
	var nav = document.querySelector('.nav');

	me.toggleToActiveLink = function(target){
		var links = document.querySelectorAll('.nav__link');

		for (var i = 0; i < links.length; i++) {
			if (links[i].classList.contains('nav__link--active')) {
				links[i].classList.remove('nav__link--active')
			}
			
		}
		target.classList.add('nav__link--active');
	};


	ItUSA.navigation = me;
}());