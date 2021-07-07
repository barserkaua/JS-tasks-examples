function canNest(arr1, arr2) {

    if (Math.max.apply(null, arr1) < Math.max.apply(null,arr2)
        && Math.min.apply(null, arr1) > Math.min.apply(null,arr2))
        return true
    else
        return false
}

console.log(canNest([1, 2, 3, 4], [0, 6]))