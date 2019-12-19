// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?

// Drill 01.1
// => third  [21, 1]

// Drill 01.2
// [1,2,9,21,26,28,29,45]

//Drill 01.03
// First 2 lists to be merged [1], [21]

//Drill 01.03
//on 7th merge [1,2,9,21], [2,9,28,29]



// Drill 02
// Option 2 the pivot could have been either 14 or 17 since the numbers before both are all lower and after are all higher. 

//Drill 03
// Order after the second when last digit is the pivot [3	9	12	14	13	15	17	16	19	10]
// Order after second Partition when first digit is pivot [14	10	3	9	12	13	15	16	19	17]





function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

// [39,27]
//21, 1, 26, 45,  29, 28, 2, 9,16, 49, 39, 27,    43, 34, 46, 40

  //21, 1, 26, 45,  29, 28, 2, 9,     16, 49, 39, 27,    43, 34, 46, 40
//        /                \                 /                \
// 21,1, 26,45        29, 28,   2, 9,     16, 49, 39, 27,      43, 34, 46, 40
//   /    \             /          \          /      \  
//21,1,   36,45      29, 28,   2, 9,  
///  \
//21  1



// 1,21     36,45      28,29     2,9        

  //  1,21,36,45       2,9,28,29    
     //     1,2,9,21,26,28,29, 45 


// mergeSort(21, 1, 26, 45,29, 28, 2, 9,16, 49, 39, 27,43, 34, 46, 40)
//     mergeSort(21, 1, 26, 45,29, 28, 2, 9)
//         mergeSort(21, 1, 26, 45,29, 28, 2, 9)
//            mergeSort(21, 1, 26, 45)
//              mergeSort(21, 1)
//                  mergeSort(21, 1)
//                     mergeSort(21)
//                         mergeSort()