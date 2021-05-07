import swap from './utils';
export const selectionSortAnimations = (array) => {
    const animations = [];
    let sortedIdx = 0;
    while (sortedIdx < array.length - 1) {
        let smallestIdx = sortedIdx;
        for (let i = sortedIdx + 1; i < array.length; i++) {
            animations.push([sortedIdx, i]);
            animations.push([
                [sortedIdx, array[sortedIdx]],
                [sortedIdx, array[sortedIdx]],
            ]);
            animations.push([sortedIdx, i]);
            if (array[i] < array[smallestIdx]) {
                smallestIdx = i;
            }
        }
        animations.push([sortedIdx, smallestIdx]);
        animations.push([
            [sortedIdx, array[smallestIdx]],
            [smallestIdx, array[sortedIdx]],
        ]);
        animations.push([sortedIdx, smallestIdx]);
        swap(array, smallestIdx, sortedIdx);
        sortedIdx++;
    }
    return animations;
};
