export const insertionSortAnimations = (array) => {
    let animations = [];
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0) {
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            if (array[j] < array[j - 1]) {
                animations.push([j, array[j - 1]]);
                animations.push([j - 1, array[j]]);
                swap(array, j, j - 1);
            } else {
                animations.push([j, array[j]]);
                animations.push([j, array[j]]);
            }
            j--;
        }
    }
    return animations;
};

const swap = (array, i, j) => {
    const tempNum = array[i];
    array[i] = array[j];
    array[j] = tempNum;
};
