var audioDuration = null;
var audioProcess  = null;
var frameProcess  = null;
var infoArea      = null;
var loaded        = false;
var markerRegion  = null;
var wavesurfer    = Object.create(WaveSurfer);

$(document).ready(function() {
	initWavesurfer();
	initButtons();
	initInfoArea();
	initTextManager();
});

var initInfoArea = function () {
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

			loaded = true;
		})

		$('#wave-loading').fadeOut(250);
	});

	wavesurfer.on('audioprocess', function (process) {
		audioProcess = process;
		frameProcess = Math.round(audioProcess * 15);
	});

	wavesurfer.on('seek', function (position) {
		audioProcess = audioDuration * position;
		frameProcess = Math.round(audioProcess * 15);
	});

	wavesurfer.on('play', function () {
		$('#wave-play')
			.find('.text')
				.text('Pause')
			.end()
			.find('.fa')
				.removeClass('fa-play')
				.addClass('fa-pause')
		;
	});

	wavesurfer.on('pause', function () {
		$('#wave-play')
			.find('.text')
				.text('Play')
			.end()
			.find('.fa')
				.removeClass('fa-pause')
				.addClass('fa-play')
		;
	});

	wavesurfer.load(fileurl);
};

var initButtons = function() {
	$('#wave-step-backward').click(function() {
		if (!loaded) return;

		wavesurfer.skipBackward();
	});

	$('#wave-play').click(function() {
		if (!loaded) return;

		wavesurfer.playPause();
	});

	$('#wave-stop').click(function() {
		if (!loaded) return;
		
		wavesurfer.stop();
	});

	$('#wave-step-forward').click(function() {
		if (!loaded) return;
		
		wavesurfer.skipForward();
	});

	$('#wave-set-marker').click(function() {
		if (!loaded) return;
		
		if (markerRegion === null) {
			var end = audioDuration - 1;

			if (end > audioProcess) {
				$(this).find('.text').text('Remove marker');

				var regionData = {
					  start: audioProcess
					, end:   end
				};

				markerRegion = wavesurfer.addRegion(regionData);
				
				console.log('Marker set to:', markerRegion);
			}
		}
		else {
			markerRegion.remove();
			markerRegion = null;

			$(this).find('.text').text('Set marker');
		}		
	});

	$('#wave-play-from-marker').click(function() {
		if (!loaded) return;
		
		if (markerRegion) {
			var seekPosition = markerRegion.start / audioDuration;
			wavesurfer.seekTo(seekPosition);
			wavesurfer.play();
		}
		else {
			alert('Please set a marker first!');
		}
	});

	$('#wave-save').click(function() {
		if (!loaded) return;
		
		alert('Todo');
	});

	$('#wave-delete').click(function() {
		if (!loaded) return;
		
		alert('Todo');
	});
};

var updateInfoArea = function () {
	if (loaded) {
		// Thanks to
		// * http://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
		var infoText = [];

		if (audioProcess) {
			infoText.push(audioProcess.toFixed(2));
			infoText.push('(' + frameProcess + ')');
			infoText.push('/');
		}

		infoText.push(audioDuration.toFixed(2));
		infoArea.text(infoText.join(' '));
	}
};

var initTextManager = function () {
	var windowHeight = $(window).height();

	$('#text-wrapper').css('maxHeight', windowHeight - 570);

	$('#text-manager')
		.on('click', '.arrow-up', function() {
			var button     = $(this);
			var tr         = button.parents('tr');
			var previousTr = tr.prev();

			if (previousTr.length > 0)
			{
				tr.insertBefore(previousTr);
			}
		})
		.on('click', '.arrow-down', function() {
			var button = $(this);
			var tr     = button.parents('tr');
			var nextTr = tr.next();

			if (nextTr.length > 0)
			{
				tr.insertAfter(nextTr);
			}
		})
		.on('click', '.arrow-left', function() {
			var button     = $(this);
			var tr         = button.parents('tr');
			var frameInput = tr.find('input.frame');

			frameInput.val(pad(frameProcess, 4));
		})
		.on('click', '.delete', function() {
			var button    = $(this);
			var tr        = button.parents('tr');
			var tableBody = tr.parents('tbody');
			var trs    	  = tableBody.find('tr');

			if (trs.length > 1)
			{
				tr.remove();
			}
			else
			{
				tr.find('input').val('');
			}
		})
		.on('blur', 'input.frame', function() {
			var input = $(this);
			input.val(pad(Math.abs(parseInt(input.val())), 4));
		})
	;

	$('#text-add').click(function() {

		var tableBody     = $('#text-manager tbody');
		var firstTableRow = tableBody.find('tr:first-child');
		var newTableRow   = firstTableRow.clone();
		newTableRow.find('input').val('');
		newTableRow.appendTo(tableBody);
		newTableRow
			.find('input')
				.last()
					.focus()
				.end()
				.first()
					.val(pad(frameProcess, 4))
		;
	})

	$('#text-clear').click(function() {
		$('#clear-texts').modal('show');
	});

	$('#text-sort').click(function() {
		$('#text-manager tbody tr').sort(function(a, b) {
			var jA 		= $(a);
			var jB 		= $(b);
			var numberA = jA.find('.frame');
			var numberB = jB.find('.frame');

			return parseInt(numberA.val()) > parseInt(numberB.val()) ? 1 : -1;

		}).appendTo('#text-manager tbody');
	});

	$('#text-clear-confirm').click(function() {
		$('#text-manager tbody tr')
			.find('input')
				.val('')
			.end()
			.not(':first-child')
				.remove()
		;

		$('#clear-texts').modal('hide');
	});


}

// Thanks to
// * http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = '0' + s;
    return s;
}