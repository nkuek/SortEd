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
        animations.push([left, right]);
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            animations.push([left, array[right]]);
            animations.push([right, array[left]]);
            swap(array, left, right);
        } else {
            animations.push([left, array[left]]);
            animations.push([right, array[right]]);
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
        if (array[right] >= array[pivot]) right--;
    }
    animations.push([pivot, right]);
    animations.push([pivot, right]);
    animations.push([right, array[pivot]]);
    animations.push([pivot, array[right]]);
    swap(array, pivot, right);
    quickSortHelper(array, start, right - 1, animations);
    quickSortHelper(array, right + 1, end, animations);
};
