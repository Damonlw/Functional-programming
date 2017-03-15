/**
 * I'm shouldn't alive, unless was a reason.
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



// // 容器 表达式形式，仍可用class关键字转换编码风格
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

//似乎不太适用于封装、更适合于异步回调




// const arr = [1, 1, 2, 3, 5, 8]
// // function traverseArray(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log(`index: ${i}, value: ${arr[i]}`)
// //   }
// // }
// // traverseArray(arr)
//
//
// // const rank = (item, index) => console.log(`index: ${index}, value: ${item}`)
// // const print = (start, length) =>{
// // 	if(start === length)
// // 	return null;
// // 	rank(arr[start], start)
// // 	return print(start + 1, length)
// // }
// // print(0, arr.length)




// function charge(order, callback) {
//   console.log(callback)
//   setTimeout(() => callback(order), 100)
// }
// function drink() {
//   setTimeout(() => order.push({ name: 'D2R2', price: '66666'}), 99)
// }
// function print(order) {
//   console.log(order)
// }
// const order = [
//   { name: 'kindle', price: '100'},
//   { name: 'drone', price: '200'}
// ]
// console.log(drink(order))
// console.log(charge(order, print))


// 柯里化
// const pair = a => b => [1, 2]
// console.log(pair(1)(2))



//管道流式
// const str = 'abcdaabc'
// 	// const res = str
// 	// 						.split('')
// 	//            .reduce((pre, cur) => (pre[cur]++ || (pre[cur] = 1), pre), {})
//
//
//
// //函数组合
// // const split = str => str.split('')
// // const reduce = str => str.reduce((pre, cur) => (pre[cur]++ || (pre[cur] = 1), pre), {})
// // const result = compose(reduce, split)


// 尾递归
// const acc = 0;
// 	for (var i = 1; i <= 10; ++i)
// 	    acc += i;
// acc // 55
//
// 	const sum = (start, end, acc) =>{
// 		if(start > end)
// 		return acc;
// 		return sum(start + 1, end, acc + start)
// 	}
// 	sum(1, 10, 0) // 55
