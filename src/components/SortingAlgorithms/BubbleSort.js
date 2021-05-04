export const bubbleSortAnimations = (array, animations = []) => {
    let isSorted = false;
    let counter = 1;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - counter; i++) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push([i, array[i + 1]]);
                animations.push([i + 1, array[i]]);
                swap(array, i, i + 1);
                isSorted = false;
            } else {
                animations.push([i, array[i]]);
                animations.push([i + 1, array[i + 1]]);
            }
        }
        counter++;
    }
    return animations;
};

const swap = (array, i, j) => {
    let tempNum = array[i];
    array[i] = array[j];
    array[j] = tempNum;
};
