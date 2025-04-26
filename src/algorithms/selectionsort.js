export const selectionSort = async (arr, setArray, delay = 50) => {
  const array = [...arr];
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    // highlight current minimum
    array[minIdx].color = 'blue';
    setArray([...array]);

    for (let j = i + 1; j < n; j++) {
      array[j].color = 'red'; // comparison
      setArray([...array]);
      await new Promise((res) => setTimeout(res, delay));

      if (array[j].value < array[minIdx].value) {
        array[minIdx].color = 'turquoise'; // reset old min
        minIdx = j;
        array[minIdx].color = 'blue'; // new min
      } else {
        array[j].color = 'turquoise'; // not smaller
      }

      setArray([...array]);
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }

    array[i].color = 'green'; // sorted
    setArray([...array]);
  }

  // mark last as sorted
  array[n - 1].color = 'green';
  setArray([...array]);

  return array;
};
