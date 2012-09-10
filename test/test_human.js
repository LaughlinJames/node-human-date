var human = require( 'node-human-date' );
var now = new Date();

var dates = [
	now - 15000, 									// 15s
	now - 60000, 									// 1m
	now - 60000 * 5,							// 5m	
	now - 60000 * 60, 						// 1h
	now - 60000 * 60 * 7,	 				// 7h
	now - 60000 * 60 * 24,				// <date>
	now - 60000 * 60 * 24 * 10 	 	// <date>
];


for ( i=0; i<dates.length; i++ ){
	
	var parseDate = new Date( dates[ i ] );
	console.log( human.formatDate( parseDate ) );

}