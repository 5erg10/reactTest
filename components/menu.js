'use strict';

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
	'zIndex': '999',
	'transition': 'all 0.2s ease-in-out'
};
var itemGroupBox = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'transition': 'all 0.2s ease-in-out'
};
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
	'transition': 'all 0.2s ease-in-out'
};
var submenu = {
	'height': '60px',
	'width': '60%',
	'position': 'absolute',
	'top': '0px',
	'left': '-60%',
	'zIndex': '999',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 3px 3px',
	'overflow': 'hidden',
	'paddingLeft': '100px',
	'transition': 'all 0.2s ease-in-out 0.1s'
};
var submenuActive = {
	'height': '60px',
	'width': '100%'
};
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
};
var subMenuControlButtons = {
	'height': '60px',
	'color': 'yellow',
	'float': 'right',
	'textTransform': 'uppercase',
	'borderLeft': '3px solid rgba(255, 255, 0, 1)',
	'fontWeight': 'bolder',
	'fontSize': '48px',
	'textAlign': 'center',
	'cursor': 'pointer',
	'transition': 'all 0.2s ease-in-out'
};
var controlArrowButtons = {
	'width': '100%',
	'height': '30px',
};
var arrowStyle = {
	'height': '25px',
	'width': '40px'
};

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom = "75%";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var menuElementsList = [
	{ 'main': 'main', 'sub': [
		{ 'name': 'home', 'value': 'home' }, 
		{ 'name': 'news', 'value': 'news' }, 
		{ 'name': 'calendar', 'value': 'calendar' }] 
	}, 
	{ 'main': 'about', 'sub': [
		{ 'name': 'misión', 'value': 'mision' }, 
		{ 'name': 'investigación', 'value': 'investigacion' }, 
		{ 'name': 'cómo trabajamos', 'value': 'metodologia' }, 
		{ 'name': 'equipo', 'value': 'equipo' }] 
	},
	{ 'main': 'portfolio', 'sub': [
		{ 'name': 'todos', 'value': 'todos' }, 
		{ 'name': 'eventos', 'value': 'eventos' }, 
		{ 'name': 'pilotos', 'value': 'pilotos' }, 
		{ 'name': 'prototipos & experimentos', 'value': 'prototipos' }, 
		{ 'name': 'talleres', 'value': 'talleres' }] 
	}, 
	{ 'main': 'posts', 'sub': [
		{ 'name': 'posts', 'value': 'posts' }, 
		{ 'name': 'blog', 'value': 'blog' }] 
	}, 
	{ 'main': 'contact', 'sub': [
		{ 'name': 'suscribe', 'value': 'suscribe' }, 
		{ 'name': 'newsletter', 'value': 'newsletter' }, 
		{ 'name': 'rss', 'value': 'rss' }] 
	}
];

var propertiesList = [{ 'fontSize': '67px', 'padding': '0px 10px' }, { 'fontSize': '45px', 'padding': '0px 20px' }, { 'fontSize': '22px', 'padding': '0px 20px' }, { 'fontSize': '26px', 'padding': '0px 20px' }, { 'fontSize': '15px', 'padding': '0px 10px' }];

var menuActive = 0;

initMenu();

