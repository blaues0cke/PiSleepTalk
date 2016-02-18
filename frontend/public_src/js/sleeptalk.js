// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var audioDuration      = null;
var audioProcess       = null;
var concatAllVideos    = false;
var fileUrl            = null;
var frameProcess       = null;
var infoArea           = null;
var lastInfoText	   = null;
var loaded             = false;
var markerRegion       = null;
var videoUrl 	       = null;
var wavesurfer         = Object.create(WaveSurfer);

$(document).ready(function() {
	$('.btn-reload').click(function()
	{
		location.reload();
	});
	
	initWavesurfer();
	initButtons();
	initInfoArea();
	initTextManager();
	initVideoList();
	initTooltips();
	initLogsPage();
	initShotcuts();
	initStatusPage();
	initImportPage();
	initTableTools();
});

var setMarker = function ()
{
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
};

var initTableTools = function ()
{
	$('table th input[type=checkbox]').click(function()
	{
		$(this).parents('table').find('td input[type=checkbox]').each(function()
		{
			var checkBox = $(this);
			checkBox.prop('checked', !checkBox.prop('checked'));
		});
	});
};

var initImportPage = function ()
{
	$('#force-import').click(function() {
		$('#force-import-modal').modal('show');
	});

	$('#force-import-confirm').click(function() {
		$.ajax({
		    url: '/force-import',
		    type: 'POST',
		    success: function(result) {
		        $('#force-import-done').modal('show');
		    }
		});
	});

	$('#upload-file').click(function() {
		$('#upload-file-modal').modal('show');
	});

	$('#upload-file-submit').click(function()
	{
		$('#upload-form').submit();

		return false;
	});
};

var initStatusPage = function ()
{
	$('#file-system')
		.on('click', '.delete', function() {
			
			var button = $(this);
			var path   = getVideoPathForClickedButton(button);
			fileUrl    = path;

			$('#delete-file').modal('show');
		})
	;

	$('#delete-status-file-confirm').click(function() {
		console.log('Delete button pressed: ', fileUrl);

		var strippedFileUrl = fileUrl.replace('/usr/sleeptalk/', '');
		var splittedFileUrl = strippedFileUrl.split('/');

		console.log('Urls', strippedFileUrl, splittedFileUrl);

		if (splittedFileUrl.length >= 2)
		{
			// Thanks to
			// * http://stackoverflow.com/questions/2153917/how-to-send-a-put-delete-request-in-jquery
			$.ajax({
			    url: '/file/' + splittedFileUrl[0] + '/' + splittedFileUrl[1],
			    type: 'DELETE',
			    success: function(result) {
			        reloadPage();
			    }
			});
		}
	});
};

var initShotcuts = function () {

	$('#shortcut-help').click(function() {
		$('#shortcut-help-modal').modal('show');
	});

	// Thanks to
	// * http://stackoverflow.com/questions/19347269/jquery-keypress-arrow-keys
	// * http://stackoverflow.com/questions/11807944/jquery-trigger-keypress-function-on-entire-document-but-not-inside-inputs-and-t
	$(document).keydown(function(e) {
	    var tag = e.target.tagName.toLowerCase();
	    if (loaded && tag != 'input' && tag != 'textarea') {

	    	console.log('Keydown', e, e.which);

	    	switch (e.which) {
	    		// Keyboard
	    		case 32:
	    			wavesurfer.playPause();

	    			break;

	    		// Left
	    		case 37:
	    			wavesurfer.skip(-5);

	    			break;

	    		// Up
	    		case 38:
	    			wavesurfer.skip(-10);

	    			break;

	    		// Right
	    		case 39:
	    			wavesurfer.skip(5);

	    			break;

	    		// Down
	    		case 40:
	    			wavesurfer.skip(10);

	    			break;

	    		// 1-9
	    		case 49:
	    		case 50:
	    		case 51:
	    		case 52:
	    		case 53:
	    		case 54:
	    		case 55:
	    		case 56:
	    		case 57:
	    			var percent = (e.which - 48) / 100;
	    			var seekTo  = audioDuration * percent;

	    			wavesurfer.seekTo(seekTo);

	    			break;

	    		case 77:
	    			setMarker();

	    			break;
	    	};
	    }
	});
};

