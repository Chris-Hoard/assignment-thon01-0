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
	    
	    var findObjectByLabel = function(obj, label) {
            if(obj.label === label) { return obj; }
            for(var i in obj) {
                if(obj.hasOwnProperty(i)){
                    var foundLabel = findObjectByLabel(obj[i], label);
                    if(foundLabel) { return foundLabel; }
                }
            }
            return null;
        };
        
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



