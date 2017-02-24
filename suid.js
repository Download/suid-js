/**!  download/suid-js (c) 2017 by Stijn de Witt. CC-BY-4.0 */
function Suid(value){
	if (value === undefined) value = 0
	if (typeof value === 'string') value = parseInt(value, 36)
	if (value instanceof Suid) value = value.valueOf()
	return Object.assign(this, new Number(value), {
		valueOf: function(){return value},
		toString: function(){return toString(this)},
		toJSON: function(){return toString(this)},
		toNumber: function () {return toNumber(this)},
		equals: function(that) {return equals(this, that)},
		compare: function(that){return compare(this, that)}
	})
}

Suid.prototype = Object.create(Number.prototype)
Suid.prototype.constructor = Suid

function toString(suid) {return (toNumber(suid)).toString(36)}
function toNumber(suid){return suid.valueOf()}
function from(val) {return new Suid(val)}
function equals(x,y) {return toNumber(Suid(x)) === toNumber(Suid(y))}

Suid.toString = function(ids) {return ids.map(toString)}
Suid.toNumber = function(ids) {return ids.map(toNumber)}
Suid.from = function(vals) {return vals.map(from)}

Suid.revive = function(prop) {
	var mayRevive = (
		typeof prop == 'string' ? function(x) {return x == prop}
		: Array.isArray(prop) ? function(x) {return prop.indexOf(x) != -1} 
		: prop instanceof RegExp ? function(x) {return x.match(prop)} 
		: typeof prop == 'function' ? prop
		: function() {return true}
	)
	return function reviver(key, value) {
		return mayRevive(key, value) && Suid.looksValid(value) ? new Suid(value) : value
	}
}

Suid.looksValid = function(val) {
	if (val === undefined) return false
	var len = typeof val == 'string' ? val.length : 0
	if (!len || len>11) return false
	if (len===11 && ALPHABET.indexOf(val.charAt(0)>2)) return false
	for (var i=0; i<len; i++) {
		if (ALPHABET.indexOf(val.charAt(i)) === -1) return false
	}
	return true
}

var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz'

module.exports = Suid;
