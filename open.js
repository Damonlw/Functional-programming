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




// // 命令式



// const origin = [1, 2, 3]
//
// const makes = [] // [1, 2, 3]
// for (let i = 0; i < origin.length; i++) {
// 	makes.push(origin[i])
// }


// select * from '前端邪会' where tag = '老司机'


// 表达式
// const origin = [1, 2, 3]
// const makes = origin.map(x => x) // [1, 2, 3]
//
// // || 刷副本，打怪升级...K.O
// // \/
//
// const makes = arr => arr.map(x => x)
// makes(origin)  // [1, 2, 3]



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
// console.log((new Func(0)).Map(x => x + 1)) // Func { val: 1 }

//函数式
// const Func = function(x) { this.val = x }
// Func.of = val => new Func(val)
// Func.of([1, 2, 3]).val.map(x => x + 2).map(x => x + 1)  // [4, 5, 6]


// 仍可用class关键字转换编码风格

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
// function traverseArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`index: ${i}, value: ${arr[i]}`)
//   }
// }
// traverseArray(arr)
//
//
// const rank = (item, index) => console.log(`index: ${index}, value: ${item}`)
// const print = (start, length) =>{
// 	if(start === length)
// 	return null
// 	rank(arr[start], start)
// 	return print(start + 1, length)
// }
// print(0, arr.length)




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





//管道流式

// const str = 'abcdaabc'
// const res = str => str.split('')
//                       .reduce((pre, cur) => (pre[cur]++ || (pre[cur] = 1), pre), {})
// res(str) // { a: 3, b: 2, c: 2, d: 1 }


// //函数组合

// const compose = (f, g) => x => f(g(x))
// const str = 'abcdaabc'
// const split = str => str.split('')
// const reduce = str => str.reduce((pre, cur) => (pre[cur]++ || (pre[cur] = 1), pre), {})
// const result = compose(reduce, split)
// result(str)  // { a: 3, b: 2, c: 2, d: 1 }

// 尾递归

// let acc = 0
// for (var i = 1; i <= 10; ++i) {
// 	acc += i
// }
// acc  // 55
//
//
// const sum = (start, end, acc) =>{
// 	if(start > end)
// 	return acc
// 	return sum(start + 1, end, acc + start)
// }
// sum(1, 10, 0) // 55

// 柯里化

// const pair = a => b => [a, b]
// pair(1)(2) // [1, 2]

// const behavior = who => doing => thing => console.log(`现在${who}想${doing+thing}咯`)
// const todo = behavior('我')('吃')
// todo('饭')

// 反柯里化
// Function.prototype.unCurrying = function () {
//     return this.call.bind(this);
// }
// // const push = Array.prototype.push.unCurrying()
// // const obj = {}
// // push(obj, 'a', 'b')
// // console.log(obj)
// const obj = {0:'a', 1:'b', length: 2}
// const f = function(x){console.log(x)}
// const map = Array.prototype.map.unCurrying()
// map(obj, f)
// const map = function(obj, f){
//     return Array.prototype.map.call(obj, f);
// };
// const f = function(x){console.log(x)}
// const obj = {0:'a', 1:'b', length: 2}
// map(obj, f)

// 引用透明性

// const magic = cage => cage[0] = { name: '翠花' }
// const birdInCage = [{name: 'tweety'}]
// magic(birdInCage)
// birdInCage     // [{ name: '翠花' }]

// const birdInCage = [{name: 'tweety'}]
// const magic = birdInCage => birdInCage.map(bird =>({ name: '翠花' }))
// const another = magic(birdInCage)
// another        // [{ name: '翠花' }]
// birdInCage     // [{ name: 'tweety' }]


// 副作用

// const arr = [1, 2, 3, 4, 5];
//
// // 纯的
// arr.slice(0, 3);
// //=> [1, 2, 3]
//
// arr.slice(0, 3);
// //=> [1, 2, 3]
//
// // 不纯的
// arr.splice(0, 3);
// //=> [1, 2, 3]
//
// arr.splice(0, 3);
// //=> [4, 5]

// const add = val => val + 10
// const mult = val => val * 5
//
// const multAfterAdd = compose(mult, add)
// const addAfterMult = compose(add, mult)
//
// multAfterAdd(10) // 100
// addAfterMult(10) // 60


//多态

// const we = {
// 	1: '不二',
// 	2: '菜瓜',
// 	3: '灿灿',
// 	4: '城管',
// 	5: '东邪',
// 	6: '枫叶',
// 	7: '绿间',
// 	8: '曼巴',
// 	9: '麻薯',
// 	10: '瓶子',
// 	11: '糖饼',
// 	12: '天吾',
// 	13: '小米',
// 	14: '芝士'
// }
//
// function oldDriver(name) {
//   this.nam = name
// }
// oldDriver.prototype.take = function (passenger, tool) {
//   console.log(`老司机带${passenger.name}上${tool.name}`)
// }
// function Passenger(name) {
//   this.name = name
// }
// function Person(name) {
//   this.passenger = Passenger
//   this.passenger(name)
// }
// function Tool(name) {
// 	this.name = name
// }
// const driver = new oldDriver('driver')
// const person = new Person(we[Math.floor(Math.random() * 14 + 1)])
// const tool = new Tool('车')
// driver.take(person, tool)