function initMenu(data) {
	var SubMenuItem = React.createClass({
		displayName: 'SubMenuItem',

		handleMouseOver: function handleMouseOver(lol) {
			lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
			lol.target.style['border-bottom'] = '6px solid rgba(255, 255, 0, 1)';
		},
		handleMouseOut: function handleMouseOut(lol) {
			lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			lol.target.style['border-bottom'] = '6px solid rgba(255, 255, 0, 0)';
		},
		changeView: function changeView(lol) {
			$('#dinamyComponentGroup').children().css('left', '-170%');
			$('.' + lol.target.attributes.value.value).css('left', '0');
			console.log(lol.target.attributes.value.value);
		},
		render: function render() {
			console.log(this.props);
			return React.createElement(
				'div',
				{ id: "subMenu2", onClick: this.changeView.bind(this), style: submenubutton, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this), value: this.props.value, key: this.props.value },
				this.props.name
			);
		}
	});
	var Menu = React.createClass({
		displayName: 'Menu',

		getInitialState: function getInitialState() {
			return {
				data: menuElementsList,
				actual: menuElementsList[0].sub
			};
		},
		componentWillMount: function componentWillMount() {},
		handleMouseOver: function handleMouseOver(lol) {
			if (lol.target.attributes['data-actived'].value == 'false') {
				lol.target.style['border-left'] = '6px solid rgba(255, 255, 0, 1)';
				lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
			}
		},
		handleMouseOut: function handleMouseOut(lol) {
			if (lol.target.attributes['data-actived'].value == 'false') {
				lol.target.style['border-left'] = '6px solid rgba(255, 255, 0, 0)';
				lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			}
		},
		handleMouseOverArrow: function handleMouseOverArrow(lol) {
			lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
		},
		handleMouseOutArrow: function handleMouseOutArrow(lol) {
			lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		},
		handleRemove: function handleRemove(i) {},
		menuTransform: function menuTransform(i, lol) {
			var topValue = ['0px', '-72px', '-120px', '-145px', '-173px'];

			if (i == 'up') {
				var menuChildLength = $('#itemGroupBox').children().length;
				if( menuActive > 0 ) {
					$('#itemGroupBox').children()[menuActive].style.padding = propertiesList[menuActive].padding;
					$('#itemGroupBox').children()[menuActive].style.fontSize = propertiesList[menuActive].fontSize;
					$('#itemGroupBox').children()[menuActive].attributes['data-actived'].value = 'false';
					menuActive = menuActive - 1;
					lol = $('#itemGroupBox').children()[menuActive];
					this.setState({ 'actual': menuElementsList[menuActive].sub });
					lol.style.padding = '20px 10px';
					lol.style.fontSize = '31px';
					lol.parentNode.style.top = topValue[menuActive];
					lol.parentNode.parentNode.style.height = '60px';
					lol.attributes['data-actived'].value = 'true';
					for (var a = 0; a < menuChildLength; a++) {
						if (lol.parentNode.children[a].attributes['data-actived'].value == 'false') lol.parentNode.children[a].style.opacity = '0';else lol.parentNode.children[a].style.opacity = '1';
					}
				}
			} 
			else if (i == 'down') { 
				var menuChildLength = $('#itemGroupBox').children().length;
				if( menuActive < menuChildLength-1 ) {
					$('#itemGroupBox').children()[menuActive].style.padding = propertiesList[menuActive].padding;
					$('#itemGroupBox').children()[menuActive].style.fontSize = propertiesList[menuActive].fontSize;
					$('#itemGroupBox').children()[menuActive].attributes['data-actived'].value = 'false';
					menuActive = menuActive + 1;
					this.setState({ 'actual': menuElementsList[menuActive].sub });
					lol = $('#itemGroupBox').children()[menuActive];lol.style.padding = '20px 10px';
					lol.style.fontSize = '31px';
					lol.parentNode.style.top = topValue[menuActive];
					lol.parentNode.parentNode.style.height = '60px';
					lol.attributes['data-actived'].value = 'true';
					for (var a = 0; a < menuChildLength; a++) {
						if (lol.parentNode.children[a].attributes['data-actived'].value == 'false') lol.parentNode.children[a].style.opacity = '0';else lol.parentNode.children[a].style.opacity = '1';
					}
				}
			}	 
			else { 
				var activeStatus = lol.target.attributes['data-actived'].value;
				var menuChildLength = lol.target.parentNode.children.length;
				menuActive = i;
				if (activeStatus == 'false') {
					this.setState({ 'actual': menuElementsList[i].sub });
					$('#submenu').css('left', '130px');
					lol.target.style.padding = '20px 10px';
					lol.target.style.fontSize = '31px';
					lol.target.parentNode.style.top = topValue[i];
					lol.target.parentNode.parentNode.style.height = '60px';
					lol.target.attributes['data-actived'].value = 'true';
					for (var a = 0; a < menuChildLength; a++) {
						if (lol.target.parentNode.children[a].attributes['data-actived'].value == 'false') lol.target.parentNode.children[a].style.opacity = '0';else lol.target.parentNode.children[a].style.opacity = '1';
					}
				} else {
					$('#submenu').css('left', '-60%');
					lol.target.style.padding = propertiesList[i].padding;
					lol.target.style.fontSize = propertiesList[i].fontSize;
					lol.target.parentNode.style.top = '0px';
					lol.target.parentNode.parentNode.style.height = '200px';
					lol.target.attributes['data-actived'].value = 'false';
					for (var a = 0; a < menuChildLength; a++) {
						lol.target.parentNode.children[a].style.opacity = '1';
					}
				}
			}
		},
		render: function render() {
			var indents = this.state.data.map(function (item, i) {
				return React.createElement(
					'div',
					{ key: item.main, onClick: this.menuTransform.bind(this, i), style: $.extend({}, menuItemBox, propertiesList[i]), onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this), 'data-actived': 'false' },
					item.main
				);
			}.bind(this));
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ id: 'submenu', style: submenu },
					React.createElement(
						'div',
						{ style: submenuActive },
						this.state.actual.map(function (element, i) {
							return React.createElement(SubMenuItem, { name: element.name, key: element.value, value: element.value });
						}),
						React.createElement(
							'div', 
							{ style: subMenuControlButtons },
							React.createElement(
								'div',
								{style: controlArrowButtons, onClick: this.menuTransform.bind(this,'up'), onMouseOver: this.handleMouseOverArrow.bind(this), onMouseOut: this.handleMouseOutArrow.bind(this) },
								React.createElement('img',{style: arrowStyle, src: "images/arrowUp.png"})
							),
							React.createElement(
								'div',
								{style: controlArrowButtons, onClick: this.menuTransform.bind(this, 'down'), onMouseOver: this.handleMouseOverArrow.bind(this), onMouseOut: this.handleMouseOutArrow.bind(this) },
								React.createElement('img',{style: arrowStyle, src: "images/arrowDown.png"})
							)
						)
					)
				),
				React.createElement(
					'div',
					{ id: 'menu', style: menuMainBox },
					React.createElement(
						'div',
						{ id: 'itemGroupBox', style: itemGroupBox },
						indents
					)
				)
			);
		}
	});
	React.render(React.createElement(Menu, { elements: '5' }), document.getElementById('menu'));
}

/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

//<div style={controlArrowButtons} onMouseOver = {this.handleMouseOverArrow.bind(this)} onMouseOut={this.handleMouseOutArrow.bind(this)} ><img style = {arrowStyle} src="images/arrowUp.png"></img></div>
//<div style={controlArrowButtons} onMouseOver = {this.handleMouseOverArrow.bind(this)} onMouseOut={this.handleMouseOutArrow.bind(this)} ><img style = {arrowStyle} src="images/arrowDown.png"></img></div>

/////////////-----------------------------------------------------------------------