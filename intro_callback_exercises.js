// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.

//     let d = new Date();

//     this.seconds = d.getSeconds();
//     this.minutes = d.getMinutes();
//     this.hours = d.getHours();
//     this.printTime();
        
//     setInterval(this._tick.bind(this), 1000);
// }


//   printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);    
//   }
  

//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//     this.seconds = this.seconds + 1;
    
//     if (this.seconds === 60) {
//         this.seconds = 0;
//         this.minutes += 1;
//     } else if (this.minutes === 60) {
//         this.minutes = 0;
//         this.hours += 1;
//     } else if (this.hours === 24) {
//         this.hours = 0;
//     }

//     this.printTime();
//   }
// }

// // const clock = new Clock();

// // const { read } = require('fs');
// // const readline = require('readline');

// // const reader = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0 ) {
//         console.log(completionCallback(sum));
//         reader.close()
//     } else {


//     reader.question('Enter a number:', function(num1) {
//         const n1 = parseInt(num1);
//         sum += n1
//         console.log(sum)
//         addNumbers(sum, numsLeft -1, completionCallback);
//     }) 
//     }   

    
// }

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Write this first.
// function askIfGreaterThan(el1, el2, callback) {
//   // Prompt user to tell us whether el1 > el2; pass true back to the
//   // callback if true; else false.
//     reader.question(`Is ${el1} greater than ${el2}?`, function(res) {
//        return (res === 'yes') ? callback(true) : callback(false);  
//     })
// }

// // Once you're done testing askIfGreaterThan with dummy arguments, write this.
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   // Do an "async loop":
//   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//   //    know whether any swap was made.
//   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//   //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//   //    continue the inner loop. You'll want to increment i for the
//   //    next call, and possibly switch madeAnySwaps if you did swap.
//     if (i === arr.length - 1) {
//         outerBubbleSortLoop(madeAnySwaps);
//     } else {
//         let num = arr[i];
//         let nextNum = arr[i+1];
//         askIfGreaterThan(num, nextNum, function(isGreaterThan) {
//             if (isGreaterThan === true) {
//                 madeAnySwaps = true;
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//             }
//             innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop)
//         });
//    }
// }

// // console.log(innerBubbleSortLoop([3,11,69,4,20],0,false))
// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//     if (madeAnySwaps === true) {
//         innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//     } else {
//         sortCompletionCallback(arr);
//     }
//   }
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
//   outerBubbleSortLoop(true);
// }

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });



class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

//!
Function.prototype.myBind = function(context) {
  //  let that = this;
    //return function() {
        //that.apply(context);

//}
    return () => this.apply(context)
}
    

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

