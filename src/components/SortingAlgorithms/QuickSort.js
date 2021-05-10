import swap from './utils';
export const quickSortAnimations = (array) => {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

const quickSortHelper = (array, start, end, animations) => {
    if (start >= end) return;

    const pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
        // push first time to change color to the selected array color
        animations.push([left, right]);

        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            // push in the index and the new height of that index (essentially animating the swap)
            animations.push([
                [left, array[right]],
                [right, array[left]],
            ]);
            // second push will change the color back to its original color
            animations.push([left, right]);

            swap(array, left, right);
        } else {
            // push in the index and the new height of that index (essentially animating the swap)
            animations.push([
                [left, array[left]],
                [right, array[right]],
            ]);
            // second push will change the color back to its original color
            animations.push([left, right]);
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
        if (array[right] >= array[pivot]) right--;
    }

    // highlight the pivot index and the index of the array to be swapped
    animations.push([pivot, right]);
    // swap animation [index, new height of index]
    animations.push([
        [right, array[pivot]],
        [pivot, array[right]],
    ]);
    // change color back to original color
    animations.push([pivot, right]);

    swap(array, pivot, right);
    quickSortHelper(array, start, right - 1, animations);
    quickSortHelper(array, right + 1, end, animations);
};
