/////////////---------------------STYLES ---------------------------------------------

var investMainBox = {
	'height': '100%',
	'width': '100%',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'overflowX': 'hidden'
}
var investTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'fontWeight': 'bold',
	'width': '60%',
	'float': 'left',
	'marginBottom': '2%',
	'marginTop': '5%',
	'marginRight': '4%',
	'textTransform': 'uppercase',
	'fontSize': '50px',
	'color': 'yellow',
	'textAlign': 'left'
}
var investSubTitle = {
	'fontFamily': "'Work Sans', sans-serif",
	'width': '100%',
	'float': 'left',
	'marginBottom': '5%',
	'marginRight': '4%',
	'textTransform': 'uppercase',
	'fontSize': '20px',
	'color': 'yellow',
	'textAlign': 'left'
}
var investBoxTextStyle = {
	'width': '25%',
	'height': '20%',
	'padding':'3%',
	'backgroundColor': 'rgba(0, 0, 0, 0.30)',
	'marginRight': '2%',
	'float': 'left'
}
var investPhoto = {
	'height': '100%%',
	'width': '30%',
	'float': 'right',
	'overflow': 'hidden'
}
var investTextTitleStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'color': '#ffffff',
	'width': '100%',
	'float': 'left',
	'textAlign': 'center',
	'fontSize': '25px',
	'marginBottom': '5%'
}
var investTextStyle = {
	//'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'width': '100%',
	'float': 'left',
	'fontSize': '20px',
	'fontWeight': 'bold',
	'color': '#ffffff',
	'textAlign': 'center',
	'transition': 'top 0.3s ease-out'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom="75%"

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var investText = {
			 'title':'LÍNEAS DE INVESTIGACIÓN',
			 'subTitle':'Durante la temporada 2015/2016 centramos nuestros esfuerzos en estas líneas de investigación',
			 'text1Title': 'machine Inteligence',
			 'text1': 'Deep Learning Computational creativity, Natural Language Processing, Brain Computer Interfaces, Bots, Computer Vision, Affective Computing.',
			 'text2Title': 'Ubiquitous computing',
 			 'text2': 'Human Sensing, Ambient Intelligence, Blockchain & P2P',
			 'text3Title': 'data',
 			 'text3': 'Data Visualization, VR/AR, GPUs for Big Data',
			 'photo':'ed1'
			}
initInvest();

function initInvest(data){
	var Invest = React.createClass({
			getInitialState: function(){
				return {
					data: investText
				}
			},
			componentWillMount: function () {
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
				var item = this.state.data;
				var photoURL = 'images/'+item.photo+'.png'
				return (
						<div id="InvestGroupBox" style={investMainBox}>
							<div style={investTitle}>{item.title}</div>
							<div style={investSubTitle}>{item.subTitle}</div>
							<div style={investBoxTextStyle}>
								<div style={investTextTitleStyle}>{item.text1Title}</div>
								<div style={investTextStyle}>{item.text1}</div>
							</div>
							<div style={investBoxTextStyle}>
								<div style={investTextTitleStyle}>{item.text2Title}</div>
								<div style={investTextStyle}>{item.text2}</div>
							</div>		
							<div style={investBoxTextStyle}>
								<div style={investTextTitleStyle}>{item.text3Title}</div>
								<div style={investTextStyle}>{item.text3}</div>
							</div>				
						</div>
					)
			}
		});
	React.render(<Invest elements="9"/>, document.getElementById('investigacion'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

							//<div style={investPhoto}><img src={photoURL}/></div>

/////////////-----------------------------------------------------------------------