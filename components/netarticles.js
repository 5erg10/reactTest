'use strict';

var _footerPlusInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/////////////---------------------STYLES ------------------------------------------
var linkStyle = {
			'color': 'white',
			'textDecoration': 'none'
};
var netBox = {
			'overflowY': 'auto'
};
var netFiles = {
			'-webkit-box-shadow': '9px 10px 20px 0px rgba(0,0,0,0.33)',
			'-moz-box-shadow': '9px 10px 20px 0px rgba(0,0,0,0.33)',
			'box-shadow': '9px 10px 20px 0px rgba(0,0,0,0.33)',
			'width': '300px',
			'backgroundColor': 'rgba(255, 255, 255, 1)',
			'border': 'solid 1px',
			'marginLeft': '20px',
			'color': 'black',
			'marginTop': '20px',
			'float': 'left',
			'height': '255px'
};

var backgroundC = ['rgba(222, 62, 62, 0.95)', 'rgba(215, 139, 61, 0.95)', 'rgba(106, 166, 105, 0.95)', 'rgba(110, 82, 177, 0.95)', 'rgba(185, 182, 79, 0.95)', 'rgba(62, 101, 255, 0.95)'];

var noticeHeather = {
			'color': 'white',
			'fontWeight': 'bold',
			'padding': '13px',
			'height': '45px',
			'fontSize': '17px'
};
var titularText = {
			'width': '80%',
			'float': 'left'
};
var noticeBody = _defineProperty({
			'height': '155px',
			'overflow': 'hidden',
			'width': '300px'
}, 'overflow', 'hidden');
var noticeSlide = {
			'height': '155px',
			'width': '620px',
			'position': 'relative',
			'left': '-300px'
};
var noticeTitular = {
			'padding': '10px',
			'textAlign': 'justify',
			'height': '155px',
			'width': '275px',
			'float': 'left',
			'fontSize': '14px'
};
var noticeImageBox = {
			'width': '30%',
			'float': 'left'
};
var noticeText = {
			'width': '53%',
			'float': 'left',
			'backgroundColor': 'rgba(255, 255, 255, 0.85)',
			'height': '155px',
			'padding': '10px 20px 0px 20px'
};
var noticePlusInfo = {
			'textAlign': 'justify',
			'height': '155px',
			'width': '300px',
			'float': 'left',
			'opacity': '0.65'
};
var noticeImage = {
			'width': '225px',
			'opacity': '1'
};
var closeFileButtom = {
			'cursor': 'pointer',
			'float': 'right',
			'width': '10%',
			'textAlign': 'right'
};
var imageCloseFileButtom = {
			'width': '18px'
};
var noticeFooter = {
			'height': '30px',
			'color': 'white',
			'textAlign': 'right'
};
var footerPlus = {
			'cursor': 'pointer',
			'float': 'left',
			'width': '15px',
			'height': '15px',
			'padding': '7px'
};
var footerPlusInfo = (_footerPlusInfo = {
			'color': 'white',
			'float': 'left',
			'overflow': 'hidden!important',
			'width': '150px',
			'height': '100%'
}, _defineProperty(_footerPlusInfo, 'overflow', 'hidden'), _defineProperty(_footerPlusInfo, 'textAlign', 'center'), _footerPlusInfo);
var footerPlusInfoLetter = {
			'width': '150px',
			'height': '38px',
			'lineHeight': '37px',
			'fontWeight': 'bold',
			'cursor': 'pointer'
};
var footertwit = {
			'cursor': 'pointer',
			'float': 'left',
			'width': '15px',
			'height': '15px',
			'padding': '7px'
};
var readMoreLegend = {
			'width': '105px',
			'height': '20px',
			'float': 'right',
			'textAlign': 'center',
			'paddingTop': '7px',
			'cursor': 'pointer'
};
/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

//var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Madrid&units=metric&cnt=14&appid=ab68bc64552d2af53af0f6b928972688"
//var weatherAPI = "https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=3a883aa5c68d22f29c53ebd789d86c1309235b5f&outputMode=json&start=now-1d&end=now&count=100&q.enriched.url.enrichedTitle.relations.relation=|action.verb.text=acquire,object.entities.entity.type=Company|&return=enriched.url.title"
var weatherAPI = "https://api.import.io/store/connector/0dcda811-d886-46a1-948a-6cb38e9cb567/_query?input=webpage/url:http%3A%2F%2Fwww.elespanol.com%2F&&_apikey=5d896f462b9d4d52b9da016a72f1e5e5884dcc899b0911631e49dd6c800f9509d5a79bbfadd299a85a3057ac07fdecbaa88c49b54ba6c2955fb3b046dfc8e6ec29259b373214447b01fab4e9ac1291bf";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

$.get(weatherAPI, function (data) {
			console.log(data);
			initArticles(data);
});

