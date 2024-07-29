const params = {
    sizeRatio: 10
};

const keepWithinCircle = false;

const result = keepWithinCircle ? params.sizeRatio : params.sizeRatio / Math.SQRT2;
console.log(result);  // Output: approximately 7.07
