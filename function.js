// 1, 11 - null undefined
// var undefinedVar
// console.log(!!undefinedVar)
// var nullVar = null
// console.log(!!nullVar)

// console.log(undefinedVar)
// function undefinedFunction(params) {}
// console.log(undefinedFunction()); 
// var anObject = {fName: 'sep', job: 'smith', age: 27}
// console.log(anObject.undefinedProperty)
// console.log(anObject.undefinedProperty.undefinedProperties)
// console.log(nullVar)

// console.log(typeof undefinedVar)
// console.log(typeof nullVar)
// console.log(undefinedVar == nullVar)
// console.log(undefinedVar === nullVar)

// 2 - && AND
// console.log('ali' && true && 23 && 'goli')
// console.log('hesse' && null && 46 && false)

// 3 - || OR
// console.log('hesse' || null || 46 || false)

// 4 - Unary Plus +
// console.log(typeof '27')
// console.log(typeof +'27')

// 5 - DOM

// 6 - Event Propagation

// 7 - Event Bubbling
// document.getElementById('nyDiv').addEventListener('click', function() {
//   alert('Im Ny Div')
// })
// document.getElementById('nyP').addEventListener('click', function() {
//   alert('Im Ny P')
// })

// 8 - Event Capturing
// document.getElementById('nyDiv').addEventListener('click', function() {
//   alert('Im Ny Div')
// }, true)
// document.getElementById('nyP').addEventListener('click', function() {
//   alert('Im Ny P')
// }, true)

// 9, 10 - e.preventDefault() e.stopPropagation() 
// document.getElementById('nyDiv').addEventListener('click', function(e) {
//   alert('Im Ny Div')
//   e.stopPropagation()
// })
// document.getElementById('nyP').addEventListener('click', function(e) {
//   alert('Im Ny P')
//   e.stopPropagation()
// })

// function prevent(e) {
//   e.preventDefault()
//   console.log(e.defaultPrevented)
// }

// 12, 13 - event.target event.currentTarget
// document.getElementById('nyDiv').addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.target.tagName);
//   console.log(e.currentTarget);
//   console.log(e.currentTarget.tagName);
// })

// 14, 15 - == ===
// console.log(0 == false)
// console.log(0 === false)
// console.log(0 == '0')
// console.log(0 === '0')
// console.log(0 == '')
// console.log(0 === '')

// var sep = {f: 1, n: 2}
// var sor = {f: 1, n: 2}
// console.log(sep == sor)
// console.log(sep === sor)

// var mit = sep;
// console.log(sep == mit)
// console.log(sep === mit)

// 16 - Double NOT !! 22,23 - Falsy
// console.log(Boolean(null));      
// console.log(!! undefined); 
// console.log(!! '');        
// console.log(!! 0);         
// console.log(!! NaN);       
// console.log(!! ' ');       
// console.log(!! {});        
// console.log(!! []);       
// console.log(Boolean(1));         

// 17 - محاسبه عبارت در یک خط
// var x = 1
// x = (x += 1, x *= 2, x = cal(x), x -= 1)
// function cal(a) {
//   return a*a
// }
// console.log(x);

// 18 - Scope {global, local, block}

// 19 - Hoisting
// console.log(varVar)
// console.log(letVar)
// console.log(constVar)
// var varVar = 1
// let letVar = 2
// const constVar = 3

// 20 - use strict
// "use strict";
// x = 1
// console.log(x)

// function useStrict() {
//   "use strict";
//   z = 3
//   console.log(z)
// }

// 21 - Closure
// function useStrict() {
//   var x = 1
//   function second() {
//     x++
//     return x
//   }
//   return second
// }
// var func = useStrict()
// console.log(func())

// 24 - THIS                          ???????????
// var x = '10'
// function useStrict() {
//   console.log(this.x)
// }

// 25, 38 - PROTOTYPE
// String.prototype.limit = function (l) {
//  return this.length > l ? this.substring(0, l) + '...' : this
// }
// var str ='Hi my name is sepehr roshanpour im a new developer and im so happy about it'
// console.log(str.limit(20))

// var obj = Object.create(null)
// console.log(obj.toString())

// 26 - IIFE
// (function name() {
//   console.log('bob')
// })()

