'use strict';

var _misionTitle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/////////////---------------------STYLES ---------------------------------------------

var misionMainBox = {
	'height': '100%',
	'width': '100%',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'overflowX': 'hidden'
};
var misionPhoto = {
	'height': '100%%',
	'width': '30%',
	'float': 'right',
	'overflow': 'hidden'
};
var misionTextStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'width': '60%',
	'float': 'left',
	'fontSize': '20px',
	'color': '#353535'
};
var misionTitle = (_misionTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'width': '60%',
	'float': 'left',
	'marginBottom': '2%',
	'marginTop': '10%',
	'marginRight': '4%'
}, _defineProperty(_misionTitle, 'textTransform', 'uppercase'), _defineProperty(_misionTitle, 'fontSize', '40px'), _defineProperty(_misionTitle, 'color', 'yellow'), _defineProperty(_misionTitle, 'textAlign', 'left'), _misionTitle);

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom = "75%";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var misionText = {
	'title': 'nuestra misión',
	'text1': 'BEEVA Labs nace como agrupación de laboratorios de investigación y diseño de producto en BEEVA, nuestro principal propósito es la facilitación y dinamización de la innovación en toda la compañía, fomentando la Cultura de Innovación y apoyando la generación de ideas y procesos creativos.',
	'text2': 'En BEEVA Labs trabajamos en pruebas tecnológicas de concepto, diseño de producto y prototipos funcionales. Generamos artículos técnicos, informes, investigamos en nuevas metodologías y todo aquel contenido que pueda suponer una inspiración o un impulso al crecimiento digital de la compañía y de la sociedad en general.',
	'photo': 'ed1'
};
initMision();

function initMision(data) {
	var Mision = React.createClass({
		displayName: 'Mision',

		getInitialState: function getInitialState() {
			return {
				title: misionText.title,
				text1: misionText.text1,
				text2: misionText.text2,
				photo: misionText.photo
			};
		},
		componentWillMount: function componentWillMount() {},
		componentDidMount: function componentDidMount() {},
		handleMouseOver: function handleMouseOver(lol) {},
		handleMouseOut: function handleMouseOut(lol) {},
		handleMouseOverArrow: function handleMouseOverArrow(lol) {},
		handleMouseOutArrow: function handleMouseOutArrow(lol) {},
		handleRemove: function handleRemove(i) {},
		render: function render() {
			var item = this.state;
			var photoURL = 'images/' + item.photo + '.png';
			return React.createElement(
				'div',
				{ id: 'team', style: misionMainBox },
				React.createElement(
					'div',
					{ style: misionPhoto },
					React.createElement('img', { src: photoURL })
				),
				React.createElement(
					'div',
					{ style: misionTitle },
					item.title
				),
				React.createElement(
					'div',
					{ style: misionTextStyle },
					React.createElement(
						'p',
						null,
						item.text1
					),
					React.createElement(
						'p',
						null,
						item.text2
					)
				)
			);
		}
	});
	React.render(React.createElement(Mision, { elements: '9' }), document.getElementById('mision'));
}

/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

/////////////-----------------------------------------------------------------------