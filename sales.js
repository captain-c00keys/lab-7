'use strict';

var hoursStore = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pikeStore = {
  name: '1st and Pike',
  cookiesPerCust: 6.3,
  custMinHr: 23,
  custMaxHr: 65,
  cookiesPerHour: [],
  custPerHour: [],
  totalSales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hoursStore.length; i++){
      this.custPerHour.push(random(this.custMinHr, this.custMaxHr));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hoursStore.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.cookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalSales += oneHour;
    }
  },
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('pike');
    for(var i = 0; i < hoursStore.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hoursStore[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacStore = {
  name: 'SeaTac Airport',
  cookiesPerCust: 1.2,
  custMinHR: 3,
  custMaxHR: 24,
  cookiesPerHour: [],
  custPerHour: [],
  customers: function (custMin, custMax) {
    return Math.random() * (this.custMax - this.custMin) + this.custMin;
  }
};

var seaCenStore = {
  name: 'Seattle Center',
  cookiesPerCust: 3.7,
  custMinHR: 11,
  custMaxHR: 38,
  cookiesPerHour: [],
  custPerHour: [],
  customers: function (custMin, custMax) {
    return Math.random() * (this.custMax - this.custMin) + this.custMin;
  }
};

var capHillStore = {
  name: 'Capital Hill',
  cookiesPerCust: 2.3,
  custMinHR: 20,
  custMaxHR: 38,
  cookiesPerHour: [],
  custPerHour: [],
  customers: function (custMin, custMax) {
    return Math.random() * (this.custMax - this.custMin) + this.custMin;
  }
};

var alkiStore = {
  name: 'Alki',
  cookies: 4.6,
  custMinHR: 2,
  custMaxHR: 16,
  cookiesPerHour: [],
  custPerHour: [],
  customers: function (custMin, custMax) {
    return Math.random() * (this.custMax - this.custMin) + this.custMin;
  }
};
