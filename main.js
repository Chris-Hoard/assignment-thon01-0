/* global readline */
var cars = {
	car: [{
		type: "sedan",
		price: 100,
		totalAvaliable: 10,
		totalRented: 0
	}, {
		type: "suv",
		price: 200,
		totalAvaliable: 8,
		totalRented: 0
	}, {
		type: "sports",
		price: 300,
		totalAvaliable: 6,
		totalRented: 0
	}],
	
	listAvaliable: function(){
	    this.car.forEach(function(car){
	        if (car.totalRented < car.totalAvaliable){
	            console.log(car.type+" Avaliable: "+(car.totalAvaliable-car.totalRented).toString());
	        }else{
	            console.log(car.type+" Avaliable: 0");
	        }
	    });
	
	},
	  rentRequest: function(rentType){
	      this.car.forEach(function(car){
	          if (car.type===rentType){
	              car.totalRented++;
	          }
	      });
	      this.listAvaliable();
	      
	  }
};

cars.listAvaliable();



