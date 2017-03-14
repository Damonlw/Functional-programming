/**
 * Show Time
 */

//函数组合

const compose = function(f, g) {
	return function(x) {
		return f(g(x))
	}
}

// const head = function(x) { return x[0] }
// const exclainm = function(x) { return x + '!' }
// const result = compose(head, exclainm)
//
// console.log(result(['jumpkick', 'roundhouse', 'uppercut']))



//容器映射
//面向对象

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
// console.log((new Func(0)).Map(x => x + 1)); // Func { val: 1 }


//函数式
// const Func = function(x) { this.val = x }
// Func.of = val => new Func(val)
// Func.of([1, 2, 3]).val.map(x => x + 2)  // [3, 4, 5]





// const origin = [1, 2, 3]

// // 命令式
// const makes = [] // [1, 2, 3]
// for (i = 0; i < origin.length; i++) {
// 	makes.push(origin[i])
// }

// // 表达式
// const makes = origin.map(x => x) // [1, 2, 3]
//
// // || 刷副本，打怪升级...K.O
// // \/
//
// const makes = function(arr) {
// 	return arr.map(x => x)  // [1, 2, 3]
// }
// // /\
// // || 自由切换
// // \/
// const makes = arr => arr.map(x => x)



// // 容器 表达式形式，仍可用class关键字转换风格
// const Maybe = function(x) { this.val = x }
// Maybe.of = x => new Maybe(x)
// Maybe.prototype = {
// 	isNothing() {
// 		return (this.val === null || this.val === undefined)
// 	},
// 	map(f) {
// 		return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.val))
// 	}
// }
// Maybe.of('bocaigua').map(x => x.match(/a/ig)).val   // [ 'a', 'a']

//似乎不太适用于封装
