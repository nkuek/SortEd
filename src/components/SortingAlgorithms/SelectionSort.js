import swap from './utils';
export const selectionSortAnimations = (array) => {
    const animations = [];
    let sortedIdx = 0;
    while (sortedIdx < array.length - 1) {
        let smallestIdx = sortedIdx;
        for (let i = sortedIdx + 1; i < array.length; i++) {
            // changes array bar to selected array color
            animations.push([sortedIdx, i]);

            // no changes in bar height
            animations.push([
                [sortedIdx, array[sortedIdx]],
                [sortedIdx, array[sortedIdx]],
            ]);

            // changes array bar back to original color
            animations.push([sortedIdx, i]);

            if (array[i] < array[smallestIdx]) {
                smallestIdx = i;
            }
        }
        // changes array bar to selected array color
        animations.push([sortedIdx, smallestIdx]);

        // swap bar heights
        animations.push([
            [sortedIdx, array[smallestIdx]],
            [smallestIdx, array[sortedIdx]],
        ]);

        // changes array bar back to original color
        animations.push([sortedIdx, smallestIdx]);

        swap(array, smallestIdx, sortedIdx);
        sortedIdx++;
    }
    return animations;
};
