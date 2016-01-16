sound = {};

sound.ambient = new Howl({
	urls: ['ambient.wav'],
	loop: true
});

sound.ray = new Howl({
	urls: ['ray.wav']
});

sound.ambient.play();