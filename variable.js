//const let scope local 


function scope(){
    var x='x'
    {var y='y';
    let z='z'
    console.log('x:',x)
  }
    console.log('outside the block',y)
    console.log('outside the block',z)
  }
  scope()
console.log(scope());
//x:x
//y:y
//error: Uncaught ReferenceError: z is not defined
function scope(){
    var x='x'
    {var y='y';
    let z='z'
    console.log('x:',x)
    console.log('inside the block',y)
    console.log('inside the block',z)
  }
  }
  scope()
// x:x
// y:y
// z:z
// function scope() {
//     {const pi=3.14
//     console.log('inside the block',pi)}
//     console.log('outside the block',pi)
// }

// scope()
//3.14
//error: Uncaught ReferenceError: pi is not defined

let note = 7;

console.log(note);