// 27, 28, 29 - APPLY CALL
// var person1 = {
//   fName: 'ali',
//   lName: 'alavi',
//   name: function (age, job) {
//     console.log(`${this.fName} ${this.lName} , ${age} , ${job}`)
//   }
// }
// person1.name()

// var person2 = {
//   fName: 'jelal',
//   lName: 'karami'
// }
// person1.name.apply(person2)
// person1.name.call(person2)

// var person3 = {
//   fName: 'fati',
//   lName: 'gohari'  
// }
// person1.name.apply(person3, [22, 'artist'])
// person1.name.call(person3, 22, 'artist')

// 30 - BIND
// const car = {
//   price(tax, location){
//     let finalPrice = this.price + (this.price * tax)
//     console.log(`Price for ${this.name} in ${location} is ${finalPrice} $`) 
//  }
// }
// let audi = {
//   name: 'Audi',
//   price: 25000
// }
// let audiPrice = car.price.bind(audi)
// audiPrice(0.02, 'US');

// 31 - PROMISES | 50 - CALLBACK FUNCTION | 51 - ASYNC/AWAIT 64 -
// function callApiPromise() {
//   return fetch('url/to/api/endpoint')
//   .then(resp => resp.json())
//   .then(data => {
//     console.log('do something')
//   }).catch(error => {
//     console.log('some error')
//   })}
// callApiPromise()

// async function callApiAsyncAwait() {
//   try{
//     const resp = await fetch('url/to/api/endpoint')
//     const data = await resp.json()
//     console.log('do something')
//   } catch(e) {
//     console.log('error something')
//   }}
//   callApiAsyncAwait()



// 32 - HIGHER ORDER FUNCTIONS  FIRST ORDER FUNCTIONS
// function higherOrderFunction(params, callback) {
//   return callback(params)
// }

// 33 - FIRST CLASS ENTITY
// به عنوان آرگومان به یک تابع دیگر پاس داده شوند
// به عنوان خروجی یک تابع در نظر گرفته شوند
// ویرایش بشوند
// به یک متغییر نسبت داده شوند
// var variable = function name(params, callback) {
//   return callback(params)
// }
// variable('value', alert)

// 34 - MAP
// var input = [2, 3, 4, 10]
// var output = input.map(function (p) {
//   return p*2
// })
// console.log(output)

// function map(arr, mapCallback) {
//   if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
//     return []
//   } else {
//     let resault = []
//     for (let i = 0; i < arr.length; i++) {
//       resault.push(mapCallback(arr[i], i, arr))
//     }
//     return resault
//   }
// }

// 35 - FILTER
// var input = [2, 3, 6, 10]
// var output = input.filter(function (p) {
//   return p > 5
// })
// console.log(output)

// function filter(arr, filterCallback) {
//   if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
//     return []
//   } else {
//     let resault = []
//     for (let i = 0; i < arr.length; i++) {
//       if (filterCallback(arr[i], i, arr)) {
//         resault.push()
//       }
//     }
//     return resault
//   }
// }

// 36 - REDUCE
// var input = [2, 3, 6, 10]
// var output = input.reduce(function (total, current) {
//   return total + current
// })
// console.log(output)

// 37 - ARGUMENTS
// function name() {
//   console.log(arguments)
// }
// name(1, 4, 6)

// arrFunc = (...arguments) => {
//   console.log(arguments)
// 
// arrFunc(1, 4, 6)

// 39 - ?
// (function () {
//   var a = b = 5
// })()
// console.log(a)
// console.log(b)

// (function () {
//   var a, b 
// a = b = 5
// })()
// // console.log(a)
// console.log(b)

// 40 - ECMAScript JavaScript ActionScript

// 41 - LOCAL STORAGE

// 42 - ES6

// 43 - VAR LET CONST 
// (function name0(params) {
//   if (true) {
//     var x = 5;
//   }
// console.log(x)
// })()

// function name1(params) {
//   if (true) {
//     let x = 5;
//   }
// console.log(x)
// }
// name1()
// function names(params) {
//   if (true) {
//     const y = 5;
    
//   }
//   console.log(y)
// }
// names()
// let x = 5
// x = 10
// console.log(x)

// const y = 20
// y = 30
// console.log(y)

// 44 - ARROW FUNCTION
// function name1(params) {
//   console.log('hello')
// }
// name1()

// name2 = () => {console.log('hey')}
// name2()