var initInfoArea = function () {
	infoArea = $('#info-area');

	window.setInterval(updateInfoArea, 50);
};

var initWavesurfer = function () {

	var wave  = $('#wave');

	if (wave && wave.length > 0) {
		wavesurfer.init({
		      container:     '#wave-content'
		    , height:        400 
		    , progressColor: '#0B486B'
		    , normalize:     true
		    , waveColor:     '#3B8686'
		});

		var filename = wave.attr('file-to-process');
		fileUrl      = '/' + filename + '.' + default_audio_format;

		console.log('wav url: ', fileUrl);

		if (fileUrl && fileUrl.length > 0) {
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
					.attr('title', 'Pause')
					.attr('data-original-title', 'Pause')
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
					.attr('title', 'Play')
					.attr('data-original-title', 'Play')
					.find('.text')
						.text('Play')
					.end()
					.find('.fa')
						.removeClass('fa-pause')
						.addClass('fa-play')
				;
			});

			wavesurfer.load(fileUrl);
		}
	}
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

	$('#wave-set-marker').click(setMarker);

	$('#wave-jump-to-marker').click(function() {
		if (!loaded) return;
		
		if (markerRegion) {
			var seekPosition = markerRegion.start / audioDuration;
			wavesurfer.stop();
			wavesurfer.seekTo(seekPosition);
		}
		else {
			$('#set-marker-first-2-error').modal('show');
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
			$('#set-marker-first-error').modal('show');
		}
	});

	$('#wave-save').click(function() {
		if (!loaded) return;

		$('#text-sort').click();

		var buffer = [];

		$('#text-manager tbody tr').each (function () {
			var tr    = $(this);
			var frame = tr.find('input.frame').val();
			var text  = tr.find('input.text').val();

			if (frame && frame.length > 0 && text && text.length > 0)
			{
				var newLine = frame + '|' + text;

				buffer.push({
					content: newLine,
					frame:   frame
				});
			}
		});

		buffer.sort(function(a, b)
		{
			if      (a.frame < b.frame) return -1;
			else if (a.frame > b.frame) return 1;
			else                        return 0;
		});

		var finalContent = [];

		for (var key in buffer)
		{
			var currentItem = buffer[key];

			finalContent.push(currentItem.content);
		}

		var contentString = finalContent.join('\n');

		console.log('Final content', finalContent);

		$.post(
			fileUrl,
			{ content: contentString },
			function() {
		        reloadPage();
			}
		);
	});

	$('#wave-delete').click(function() {
		if (!loaded) return;
		
		$('#delete-file').modal('show');
	});

	$('#delete-file-confirm').click(function() {
		// Thanks to
		// * http://stackoverflow.com/questions/2153917/how-to-send-a-put-delete-request-in-jquery
		$.ajax({
		    url: fileUrl,
		    type: 'DELETE',
		    success: function(result) {
		        reloadPage();
		    }
		});
	});

	$('#wave-decrease-volume').click(function() {
		$('#decrease-volume-modal').modal('show');
	});

	$('#decrease-volume-confirm').click(function() {
		$.post(
			'decrease-volume' + fileUrl,
			null,
			function() {
		        reloadPage();
			}
		);
	});

	$('#wave-increase-volume').click(function() {
		$('#increase-volume-modal').modal('show');
	});

	$('#increase-volume-confirm').click(function() {
		$.post(
			'increase-volume' + fileUrl,
			null,
			function() {
		        reloadPage();
			}
		);
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
		infoText.push('- Pending files: ' + fileCount);

		var newInfoText = infoText.join(' ');

		if (lastInfoText == null || lastInfoText != newInfoText) {
			lastInfoText = newInfoText;
			infoArea.text(newInfoText);
		}
	}
};

