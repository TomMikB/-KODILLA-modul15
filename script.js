'use strict';

(function(){

	function Phone(brand, price, color, os) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.os = os;
	}

	Phone.prototype.printInfo = function() {
		console.log('The phone brand is: ' + this.brand + ', color is: ' + this.color + ' and the price is: ' + this.price + '.');
	}

	Phone.prototype.sys = function() {
		console.log(this.brand + ' operating system is: ' + this.os + '.');
	}

	var SamsungGalaxyS6 = new Phone('Samsung', 800, 'black', 'Android');
	var iPhone6s = new Phone('Apple', 1400, 'silver', 'iOS');
	var OnePlusOne = new Phone('OnePlus', 1000, 'white', 'Android');

	SamsungGalaxyS6.printInfo();
	iPhone6s.printInfo();
	OnePlusOne.printInfo();

	SamsungGalaxyS6.sys();
	iPhone6s.sys();
	OnePlusOne.sys();

})();
