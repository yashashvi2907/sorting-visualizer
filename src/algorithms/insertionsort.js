export const insertionSort = async (arr, setArray, delay = 50) => {
    const array = [...arr];
  
    for (let i = 1; i < array.length; i++) {
      let j = i;
  
      while (j > 0 && array[j - 1].value > array[j].value) {
        array[j].color = 'red';
        array[j - 1].color = 'red';
        setArray([...array]);
        await new Promise((res) => setTimeout(res, delay));
  
        // swap
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
  
        array[j].color = 'turquoise';
        array[j - 1].color = 'turquoise';
  
        setArray([...array]);
        j--;
      }
    }
  
    // mark all as sorted
    for (let i = 0; i < array.length; i++) {
      array[i].color = 'green';
    }
  
    setArray([...array]);
    return array;
  };
  