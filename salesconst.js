'use strict';

var hoursStore = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function Stores (name, cookiesPerHour, custPerHour) {
  this.name = name;
  this.cookiesPerCust = cookiesPerCust;
  this.custMinHr = custMinHR;
  this.custMaxHR = custMaxHR;
  this.cookiesPerHour = cookiesPerHour[];
  this.custPerHour = custPerHour[];
  this.totalSales = 0;
  this.custPerHourFunc: function(){
    for(var i = 0; i < hoursStore.length; i++){
      this.custPerHour.push(random(this.custMinHr, this.custMaxHr));
    }
  }
  this.cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hoursStore.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.cookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalSales += oneHour;
    }
  }
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
//goes under the this.render
//create a tr
var trEl = document.createElement('tr');

//create td, content, append for store name
var tdEl = document.createElement('td');
tdEl.textContent = this.name;
trEl.appendChild(tdEl);

//create td
for(var i = 0; i < hours.length; i++)
//
