/*
 * Node Human Date 0.0.1
 * (c) 2012 James Laughlin <james@laughlinjames.com>
 * MIT license
 *
 *
 * 	Accepts:
 *		Date, as formatted by the Twitter search API 
 *			created_at: 'Mon Aug 27 03:36:53 +0000 2007'
 * 
 *	Returns a version of the given date 
 *	formatted in Twitter's human readable style ( '6s', '15m', '7d')
 */

	exports.formatDate = function( timeStamp ){
		var now = new Date();  // current server date
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
				'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var humanTimeStamp = '';
		
		// get the date object for the tweet and 
		// the seconds to do the diff between now
		// and the tweet timestamp.
		var tweetDate = new Date( timeStamp );
		var tweetSeconds = Date.parse(timeStamp) / 1000; 
		var nowSeconds = Date.parse( now ) / 1000;

		// diff the tweet timestamp against the current time
		var diff = parseInt( nowSeconds - tweetSeconds  );

		// return the appropriate human readable timestamp	
		if ( diff < 60 ){ // reporting seconds
			humanTimeStamp = diff + 's';	
		}else if ( diff < 3600 ){  // reporting minutes		
			var minutes = parseInt((diff + 30) / 60);
			humanTimeStamp = minutes + 'm';
		}else if (diff < 86400){ // reporting hours
			var hours = parseInt((diff + 1800) / 3600);
			humanTimeStamp = hours + 'h';
		}else{
			// if the tweet is more than 24 hours old
			// return the date in dd mmm format
			var month = months[ tweetDate.getMonth() ];
			var day = tweetDate.getDate();
			humanTimeStamp = day + ' ' + month;
		}

		return humanTimeStamp;
	};

