/////////////---------------------STYLES ---------------------------------------------

var misionMainBox = {
	'height': '100%',
	'width': '100%',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'overflowX': 'hidden'
}
var misionPhoto = {
	'height': '100%%',
	'width': '30%',
	'float': 'right',
	'overflow': 'hidden'
}
var misionTextStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'width': '60%',
	'float': 'left',
	'fontSize': '20px',
	'color': '#353535'
}
var misionTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'width': '60%',
	'float': 'left',
	'marginBottom': '2%',
	'marginTop': '10%',
	'marginRight': '4%',
	'textTransform': 'uppercase',
	'fontSize': '40px',
	'color': 'yellow',
	'textAlign': 'left'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom="75%"

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var misionText = {
			 'title':'nuestra misión',
			 'text1': 'BEEVA Labs nace como agrupación de laboratorios de investigación y diseño de producto en BEEVA, nuestro principal propósito es la facilitación y dinamización de la innovación en toda la compañía, fomentando la Cultura de Innovación y apoyando la generación de ideas y procesos creativos.',
			 'text2': 'En BEEVA Labs trabajamos en pruebas tecnológicas de concepto, diseño de producto y prototipos funcionales. Generamos artículos técnicos, informes, investigamos en nuevas metodologías y todo aquel contenido que pueda suponer una inspiración o un impulso al crecimiento digital de la compañía y de la sociedad en general.',
			 'photo':'ed1'
			}
initMision();

function initMision(data){
	var Mision = React.createClass({
			getInitialState: function(){
				return {
					title: misionText.title,
					text1: misionText.text1,
					text2: misionText.text2,
					photo: misionText.photo
				}
			},
			componentWillMount: function () {
			},
			componentDidMount: function() {
			 
			},
			handleMouseOver: function(lol) {
			},
			handleMouseOut: function(lol) {
			},
			handleMouseOverArrow: function(lol) {
			},
			handleMouseOutArrow: function(lol) {
			},
		    handleRemove: function(i) {
		    },
			render: function() {
				var item = this.state;
				var photoURL = 'images/'+item.photo+'.png'
				return (
						<div id="team" style={misionMainBox}>
							<div style={misionPhoto}><img src={photoURL}/></div>
							<div style={misionTitle}>{item.title}</div>
							<div style={misionTextStyle}>
								<p>{item.text1}</p>
								<p>{item.text2}</p>
							</div>		
						</div>
					)
			}
		});
	React.render(<Mision elements="9"/>, document.getElementById('mision'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------


/////////////-----------------------------------------------------------------------