// 45 - ES6 CLASS
// class Person {
//   constructor(name, age){
//   this.name = name,
//   this.age = age
// }
// }

// 46 - TEMPLATE LITERAL
// let x = 'ali'
// let y = 'barber'
// console.log(`${x} is a good ${y}`)

// 47 - OBJECT DESTRUCTION
// var sep = {
//   family: 'roshe',
//   age: 22,
//   job: 'hse'
// }
// console.log(sep.family);
// console.log(sep.age);
// console.log(sep.job);

// let {family:lName, age, job, city = 'tehran'} = sep
// console.log(age);
// console.log(lName);S
// console.log(city);

// 48 - ES6 MODULES

// 49 - SET
// var num = new Set([22, 3, 44, 13, 45, 13, 3, 22]);
// num.add(46).add(54)
// num.delete(22)
// // num.clear
// console.log(num)
// console.log(num.has(555))
// console.log(num.size)

// const numbers = [2,2,3,4,1,42,4,5,4,5,3]
// const uniqe = [...new Set(numbers)]
// console.log(uniqe)

// 52 - SPREAD REST
// function spread(x, y, z) {
//   return x + y + z
// }
// var num = [1, 3, 5, 10]
//  console.log(spread(...num))

// function rest(...num) {
//    console.log(num.reduce((total, current) => total + current))
//  }
// rest(...num)

// 53 - DEFAULT PARAMETER (ES6)
// function name(x = 0, y = 0) {
//   console.log(x + y)
// }
// name()
// name(4, 5)

// 54 - WRAPPER OBJECT

// 55 - INPLICIT COERSION / EXPLISIT COERSION
// console.log(typeof (1 + '2'))
// console.log(typeof (2 * '3'));
// console.log(typeof (false + true));

// console.log(typeof (3 + parseInt('4')));

// 56 - NaN (not a number)
// console.log(isNaN({}*null))
// console.log(isNaN(3 + 4))

// 57 - Array.isArray()
// console.log(Array.isArray([1,2,3]))
// console.log(Array.isArray(3 + 4))

// 58 - پیمایش آرایه ها
// let gallery = ['benz', 'bmw' , 'opel', 'haval']
// function getGallery() {
//   for (let i = 0; i < gallery.length; i++) {
//     console.log(gallery[i])    
//   }
// }
// getGallery(gallery)

// function forinGallery() {
//   for (const key in gallery) {
//     if (gallery.hasOwnProperty(key)) {
//       console.log(gallery[key])   
//     }
//   }
// }
// forinGallery()

// function forofGalley(params) {
//   for (const iterator of gallery) {
//     console.log(iterator) 
//   }
// }
// forofGalley()

// 59 - in / .hasOwnProperty('')
// var person = {fName: 'ali', lName: 'rahimi'}
// console.log('age' in person)
// console.log(person.hasOwnProperty('fName'))

// 60 - AJAX

// 61 - CREATE OBJECT [object literal, constructor, Object.create]
// var objectLiteral = {
//   name: 'Ali',
//   actOne(){
//     console.log('this object is created by object literals')
//   }
// }
// objectLiteral.actOne()

// function anFunc(name) {
//   this.name = name
// }
// anFunc.prototype.actTwo = function () {
//   console.log('this object is created by constructor')
// }
// const mike = new anFunc('mike')
// mike.actTwo()

// const mary = Object.create(objectLiteral)
// mary.actOne()

// 62 - FREEZE SEAL

// 65 - CASE SENSITIVE

// 66 - POP
// var per =['ali', 'karam', 'goli']
// per.pop()
// console.log(per)

// 67, 68 - MEMOIZATION

// function memoize(fn) {
//   const cache = {}
//   return function (param) {
//     if (cache[param]) {
//       console.log('cached')
//       return cache[param]
//     } else {
//       let result = fn(param)
//       cache[param] = result
//       console.log('not cached')
//       return result
//     }
//   }
// }
// const toUpper = function (str) {
//   return str.toUpperCase();
// }
// const toUpperMemoized = memoize(toUpper)
// toUpperMemoized('make it big')

// 69 type of null
// console.log(typeof null)

// 70 - constructor functions NEW
// function name(name, job ,age) {
// this.name = name
// this.age = age
// this.job = job
// }
// const sep = new name('sepehr', 'hse', 27)
// console.log(sep)