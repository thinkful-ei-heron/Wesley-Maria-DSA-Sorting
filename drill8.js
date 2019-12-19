let array = ['coco', 'penut', 'sauce', 'pineapple', 'dog',
         'bird', 'labyrith', 'Extraterrestrial', 'zebra' , 
         'Xylophone'];


         function swap(array, i, j) {
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        
        function bubbleSort(array) {
            let swaps = 0;
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i].toLowerCase()[0] > array[i + 1].toLowerCase()[0]) {
                    swap(array, i, i + 1);
                    swaps++;
                }
            }
        
            if (swaps > 0) {
                return bubbleSort(array);
            }
            return array;
        }




      function main( ) {

        const sort = bubbleSort(array); 
        console.log(sort);
        }
        
        main(); 