function initArticles(data) {
			var Net = React.createClass({
						displayName: 'Net',

						getInitialState: function getInitialState() {
									return {
												byDate: data.results
									};
						},
						componentWillMount: function componentWillMount() {},
						handleMouseOver: function handleMouseOver(lol) {
									lol.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
						},
						handleMouseOut: function handleMouseOut(lol) {
									lol.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
						},
						handleRemove: function handleRemove(i) {
									var newItems = this.state.byDate.slice();
									newItems.splice(i, 1);
									this.setState({ byDate: newItems });
						},
						plusInfoAppear: function plusInfoAppear(lol, i) {
									var activeStatus = $(i.currentTarget).attr('data-actived');
									if (activeStatus == 'false') {
												$("#subIconPlus" + lol).css({ 'display': 'none' });
												$("#subIconMinor" + lol).css({ 'display': 'block' });
												$("#noticeSlide" + lol).css({ 'left': '0px', 'transition': 'left 0.2s ease-out' });
												$("#footerPlus" + lol).attr('data-actived', 'true');
									} else if (activeStatus == 'true') {
												$("#subIconPlus" + lol).css({ 'display': 'block' });
												$("#subIconMinor" + lol).css({ 'display': 'none' });
												$("#noticeSlide" + lol).css({ 'left': '-300px', 'transition': 'left 0.2s ease-out' });
												$("#footerPlus" + lol).attr('data-actived', 'false');
									}
						},
						render: function render() {
									var longi = backgroundC.length;
									console.log(longi);
									var indents = this.state.byDate.map(function (item, i) {
												if (item.media_image) {
															var color = i % 6;
															var Did = "footerPlus" + i.toString();
															var subIdIconPlus = "subIconPlus" + i.toString();
															var subIdIconMinor = "subIconMinor" + i.toString();
															var subId = "sub" + i.toString();
															var footerTwitId = "tweet" + i.toString();
															var noticeSlideId = "noticeSlide" + i.toString();
															return React.createElement(
																		'div',
																		{ id: 'netFiles', style: $.extend({}, netFiles, { 'borderColor': backgroundC[color] }), key: item.part_link },
																		React.createElement(
																					'div',
																					{ id: 'noticeHeather', style: $.extend({}, noticeHeather, { 'backgroundColor': backgroundC[color] }) },
																					React.createElement(
																								'div',
																								{ id: 'titularText', style: titularText },
																								item['part_link/_title']
																					),
																					React.createElement(
																								'div',
																								{ id: 'closeButtom', style: closeFileButtom, onClick: this.handleRemove.bind(this, i) },
																								React.createElement('i', { className: 'fa fa-times-circle' })
																					)
																		),
																		React.createElement(
																					'div',
																					{ id: 'noticeBoby', style: noticeBody },
																					React.createElement(
																								'div',
																								{ id: noticeSlideId, style: noticeSlide },
																								React.createElement(
																											'div',
																											{ id: 'noticePlusInfo', style: $.extend({}, noticePlusInfo, { 'backgroundColor': backgroundC[color] }) },
																											React.createElement(
																														'div',
																														{ style: $.extend({}, footerPlusInfo, { 'backgroundColor': backgroundC[color] }), id: subId },
																														React.createElement(
																																	'div',
																																	{ style: footerPlusInfoLetter, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																																	'Add to favorite'
																														),
																														React.createElement(
																																	'div',
																																	{ style: footerPlusInfoLetter, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																																	'Disable Source'
																														),
																														React.createElement(
																																	'div',
																																	{ style: footerPlusInfoLetter, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																																	'More From Source'
																														),
																														React.createElement(
																																	'div',
																																	{ style: footerPlusInfoLetter, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																																	'Similar Notices'
																														)
																											)
																								),
																								React.createElement(
																											'div',
																											{ id: 'noticeTitular', style: noticeTitular },
																											React.createElement(
																														'div',
																														{ style: noticeImageBox },
																														React.createElement('img', { src: item.media_image, style: noticeImage })
																											),
																											React.createElement(
																														'div',
																														{ style: noticeText },
																														React.createElement(
																																	'spam',
																																	null,
																																	item.tarjeta_content.substring(0, 150),
																																	' ...'
																														)
																											)
																								)
																					)
																		),
																		React.createElement(
																					'div',
																					{ id: 'noticeFooter', style: $.extend({}, noticeFooter, { 'backgroundColor': backgroundC[color] }) },
																					React.createElement(
																								'div',
																								{ style: footerPlus, id: Did, onClick: this.plusInfoAppear.bind(this, i), 'data-actived': 'false', onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																								React.createElement('i', { className: 'fa fa-plus', style: { "float": "left" }, id: subIdIconPlus }),
																								React.createElement('i', { className: 'fa fa-minus', style: { "float": "left", "display": "none" }, id: subIdIconMinor })
																					),
																					React.createElement(
																								'div',
																								{ style: footertwit, id: footerTwitId, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																								React.createElement('i', { className: 'fa fa-twitter' })
																					),
																					React.createElement(
																								'div',
																								{ style: readMoreLegend, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
																								React.createElement(
																											'a',
																											{ style: linkStyle, href: item.media_link, target: '_blank' },
																											'Read more'
																								)
																					)
																		)
															);
												}
									}.bind(this));
									return React.createElement(
												ReactCSSTransitionGroup,
												{ style: netBox, transitionName: 'example', transitionAppear: true, transitionAppearTimeout: 500 },
												indents
									);
						}
			});
			React.render(React.createElement(Net, { elements: '5' }), document.getElementById('news'));
}

/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------
/////////////------------------------------------------------------------------------