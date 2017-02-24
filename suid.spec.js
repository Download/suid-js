var expect = require('chai').expect;

var Suid = require('./suid')

describe('Suid', function(){
	describe('constructor', function(){
		it('returns instance of Number', function(){
			expect(new Suid(1)).to.be.an.instanceOf(Number)
		})

		it('returns instance of Suid', function(){
			expect(new Suid(1)).to.be.an.instanceOf(Suid)
		})

		it('creates a Suid from a number', function(){
			var id = new Suid(1903154)
			var expected  = 1903154
			expect(id.valueOf()).eq(expected)
		})

		it('creates a Suid from a string', function(){
			var id = new Suid("14she")
			var expected  = 1903154
			expect(id.valueOf()).eq(expected)
		})
	})

	describe('valueOf', function(){
		it('gets a Suid\'s underlying value', function(){
			var id = new Suid("14she")
			var expected  = 1903154
			expect(id.valueOf()).to.eq(expected)
		})
	})

	describe('toNumber', function(){
		it('converts a Suid to a number', function(){
			var id = new Suid("14she")
			var expected  = 1903154
			expect(id.toNumber()).to.eq(expected)
		})
	})

	describe('toString', function(){
		it('converts a Suid to a string', function(){
			var id = new Suid(1903154)
			var expected  = "14she"
			expect(id.toString()).to.eq(expected)
		})
	})

	describe('toJSON', function(){
		it('converts a Suid to JSON', function(){
			var id = new Suid(1903154)
			var expected  = "14she"
			expect(id.toJSON()).to.eq(expected)
		})
	})
})

describe('Suid.toNumber', function(){
	it('converts a Suid array to a number array', function(){
		var ids = [new Suid(1903154), new Suid(1903155), new Suid(1903156)]
		var expected  = [1903154, 1903155, 1903156]
		expect(Suid.toNumber(ids)).to.deep.eq(expected)
	})
})

describe('Suid.toString', function(){
	it('converts a Suid array to a string array', function(){
		var ids = [new Suid(1903154), new Suid(1903155), new Suid(1903156)]
		var expected  = ["14she", "14shf", "14shg"]
		expect(Suid.toString(ids)).to.deep.eq(expected)
	})
})

describe('Suid.from', function(){
	it('converts a number array to a Suid array', function(){
		var vals = [1903154, 1903155, 1903156]
		var ids = Suid.from(vals)
		var expected  = [1903154, 1903155, 1903156]
		expect(Suid.toNumber(ids)).to.deep.eq(expected)
	})

	it('converts a string array to a Suid array', function(){
		var vals  = ["14she", "14shf", "14shg"]
		var ids = Suid.from(vals)
		var expected  = [1903154, 1903155, 1903156]
		expect(Suid.toNumber(ids)).to.deep.eq(expected)
	})
})

describe('Suid.revive', function(){
	it('revives Suids from JSON', function(){
		var vals = [1903154, 1903155, 1903156]
		var ids = Suid.from(vals)
		var json = JSON.stringify(ids)
		var deserialized = JSON.parse(json, Suid.revive())
		expect(deserialized[0]).to.be.an.instanceOf(Suid)
		var expected  = [1903154, 1903155, 1903156]
		expect(Suid.toNumber(deserialized)).to.deep.eq(expected)
	})
})
