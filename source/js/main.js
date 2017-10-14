(function() {
	//window.It = {};
	//Add event listeners
	var openFormButton = document.querySelector('.arrow-down');
	var form = document.querySelector('.form');
	var nav = document.querySelector('.nav');
	//console.log(openFormButton);

	if (openFormButton) {
		openFormButton.addEventListener('click', function(e) {
			e.preventDefault();
		ItUSA.form.open();
	})
	}

	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			if (ItUSA.form.isValid()) {
				console.log('All good');
			} else {
				console.log('Is not valid');
			}
		})
	}

	if (nav) {
		nav.addEventListener('click', function(e) {
				var target = e.target;

				if(target.tagName. toLowerCase() !== 'a') {
					return;
				}
				e.preventDefault();
			ItUSA.navigation.toggleToActiveLink(target);
		});
	}

}());