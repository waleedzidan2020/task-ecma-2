// let newobj = {

//     Name: "mohamed",
//     adress: "aswan",
//     number:12121


// }


// let handler = {

//     get: function (target, prop) {
//         if (!(prop in target)) {

//             throw 'not found'
//         }



//         return target[prop]

//     },

//     set: function (target, prop, value) {
//         if (!(prop in target)) {

//             throw " not found"
//         }
//         if (prop == "Name") {


//             if (value.length <= 7) {
//                 target[prop] = value

//             } else {
//                 throw "more than 7"
//             }
//         }
//         if (prop == "adress") {


//             if (typeof (value) == "string") {
//                 target[prop] = String(value)
//             } else {
//                 throw "not string"
//             }
//         }

//         if(prop=="number"){

//             if(value>=25||value<=60){
//                 target[prop] = value

//             }
//         }




//     }
// }





// let proxyobj = new Proxy(newobj, handler)


// console.log(proxyobj.adress)



/////////////////////// 2



// class shape{


//     constructor (){

//         if(this==shape){

//             throw "this is abstract class"
//         }
//     }

//      area() {
//          return 0 ;

//     }
//     parameter (){

//         return 0;
//     }


// tostring(){
//     return ""
// }


// }


// class rectangle extends shape{

//     hight ;
//     width ;
//     static count = 0;
//     constructor(width , hight){
//         super()
//         this.width =width
//         this.hight=hight
//         rectangle.cobj();

//     }


//     static cobj(){

//         let c  = rectangle.count++
//         return  c;

//     }

//     area() {

//         let sum=0;
//        sum= this.hight*this.width
//        return sum;

//    }
//    parameter() {

//     let sum=0;
//    sum= 2*(this.hight+this.width)
//    return sum;

// }

// tostring(){
//     return `area= ${this.area()} width=${this.width} hight=${this.hight} `
// }




// }


// let e = new rectangle(10,10);
// let e2 = new rectangle(20,50)
// let e3 =new rectangle(30,30)

// console.log(rectangle.cobj())
// console.log(e.tostring())






/////////////////////////////3

function *gen(number) {
    let a = 0
    let b = 1
    let c = 0
    yield a
    yield b
    for (let i = 2; i <= number; i++) {
       
        c = a + b
        yield c;
        a = b
        b = c
        if(c>=number)
        {
            return 0 
        }
        

    }

}

function *gen2(number) {
    let a = 0
    let b = 1
    let c = 0
    yield a
    yield b
    for (let i = 2; i <= number; i++) {
       
        c = a + b
        yield c;
        a = b
        b = c
        

    }

}


let x = gen(4);
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())








////////////////////////4

// let obj = {

//     Name: "waleed",
//     adress: "aswan",
//     age: 23
// }


// function itera() {

//     let kays = Object.keys(this)
//     var i = 0
//     let it = {
//         next: () => {

//             if (i < kays.length) {
//                 i++
//                 return { value: this[kays[i]], done: false }

//             } else {
//                 return { value: undefined, done: false }
//             }
//         }
//     }
//     return it;
// }




// obj[Symbol.iterator] = itera



















