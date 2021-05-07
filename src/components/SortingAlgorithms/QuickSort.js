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
        animations.push([left, right]);

        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            animations.push([
                [left, array[right]],
                [right, array[left]],
            ]);
            animations.push([left, right]);

            swap(array, left, right);
        } else {
            animations.push([
                [left, array[left]],
                [right, array[right]],
            ]);
            animations.push([left, right]);
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
        if (array[right] >= array[pivot]) right--;
    }

    animations.push([pivot, right]);
    animations.push([
        [right, array[pivot]],
        [pivot, array[right]],
    ]);
    animations.push([pivot, right]);

    swap(array, pivot, right);
    quickSortHelper(array, start, right - 1, animations);
    quickSortHelper(array, right + 1, end, animations);
};
