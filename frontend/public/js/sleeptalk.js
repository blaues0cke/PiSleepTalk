var wavesurfer = Object.create(WaveSurfer);

$(document).ready(function() {
	initWavesurfer();
	initButtons();
});

var initWavesurfer = function () {
	wavesurfer.init({
	      container:     '#wave-content'
	    , height:        400 
	    , progressColor: '#0B486B'
	    , normalize:     true
	    , waveColor:     '#3B8686'
	});

	var wave     = $('#wave');
	var filename = wave.attr('file-to-process');
	var fileurl  = '/' + filename + '.wav';

	console.log('wav url: ', fileurl);

	wavesurfer.on('ready', function () {
		$('#wave-content').animate({ opacity: 1 }, 250, function() {
	    	wavesurfer.play();
		})
	});

	wavesurfer.load(fileurl);
};

var initButtons = function() {
	$('#wave-step-backward').click(function() {
		alert('Todo');
	});

	$('#wave-play').click(function() {
		alert('Todo');
	});

	$('#wave-stop').click(function() {
		alert('Todo');
	});

	$('#wave-step-forward').click(function() {
		alert('Todo');
	});

	$('#wave-set-marker').click(function() {
		alert('Todo');
	});

	$('#wave-play-from-marker').click(function() {
		alert('Todo');
	});

	$('#wave-save').click(function() {
		alert('Todo');
	});

	$('#wave-delete').click(function() {
		alert('Todo');
	});
};



