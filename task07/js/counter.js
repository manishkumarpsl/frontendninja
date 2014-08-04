var Counter = (function () {
	
	var number = 0;
	return {
		get : function() { 
			return number; 
		},
		
		increment : function() { 
			return ++number; 
		},
		
		reset : function() { 
			number = 0; 
		}
	};
}());

var number = Counter.get(); // returns 0

Counter.increment(); // internally increments number

number = Counter.get() // now returns 1

Counter.reset(); // internally resets to 0

number = Counter.get(); // now returns 0