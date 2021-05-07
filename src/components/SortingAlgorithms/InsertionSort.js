import swap from './utils';
export const insertionSortAnimations = (array) => {
    let animations = [];

    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0) {
            // first push to change color to selected array color
            animations.push([j, j - 1]);
            // second push to change color back to the original color
            if (array[j] < array[j - 1]) {
                // animating the swap
                animations.push([
                    [j, array[j - 1]],
                    [j - 1, array[j]],
                ]);
                animations.push([j, j - 1]);
                swap(array, j, j - 1);
            } else {
                // animate nothing to maintain the correct order in animations array
                animations.push([
                    [j, array[j]],
                    [j, array[j]],
                ]);
                animations.push([j, j - 1]);
            }
            j--;
        }
    }
    return animations;
};
