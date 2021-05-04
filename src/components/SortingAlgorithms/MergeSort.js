export const mergeSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const copyArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, copyArray, animations);
    return animations;
};
const mergeSortHelper = (mainArray, start, end, copyArr, animations) => {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(copyArr, start, middle, mainArray, animations);
    mergeSortHelper(copyArr, middle + 1, end, mainArray, animations);
    mergeSort(mainArray, start, middle, end, copyArr, animations);
};

const mergeSort = (mainArray, start, middle, end, copyArr, animations) => {
    let k = start;
    let i = start;
    let j = middle + 1;

    while (i <= middle && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);

        if (copyArr[i] <= copyArr[j]) {
            animations.push([k, copyArr[i]]);
            mainArray[k] = copyArr[i];
            i++;
        } else {
            animations.push([k, copyArr[j]]);
            mainArray[k] = copyArr[j];
            j++;
        }
        k++;
    }

    while (i <= middle) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, copyArr[i]]);
        mainArray[k] = copyArr[i];
        k++;
        i++;
    }

    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, copyArr[j]]);
        mainArray[k] = copyArr[j];
        k++;
        j++;
    }
};
