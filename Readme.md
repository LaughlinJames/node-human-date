# node-human-date

A node.js package for formatting a date in Twitter's human readable style.

## Modifications

* Removed the `Date.prototype.format` method. Sorry folks, but extending native prototypes is for suckers.
* Added a `module.exports = dateFormat;` statement at the bottom

## Usage

    // ...Or add the prefix "UTC:" to your mask.
    dateFormat(now, "UTC:h:MM:ss TT Z");
    // 10:46:21 PM UTC

    // You can also get the ISO 8601 week of the year:
    dateFormat(now, "W");
    // 42


## License

(c) 2012 James Laughlin [laughlinjames.com][laughlinjames], MIT license.