var initTooltips = function ()
{
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip();
	});
}

var initLogsPage = function ()
{
	$('#clear-logs').click(function() {
		$('#clear-logs-modal').modal('show');

		return false;
	});

	$('#clear-logs-confirm').click(function() {
		$.ajax({
		    url: '/logs',
		    type: 'DELETE',
		    success: function(result) {
		        reloadPage();
		    }
		});
	});
}

var initTextManager = function () {
	var windowHeight = $(window).height();

	$('#text-wrapper').css('maxHeight', windowHeight - 572);

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
		.on('blur keydown keyup keypress', 'input.text', function() {
			var input = $(this);
			input.val(input.val().replace(/\|/g, ''));
		})
	;

	var createNewText = function() {

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
	};

	$('#text-add').click(createNewText);
	$('#wave').dblclick(createNewText);

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

var getVideoPathForClickedButton = function(button)
{
	var tr     = button.parents('tr');
	var pathTd = tr.find('.path');
	var path   = pathTd.text();

	return path;
};

var initVideoList = function () {

	$('#concat-checked-videos').click(function() {
		concatAllVideos = false;

		$('#concat-videos-modal').modal('show');
	});

	$('#concat-all-videos').click(function() {
		concatAllVideos = true;

		$('#concat-videos-modal').modal('show');
	});

	$('#concat-videos-confirm').click(function() {
		var videos = [];

		$('#video-list td input[type=checkbox]').each(function(index, element)
		{
			var checkbox = $(this);

			if (concatAllVideos || checkbox.is(':checked'))
			{
				var videoFilePath = checkbox.val();

				videos.push(videoFilePath);
			}
		});

		$.ajax({
		    url: '/concat-videos',
		    type: 'POST',
		    data: {
		    	movieTitle: $('#movie-title').val(),
		    	videos :    videos
		    },
		    success: function(result) {
		    	$('#movie-title').val('');

		        reloadPage();
		    }
		});
	});

	$('#video-list')
		.on('click', '.download', function() {
			console.log('Download button pressed');

			var button = $(this);
			var path   = getVideoPathForClickedButton(button);

			location.href = '/download/' + path;
		})
		.on('click', '.play', function() {
			console.log('Play button pressed');

			var button 	    = $(this);
			var path   	    = getVideoPathForClickedButton(button);
			var videoTarget = $('#video-target');

			videoTarget.find('video').remove();

			var video = $('<video></video>')
							.addClass('embed-responsive-item')
							.attr('controls', 'controls')
							.attr('autoplay', 'autoplay')	
			;

			var source = $('<source></source>')
						     .attr('type', 'video/' + default_video_format)
						     .attr('src',   path)
		    ;

		    source.appendTo(video);
		    video.appendTo(videoTarget);

			$('#play-video').modal('show');
		})
		.on('click', '.delete', function() {
			
			var button = $(this);
			var path   = getVideoPathForClickedButton(button);
			videoUrl   = path;

			$('#delete-video').modal('show');
		})
	;

	$('#delete-video-confirm').click(function() {
		console.log('Delete button pressed: ', videoUrl);

		// Thanks to
		// * http://stackoverflow.com/questions/2153917/how-to-send-a-put-delete-request-in-jquery
		$.ajax({
		    url: videoUrl,
		    type: 'DELETE',
		    success: function(result) {
		        reloadPage();
		    }
		});
	});

	$('#play-video').on('click', 'button', function() {
		console.log('Footer button pressed');

		var videos = $('#video-target video');

		console.log('Videos: ', videos);

		if (videos && videos.length > 0)
		{
			if (!videos[0].paused)
			{
				videos[0].pause();
			}
		}
	});
};

// Thanks to
// * http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = '0' + s;
    return s;
};

var reloadPage = function () {
	console.log('Page reload scheduled');

	window.setTimeout(function() {
		console.log('Reloading page');

		location.reload();
	}, 1000);
};