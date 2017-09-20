/////////////---------------------STYLES ---------------------------------------------

var counterMainBox = {
	'marginRight': '20%'
}
var counterBox = {
	'float': 'left',
	'width': '100%',
	'borderBottom': 'solid 3px yellow',
	'marginBottom': '25%'
}
var counterText = {
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'marginBottom': '5%',
	'fontWeight': 'bold',
	'textAlign': 'left',
	'fontSize': '20px',
	'color': 'white',
	'float':'left',
	'width': '100%'
}
var counterNumber = {
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'textAlign': 'right',
	'fontSize': '40px',
	'color': 'yellow',
	'width': '85%',
	'float': 'left'
}
var counterPlus = {
	'fontFamily': "'Work Sans', sans-serif",
	'textTransform': 'uppercase',
	'fontWeight': 'bold',
	'textAlign': 'right',
	'fontSize': '20px',
	'color': 'yellow',
	'width': '10%%',
	'float': 'right'
}
var logoCounter = {
	'width': '100%'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom="75%"

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var counterData = [
			 {'data':'ideas','maxvalue': 60,'startValue': 0},
			 {'data':'prototipos','maxvalue': 34,'startValue': 0},
			 {'data':'productos','maxvalue': 4,'startValue': 0},
			 {'data':'eventos','maxvalue': 15,'startValue': 0}
	]
initcounter();

function initcounter(data){
	var Counter = React.createClass({
			getInitialState: function(){
				return {
					data1: counterData[0].data,
					maxValue1: counterData[0].maxvalue,
					startValue1: counterData[0].startValue,
					data2: counterData[1].data,
					maxValue2: counterData[1].maxvalue,
					startValue2: counterData[1].startValue,
					data3: counterData[2].data,
					maxValue3: counterData[2].maxvalue,
					startValue3: counterData[2].startValue,
					data4: counterData[3].data,
					maxValue4: counterData[3].maxvalue,
					startValue4: counterData[3].startValue
				}
			},
			componentWillMount: function () {
			},
			componentDidMount: function() {
			     var counter1 = 1;
			     var counter2 = 1;
			     var counter3 = 1;
			     var counter4 = 1;			
				 var counterLoop1 = setInterval(function() {
				       	this.setState({startValue1: counter1});
				       	if(counter1 >= this.state.maxValue1) clearInterval(counterLoop1);
				 		counter1 ++;
				 }.bind(this), 50);
				 var counterLoop2 = setInterval(function() {
				       	this.setState({startValue2: counter2});
				       	if(counter2 >= this.state.maxValue2) clearInterval(counterLoop2);
				 		counter2 ++;
				 }.bind(this), 100);
				 var counterLoop3 = setInterval(function() {
				       	this.setState({startValue3: counter3});
				       	if(counter3 >= this.state.maxValue3) clearInterval(counterLoop3);
				 		counter3 ++;
				 }.bind(this), 1000);
				 var counterLoop4 = setInterval(function() {
				       	this.setState({startValue4: counter4});
				       	if(counter4 >= this.state.maxValue4) clearInterval(counterLoop4);
				 		counter4 ++;
				 }.bind(this), 250);
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
				return (
						<div id="counterBox" style={counterMainBox}>
							<div style={counterBox}>
								<div style={counterNumber}>{item.startValue1}</div>
								<div style={counterPlus}><i className="fa fa-plus"></i></div>
								<div style={counterText}>{item.data1}</div>
							</div>
							<div style={counterBox}>
								<div style={counterNumber}>{item.startValue2}</div>
								<div style={counterPlus}><i className="fa fa-plus"></i></div>
								<div style={counterText}>{item.data2}</div>
							</div>
							<div style={counterBox}>
								<div style={counterNumber}>{item.startValue3}</div>
								<div style={counterPlus}><i className="fa fa-plus"></i></div>
								<div style={counterText}>{item.data3}</div>
							</div>
							<div style={counterBox}>
								<div style={counterNumber}>{item.startValue4}</div>
								<div style={counterPlus}><i className="fa fa-plus"></i></div>
								<div style={counterText}>{item.data4}</div>
							</div>
							<img style={logoCounter} src="images/iconoCarga.png"></img>		
						</div>
					)
			}
		});
	React.render(<Counter elements="9"/>, document.getElementById('counter'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------


/////////////-----------------------------------------------------------------------