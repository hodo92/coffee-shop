var coffeeShop = {
	beans: 40,

	drinkRequirements: {
		latte: {
			beansNeeded: 10,
			price: 4.45,
		},
		americano: {
			beansNeeded: 5,
			price: 6.4,
		},
		doubleShot: {
			beansNeeded: 15,
			price: 5,
		},
		frenchPress: {
			beansNeeded: 12,
			price: 6.5,
		},
	},
	buyDrink: function drinkBuy(drinkType) { 
		  if  ( makeDrink(drinkType) ){
			this.money += this.drinkRequirements[drinkType].price;
			console.log('coffeeShop has ' + coffeeShop.money + ' shekels');
		  }
	
	},
	money: 500,
	buy: function buyBeans(num) {
		this.money -= num;
		this.beans += num;
		console.log('you bought ' + num + ' beans for ' + num + ' shekels');
		console.log(
			'you now have ' + this.beans + ' beans and ' + this.money + ' shekels'
		);
	},

	makeDrink: function(drinkType) {
		if (drinkType in coffeeShop.drinkRequirements) {
			if (coffeeShop.beans > coffeeShop.drinkRequirements[drinkType].beansNeeded) {
				coffeeShop.beans -= coffeeShop.drinkRequirements[drinkType].beansNeeded;
				console.log('one ' + drinkType + ' on its way');
				return true ; 
				
		
					
			}
			else{
				console.log('sorry we dont have the required amount of beans');
				console.log(coffeeShop.beans + ' beans left');
				return false ; 
			}
		} else {
					console.log("Sorry, we don't make " + drinkType);
					return false ; 
		}
	},
};

coffeeShop.buyDrink('latte');
coffeeShop.buyDrink('americano');
coffeeShop.buyDrink('filtered');
coffeeShop.buyDrink('doubleShot');
coffeeShop.buyDrink('frenchPress');
