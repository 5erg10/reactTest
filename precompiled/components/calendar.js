'use strict';

/*var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',' October', 'November', 'December'];
var weeks = ['week1', 'week2', 'week3', 'week4', 'week5'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var thisMonth = new Date(year, month, 1);
var nextMonth = new Date(year, month + 1, 1);
var firstWeekDay = thisMonth.getDay();
var daysInThisMonth = Math.round((nextMonth.getTime() - thisMonth.getTime()) / (1000 * 60 * 60 * 24));

initCalendar();

function initCalendar(date){
    var daysOfWeek = React.createClass({
             getInitialState: function(){
                return {
                    'day': weeks
                }
            },
            componentWillMount: function () {
            },
            handleMouseOver: function(lol) {
                //lol.currentTarget.children[0].style.top = '0';
            },
            handleMouseOut: function(lol) {
                //lol.currentTarget.children[0].style.top = '-100%';
            },
            handleMouseOverArrow: function(lol) {
            },
            handleMouseOutArrow: function(lol) {
            },
            handleRemove: function(i) {
            },
            render: function() {
                var daysInLine = [];
                for(var day_counter = 1; day_counter <= daysInThisMonth; day_counter++) {
                   /* week_day %= 7;
                    if(week_day == 0)
                      daysInLine.push(</tr><tr>)*/

                    /*if(day == day_counter)  daysInLine.push(<td style="text-align: center;"><b> day_counter </b></td>)
                    else    daysInLine.push( <td style="background-color:9999cc; color:000000; text-align: center;"> day_counter </td>)

                    week_day++;
                  }
                return (
                     daysInLine  
                )
            }
    });
    var Calendar = React.createClass({
            getInitialState: function(){
                return {
                    'day': weeks
                }
            },
            componentWillMount: function () {
            },
            handleMouseOver: function(lol) {
                //lol.currentTarget.children[0].style.top = '0';
            },
            handleMouseOut: function(lol) {
                //lol.currentTarget.children[0].style.top = '-100%';
            },
            handleMouseOverArrow: function(lol) {
            },
            handleMouseOutArrow: function(lol) {
            },
            handleRemove: function(i) {
            },
            render: function() {
                var Weeks = this.state.day.map(function(item, i){
                    return (
                        <tr>
                           <daysOfWeek name={item} key={item}></daysOfWeek>
                        </tr>
                    )
                }.bind(this));
                return (
                        <table id="team" style={teamMainBox}>
                            {Weeks}           
                        </table>
                )
            }
        });
React.render(<Calendar elements="9"/>, document.getElementById('calendar'))
}*/

calendar();
function calendar(date) {
  if(date == null)
     date = new Date();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

  var this_month = new Date(year, month, 1);
  var next_month = new Date(year, month + 1, 1);

  // Find out when this month starts and ends.
  var first_week_day = this_month.getDay();
  var days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));

  var calendar_html = '<table style="background-color:666666; color:ffffff; position: absolute; bottom: 10%; right: 1%; width: 15%; height: 20%;">';
  calendar_html += '<tr><td colspan="7" style="background-color:666666; color:ffffff; font-weight: bold; text-align: center;">' + months[month] + ' ' + year + '</td></tr>';
  calendar_html += '<tr>';

  // Fill the first week of the month with the appropriate number of blanks.
  for(week_day = 0; week_day < first_week_day; week_day++) {
    calendar_html += '<td style="background-color:aaaaaa; color:444444;"> </td>';
  }

  var week_day = first_week_day;

  for(var day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
    week_day %= 7;
    if(week_day == 0)
      calendar_html += '</tr><tr>';

    // Do something different for the current day.
    if(day == day_counter)
      calendar_html += '<td style="text-align: center;"><b>' + day_counter + '</b></td>';
    else
      calendar_html += '<td style="background-color:aaaaaa; color:444444; text-align: center;"> ' + day_counter + ' </td>';

    week_day++;
  }

  calendar_html += '</tr>';
  calendar_html += '</table>';

  // Display the calendar.
  document.body.innerHTML += calendar_html;
}
