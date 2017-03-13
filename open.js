/**
 * Show Time
 */
//函数组合

const compose = function(f, g) {
	return function(x) {
		return f(g(x))
	}
}

const head = function(x) { return x[0] }
const exclainm = function(x) { return x + '!' }
const result = compose(head, exclainm)

console.log(result(['jumpkick', 'roundhouse', 'uppercut']))


class Func {
	constructor(val) {
		this.val = val
	}

	Map(f) {
		return new Func(f(this.val))
	}
}

const fn = new Func()
