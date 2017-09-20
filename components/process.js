'use strict';

/////////////---------------------STYLES ---------------------------------------------

var metoMainBox = {
	'height': '100%',
	'width': '100%',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'overflowX': 'hidden'
};
var metoTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'fontWeight': 'bold',
	'width': '100%',
	'float': 'left',
	'marginBottom': '2%',
	'marginTop': '0%',
	'marginRight': '4%',
	'textTransform': 'uppercase',
	'fontSize': '30px',
	'color': 'yellow',
	'textAlign': 'center'
};
var metoSubTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'width': '100%',
	'float': 'left',
	'marginRight': '4%',
	'textTransform': 'uppercase',
	'fontSize': '20px',
	'color': 'yellow',
	'textAlign': 'center'
};
var metoBoxTextStyle = {
	'width': '30%',
	'height': '30%',
	//'padding':'3%',
	//'backgroundColor': 'rgba(255, 243, 18, 0.3)',
	'marginRight': '8%',
	'marginLeft': '8%',
	'marginTop': '4%',
	'float': 'left'
};
var metoPhoto = {
	'height': '100%%',
	'width': '30%',
	'float': 'right',
	'overflow': 'hidden'
};
var metoTextTitleStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'textAlign': 'center',
	'color': '#ffffff',
	'width': '100%',
	'float': 'left',
	'fontSize': '20px',
	'marginBottom': '5%'
};
var metoTextStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'width': '92%',
	'float': 'left',
	'fontSize': '20px',
	'color': '#353535',
	'textAlign': 'center',
	'padding': '8% 4%',
	'border': 'solid 2px white',
	'transition': 'top 0.3s ease-out'
};
var metoTextIcon = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'textAlign': 'center',
	'color': '#ffffff',
	'width': '100%',
	'float': 'left',
	'fontSize': '50px',
	'marginBottom': '5%'
};

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom = "75%";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var metoText = {
	'title': 'RESEARCH + DESIGN THINKING + LEAN STARTUP',
	'subTitle': 'Descripción sobre las líneas y uso de las metodologías',
	'text1Title': 'INVESTIGACIÓN',
	'text1': 'Procesos de investigación centrados en la tecnología y las personas. Explorar, identificar y analizar.',
	'text2Title': 'IDEACIÓN Y DISEÑO',
	'text2': 'Aplicando principios de Design Thinking. Empatizar, Definir, Idear, Prototipar y Validar.',
	'text3Title': 'EXPERIMENTACIÓN Y MEDICIÓN',
	'text3': 'Filosofía Lean Startup aplicada en nuestros Labs. Crear, Medir y Aprender.',
	'text4Title': 'APRENDIZAJE Y REFINAMIENTO',
	'text4': 'Principios de Customer Development. Buscar y validar la propuesta de valor y el modelo de negocio de nuevos productos.',
	'photo': 'ed1'
};
initMeto();

function initMeto(data) {
	var Meto = React.createClass({
		displayName: 'Meto',

		getInitialState: function getInitialState() {
			return {
				data: metoText
			};
		},
		componentWillMount: function componentWillMount() {},
		handleMouseOver: function handleMouseOver(lol) {},
		handleMouseOut: function handleMouseOut(lol) {},
		handleMouseOverArrow: function handleMouseOverArrow(lol) {},
		handleMouseOutArrow: function handleMouseOutArrow(lol) {},
		handleRemove: function handleRemove(i) {},
		render: function render() {
			var item = this.state.data;
			var photoURL = 'images/' + item.photo + '.png';
			return React.createElement(
				'div',
				{ id: 'InvestGroupBox', style: metoMainBox },
				React.createElement(
					'div',
					{ style: metoTitle },
					item.title
				),
				React.createElement(
					'div',
					{ style: metoSubTitle },
					item.subTitle
				),
				React.createElement(
					'div',
					{ style: metoBoxTextStyle },
					React.createElement(
						'div',
						{ style: metoTextIcon },
						React.createElement('i', { className: 'awe-icon fa fa-flask' })
					),
					React.createElement(
						'div',
						{ style: metoTextTitleStyle },
						item.text1Title
					),
					React.createElement(
						'div',
						{ style: metoTextStyle },
						item.text1
					)
				),
				React.createElement(
					'div',
					{ style: metoBoxTextStyle },
					React.createElement(
						'div',
						{ style: metoTextIcon },
						React.createElement('i', { className: 'awe-icon fa fa-magic' })
					),
					React.createElement(
						'div',
						{ style: metoTextTitleStyle },
						item.text2Title
					),
					React.createElement(
						'div',
						{ style: metoTextStyle },
						item.text2
					)
				),
				React.createElement(
					'div',
					{ style: metoBoxTextStyle },
					React.createElement(
						'div',
						{ style: metoTextIcon },
						React.createElement('i', { className: 'awe-icon fa fa-refresh' })
					),
					React.createElement(
						'div',
						{ style: metoTextTitleStyle },
						item.text3Title
					),
					React.createElement(
						'div',
						{ style: metoTextStyle },
						item.text3
					)
				),
				React.createElement(
					'div',
					{ style: metoBoxTextStyle },
					React.createElement(
						'div',
						{ style: metoTextIcon },
						React.createElement('i', { className: 'awe-icon fa fa-users' })
					),
					React.createElement(
						'div',
						{ style: metoTextTitleStyle },
						item.text4Title
					),
					React.createElement(
						'div',
						{ style: metoTextStyle },
						item.text4
					)
				)
			);
		}
	});
	React.render(React.createElement(Meto, { elements: '9' }), document.getElementById('metodologia'));
}

/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

//<div style={investPhoto}><img src={photoURL}/></div>

/////////////-----------------------------------------------------------------------