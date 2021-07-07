function countTrue(arr) {
    var count = 0;
    for (i = 0; i<arr.length; i++){
        if (arr[i] == true)
            count++
        else
            continue
    }
    return count
}

console.log(countTrue([true, false, false, true, false]))