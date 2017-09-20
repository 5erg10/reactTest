'use strict';

/////////////---------------------STYLES ---------------------------------------------

var homepageHeroModule = {
	'borderRight': 'none',
	'borderLeft': 'none',
	'position': 'relative'
};
var videoContainer = {
	'position': 'relative',
	'bottom': '0%',
	'left': '0%',
	'height': '100%',
	'width': '100%',
	'overflow': 'hidden',
	'background': 'transparent'
};
var filter = {
	'zIndex': '100',
	'position': 'absolute',
	'background': 'rgba(0, 0, 0, 0.4)',
	'width': '100%'
};
var fillWidth = {
	'width': '100%'
};
var logoStl = {
	'position': 'absolute',
	'bottom': '0',
	'right': '0',
	'left': '0',
	'top': '0',
	'margin': 'auto',
	'width': '70%'
};
var textStl = {
	'position': 'absolute',
	'top': '20',
	'right': '20',
	'fontSize': '50px',
	'fontWeight': 'bold',
	'color': 'yellow'
};
/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT-------------------------------------------

'use strict';

initVideo();

function initVideo() {
	var VideoCover = React.createClass({
		displayName: 'VideoCover',

		render: function render() {
			return React.createElement(
				'div',
				{ id: 'videoBox', style: homepageHeroModule },
				React.createElement(
					'div',
					{ id: 'videoContainer', style: videoContainer },
					React.createElement(
						'div',
						{ id: 'textForVideo', style: textStl },
						'Getting inspiration'
					),
					React.createElement('img', { style: logoStl, src: 'images/logo2.png' }),
					React.createElement('div', { id: 'videofilter', style: filter }),
					React.createElement(
						'video',
						{ id: 'videoElement', autoPlay: true, loop: true, style: fillWidth },
						React.createElement('source', { src: 'video/video.mp4', type: 'video/mp4' })
					)
				)
			);
		}
	});
	React.render(React.createElement(VideoCover, null), document.getElementById('home'));
}

/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

$(document).ready(function () {
	var i = 0;
	var sources = ['Getting inspiration', 'Thinking about', 'creating', 'Making real'];
	var text = document.getElementById("textForVideo");

	setInterval(function () {
		i = i + 1;
		if (i >= sources.length) i = 0;
		text.innerHTML = sources[i];
	}, 12000);
});

/////////////-----------------------------------------------------------------------