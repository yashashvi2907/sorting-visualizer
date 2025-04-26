export const bubbleSort = async (arr, setArray, delay = 50) => {
  const array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Highlight bars being compared
      array[j].color = 'red';
      array[j + 1].color = 'red';
      setArray([...array]);
      await new Promise((r) => setTimeout(r, delay));

      if (array[j].value > array[j + 1].value) {
        // Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        setArray([...array]);
        await new Promise((r) => setTimeout(r, delay));
      }

      // Revert back to default color
      array[j].color = 'turquoise';
      array[j + 1].color = 'turquoise';
    }

    // Set the sorted part to green
    array[array.length - 1 - i].color = 'green';
  }

  // Final bar sorted
  array[0].color = 'green';
  setArray([...array]);
};
