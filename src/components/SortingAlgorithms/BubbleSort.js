import swap from './utils';
export const bubbleSortAnimations = (array, animations = []) => {
    let isSorted = false;
    let counter = 1;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - counter; i++) {
            // push first time to change color to the selected array color
            animations.push([i, i + 1]);
            // push second time to change the color back to the original color
            if (array[i] > array[i + 1]) {
                // push in the index and the new height of that index (essentially animating the swap)
                animations.push([
                    [i, array[i + 1]],
                    [i + 1, array[i]],
                ]);
                // animations.push([i + 1, array[i]]);
                animations.push([i, i + 1]);
                swap(array, i, i + 1);
                isSorted = false;
            } else {
                // animate nothing to maintain order in animations array
                animations.push([
                    [i, array[i]],
                    [i + 1, array[i + 1]],
                ]);
                animations.push([i, i + 1]);
            }
        }
        counter++;
    }
    return animations;
};
