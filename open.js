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



//容器映射
//面向对象编程

// class Func {
// 	constructor(val) {
// 		this.val = val
// 	}
//
// 	Map(f) {
// 		return new Func(f(this.val))
// 	}
// }
//
// (new Func(2)).Map((x) => x + 2) // Func { val: 4 }


//函数式编程

Func.of = function(val) {
	return new Func(val)
}

Func.of(2).map((x) => x + 2)
