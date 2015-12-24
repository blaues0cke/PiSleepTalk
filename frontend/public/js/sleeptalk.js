var wavesurfer = Object.create(WaveSurfer);

$(document).ready(function() {
	initWavesurfer();
});

var initWavesurfer = function ()
{
	wavesurfer.init({
	      container:     '#wave'
	    , height:        300 
	    , progressColor: '#0B486B'
	    , normalize:     true
	    , waveColor:     '#3B8686'
	});

	var wave     = $('#wave');
	var filename = wave.attr('file-to-process');
	var fileurl  = '/' + filename + '.wav';

	console.log('wav url: ', fileurl);

	wavesurfer.load(fileurl);
};