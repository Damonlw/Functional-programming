/**
 * Show Time
 */
const compose = function (f, g) {
	return function (x) {
		return f(g(x))
	}
}
const head = function (x) { return x[0] }
const exclainm = function (x) { return x + '!' }
const result = compose(head, exclainm)

console.log(last(['jumpkick', 'roundhouse', 'uppercut']))
