var audioDuration = null;
var audioProcess  = null;
var infoArea      = null;
var markerRegion  = null;
var wavesurfer    = Object.create(WaveSurfer);

$(document).ready(function() {
	initWavesurfer();
	initButtons();
	initInfoArea();
});

var initInfoArea = function ()
{
	infoArea = $('#info-area');

	window.setInterval(updateInfoArea, 50);
};

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
		audioDuration = wavesurfer.getDuration();

		$('#wave-content').animate({ opacity: 1 }, 250, function() {
	    	wavesurfer.play();
		})
	});

	wavesurfer.on('audioprocess', function (process) {
		audioProcess = process;
	});

	wavesurfer.on('seek', function (position) {
		audioProcess = audioDuration * position;
	});

	wavesurfer.load(fileurl);
};

var initButtons = function() {
	$('#wave-step-backward').click(function() {
		wavesurfer.skipBackward();
	});

	$('#wave-play').click(function() {
		wavesurfer.play();
	});

	$('#wave-stop').click(function() {
		wavesurfer.stop();
	});

	$('#wave-step-forward').click(function() {
		wavesurfer.skipForward();
	});

	$('#wave-set-marker').click(function() {
		if (markerRegion === null) {
			var end = audioDuration - 1;

			if (end > audioProcess)
			{
				$(this).find('.text').text('Remove marker');

				var regionData = {
					  start: audioProcess
					, end:   end
				};

				markerRegion = wavesurfer.addRegion(regionData);
				
				console.log('Marker set to:', markerRegion);
			}
		}
		else
		{
			markerRegion.remove();
			markerRegion = null;

			$(this).find('.text').text('Set marker');
		}		
	});

	$('#wave-play-from-marker').click(function() {
		if (markerRegion)
		{
			var seekPosition = markerRegion.start / audioDuration;
			wavesurfer.seekTo(seekPosition);
			wavesurfer.play();
		}
		else
		{
			alert('Please set a marker first!');
		}
	});

	$('#wave-save').click(function() {
		alert('Todo');
	});

	$('#wave-delete').click(function() {
		alert('Todo');
	});
};

var updateInfoArea = function ()
{
	var infoText = [];

	if (audioProcess)
	{
		infoText.push(audioProcess.toFixed(2));
		infoText.push('/');
	}

	infoText.push(audioDuration.toFixed(2));

	infoArea.text(infoText.join(' '));
};


