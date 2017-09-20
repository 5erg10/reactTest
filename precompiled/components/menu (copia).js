/////////////---------------------STYLES ---------------------------------------------

var menuMainBox = {
	'height': '200px',
	'width': '200px',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 300px 0px',
	'overflow': 'hidden',
	'borderRight': 'solid 6px rgba(255, 255, 0, 1)',
	'transition': 'all 0.5s ease-in-out'
}
var itemGroupBox = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'transition': 'all 0.5s ease-in-out'
}
var menuItemBox = {
	'width': '120%',
	'color': 'yellow',
	'textTransform': 'uppercase',
  	'fontWeight': 'bolder',
  	'padding': '0px 20px',
  	'cursor': 'pointer',
  	'opacity': '1',
  	'height': '100%',
  	'borderLeft': '6px solid rgba(255, 255, 0, 0)',
	'transition': 'all 0.4s ease-in-out'
}
var submenu = {
	'height': '60px',
	'width': '60%',
	'position': 'absolute',
	'top': '0px',
	'left': '-60%',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 3px 3px',
	'overflow': 'hidden',
	'paddingLeft': '100px',
	'transition': 'all 0.5s ease-in-out 0.1s'
}
var submenuActive = {
	'height': '60px',
	'width': '100%'
}
var submenubutton = {
	'height': '54px',
	'color': 'yellow',
	'float': 'left',
  	'padding': '0px 20px',
	'textTransform': 'uppercase',
  	'borderBottom': '6px solid rgba(255, 255, 0, 0)',
  	'fontWeight': 'bolder',
  	'fontSize': '19px',
  	'lineHeight': '63px',
  	'textAlign': 'center',
  	'cursor': 'pointer',
	'transition': 'all 0.2s ease-in-out'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom="75%"

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var menuElementsList = [
			{'main': 'main','sub':['components','features','some','thing']},
			{'main': 'notices','sub':['local','national','international']},
			{'main': 'weather','sub':['national','global','max','min']},
			{'main': 'about','sub':['me','enterprise','corp.','place']},
			{'main': 'contact','sub':['mail','suscribe','newsletter','phone']}
]


var propertiesList = [{'fontSize': '67px', 'padding': '0px 10px'}, {'fontSize': '35px', 'padding': '0px 20px'},{'fontSize': '26px', 'padding': '0px 20px'},{'fontSize': '26px', 'padding': '0px 20px'},{'fontSize': '15px', 'padding': '0px 10px'}]

var curretSubMenuList = menuElementsList[0].sub

init();

function init(data){
	var SubMenuItem = React.createClass({
			getInitialState: function(){
				return {
					data: menuElementsList
				}
			},
			handleMouseOver: function(lol) {
			   	lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
			   	lol.target.style['border-bottom'] = '6px solid rgba(255, 255, 0, 1)'
			},
			handleMouseOut: function(lol) {
			    lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
			   	lol.target.style['border-bottom'] = '6px solid rgba(255, 255, 0, 0)'
			},
			render: function(){
					console.log(this.state)
				return(
					<div id="submenu2" style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{this.props.data}</div>
				)	
			}
	})
	var SubMenuList = React.createClass({
			getInitialState: function(){
				return {
					data: this.props.data
				}
			},
			render: function(){
				console.log(this.props.data)
				return(
					<div id="submenu" style={submenu}>
						<div style={submenuActive}>
							{ this.state.data.map(function(element,i){return (<SubMenuItem data={element}></SubMenuItem>)}) }
						</div>
					</div>
				)
			}
	})
	var Menu = React.createClass({
			getInitialState: function(){
				return {
					data: menuElementsList
				}
			},
			componentWillMount: function () {
			   
			},
			handleMouseOver: function(lol) {
			   if(lol.target.attributes['data-actived'].value == 'false'){
			   		lol.target.style['border-left'] = '6px solid rgba(255, 255, 0, 1)'
			   		lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
			   } 
			},
			handleMouseOut: function(lol) {
			   if(lol.target.attributes['data-actived'].value == 'false') {
			   		lol.target.style['border-left'] = '6px solid rgba(255, 255, 0, 0)'
			   		lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
			   }
			},
		    handleRemove: function(i) {
		    },
		    menuTransform: function(i,lol) {
		    	var topValue = ['0px', '-72px', '-110px', '-137px', '-165px']
		    	var activeStatus = lol.target.attributes['data-actived'].value;	
			    var menuChildLength = lol.target.parentNode.children.length;
			    curretSubMenuList = menuElementsList[i].sub

		    	if(activeStatus == 'false') {
		    		$('#submenu').css('left','130px')
		    		lol.target.style.padding = '20px 10px'
		    		lol.target.style.fontSize = '35px'
		    		lol.target.parentNode.style.top = topValue[i]
		    		lol.target.parentNode.parentNode.style.height = '60px'
		    		lol.target.attributes['data-actived'].value = 'true'
			    	for(var a = 0; a < menuChildLength; a++){
			    		if(lol.target.parentNode.children[a].attributes['data-actived'].value == 'false')  lol.target.parentNode.children[a].style.opacity = '0'
			    		else lol.target.parentNode.children[a].style.opacity = '1'
			    	}
		    	}
		    	else{
		    		$('#submenu').css('left','-60%')
		    		lol.target.style.padding = propertiesList[i].padding
		    		lol.target.style.fontSize = propertiesList[i].fontSize
		    		lol.target.parentNode.style.top = '0px'
		    		lol.target.parentNode.parentNode.style.height = '200px'
		    		lol.target.attributes['data-actived'].value = 'false'
		    		for(var a = 0; a < menuChildLength; a++){
			    		lol.target.parentNode.children[a].style.opacity = '1'
			    	}
		    	}
		    },
			render: function() {
				var indents = this.state.data.map(function(item, i){
					return (
						<div onClick={this.menuTransform.bind(this,i)} style={$.extend({}, menuItemBox, propertiesList[i] )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>{item.main}</div>
					)
				}.bind(this));
				return (
					<div>
						<SubMenuList data={curretSubMenuList}></SubMenuList>
						<div id="menu" style={menuMainBox}>
							<div id="itemGroupBox" style={itemGroupBox}>
								{indents}
							</div>					
						</div>
					</div>
				)
			}
		});
	React.render(<Menu elements="5"/>, document.getElementById('menu'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------


/////////////-----------------------------------------------------------------------