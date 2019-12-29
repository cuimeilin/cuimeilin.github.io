function fadeInPage() {
	if (!window.AnimationEvent) {
		return;
	}

	var fader = document.getElementById('fader');
	fader.classList.add('fade-out');
}