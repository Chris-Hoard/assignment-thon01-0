/* global readline */
var work = {
    cars: {
    	"SEDAN": {
    		type: "sedan",
    		price: 100,
    		totalAvaliable: 10,
    		totalRented: 0
    	},
    	"SUV": {
    		type: "suv",
    		price: 200,
    		totalAvaliable: 8,
    		totalRented: 0
    	},
    	"SPORTS": {
    		type: "sports",
    		price: 300,
    		totalAvaliable: 6,
    		totalRented: 0
    	}
    },
	
	listAvaliable: function(){
	    
        for (var i in this.cars){
             if (this.cars[i].totalRented < this.cars[i].totalAvaliable){
	            console.log(this.cars[i].type+" Avaliable: "+(this.cars[i].totalAvaliable-this.cars[i].totalRented).toString() + " Price: "+this.cars[i].price);
	        }else{
	            console.log(this.cars[i].type+" Avaliable: 0");
	        }
            
        }
	
	},
	  rentRequest: function(rentType){
	      work.cars[(rentType.toUpperCase())].totalRented++;
	      this.listAvaliable();
	      
	  }
	  
	  
};

work.listAvaliable();



