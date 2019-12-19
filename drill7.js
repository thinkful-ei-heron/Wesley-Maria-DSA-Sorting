let array = [ 1,  2,  3,  5,  6,  6,  6,  7,  7,  9,  9, 11,
            13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23,
            24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30,
            31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42,
            43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53,
            53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68,
            69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80,
            81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91,
            93, 97, 98, 98] 

//
// using the Fisher-Yates Algorithm : shuffles them in place . iterates and s
// swaps one element with another random element. 

function cupidShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }





  function main( ) {

    const sort = cupidShuffle(array); 
    console.log(sort);
    }
    
    main(); 