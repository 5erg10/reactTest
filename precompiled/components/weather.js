/////////////---------------------STYLES ------------------------------------------

var weatherBox = {
		'width': '350',
		'height': '160',
		'position': 'absolute',
		'top': '10',
		'right': '20',
		'backgroundColor': 'rgba(123, 123, 123, 0.5)',
		'borderRadius': '3',
		'WebkitBoxShadow': '10px 10px 5px -5px rgba(0,0,0,0.2)',
		'MozBoxShadow': '10px 10px 5px -5px rgba(0,0,0,0.2)',
		'boxShadow': '10px 10px 5px -5px rgba(0,0,0,0.2)',
		'cursor': 'move',
		'zIndex': '999'
};

var weatherImageBox = {
		'marginTop': '1%',
		'marginLeft': '1%',
		'height': '50%',
		'width': '32%',
		'float': 'left'
}				

var weatherImage = {
		'height': '105%'
}

var weatherCity = {
	    'width': '60%',
		'height': '5%',
		'float': 'left',
		'color': 'white',
		'fontWeight': 'bold',
		'padding': '10px',
		'fontSize': '15px'
}
var weatherDate = {
        'width': '60%',
		'height': '10%',
		'float': 'left',
		'borderBottom': 'solid 2px white',
		'color': 'white',
		'fontWeight': 'bold',
		'textAlign': 'right',
		'padding': '10px',
		'fontSize': '20px'
}
var weatherMax = {
		'width': '50%',
		'height': '10%',
		'float': 'left',
		'borderBottom': 'solid 2px rgb(210, 166, 129)',
		'color': 'white',
		'fontWeight': 'bold',
		'textAlign': 'right',
		'padding': '10px',
		'fontSize': '20px'
}
var weatherMin = {
		'width': '50%',
		'height': '10%',
		'float': 'left',
		'borderBottom': 'solid 2px rgb(110, 252, 110)',
		'color': 'white',
		'fontWeight': 'bold',
		'textAlign': 'right',
		'padding': '10px',
		'fontSize': '20px'
}
var closeButtom = {
		'position': 'absolute',
		'top': '5px',
		'right': '5px',
		'cursor': 'pointer',
		'color': 'white'
}
var imageCloseButtom = {
		'width': '18px'
}			

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------	

'use strict';

 $.get("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&cnt=7&appid=ab68bc64552d2af53af0f6b928972688", function (data) {	
		//console.log(data)
		initWeather(data)
	});	

function initWeather(data){
	
	var Weather = React.createClass({
			getInitialState: function(){
				return {
					'city': data.name, 
					'temp': data.main.temp, 
					'wind': data.wind.speed, 
					'humidity': data.main.humidity, 
					'pressure': data.main.pressure, 
					'dayStateIcon': data.weather[0].icon, 
					'dayState': data.weather[0].description
				}
			},
			componentWillMount: function () {
			},
			render: function() {

				var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

				var styleMax = {color: 'rgb(210, 166, 129)'};
				var styleMin = {color: 'rgb(110, 252, 110)'};

				return (	
					<div id="weatherBox" style={weatherBox}>
						<div id="closeButtom" style={closeButtom} onClick={this.handleClick}><i className="fa fa-times-circle"></i></div>
						<div id="weatherImageBox" style={weatherImageBox}>
							<img style={weatherImage} src={"images/"+this.state.dayStateIcon+".png"}/>
						</div>
						<div id="weatherDate" style={weatherCity}>
							{mS[this.props.month]} {this.props.day}, {this.props.year}
						</div>
						<div id="weatherDate" style={weatherDate}>
							{this.state.city}
						</div>
						<div id="weatherMax" style={weatherMax}>
							<spam style={styleMax}>Temp</spam> {this.state.temp} C &deg;
						</div>
						<div id="weatherMin" style={weatherMin}>
							<spam style={styleMin}>Wind</spam> {this.state.wind} m/s
						</div>
					</div>
				)
			},
			handleClick: function(){
			    React.unmountComponentAtNode(document.getElementById('weather'));   
			}
		});
	React.render(<Weather year={ new Date().getFullYear() } month={new Date().getMonth()} day={new Date().getDate()} />, document.getElementById('weather'))
}	
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

		$(function() {
		    $('body').on('mousedown', '#weatherBox', function() {
		        $(this).addClass('draggable').parents().on('mousemove', function(e) {
		            $('.draggable').offset({
		                top: e.pageY - $('.draggable').outerHeight() / 2,
		                left: e.pageX - $('.draggable').outerWidth() / 2
		            }).on('mouseup', function() {
		                $(this).removeClass('draggable');
		            });
		        });
		        e.preventDefault();
		    }).on('mouseup', function() {
		        $('.draggable').removeClass('draggable');
		    });
		});

/////////////---------------------------------------------------------------