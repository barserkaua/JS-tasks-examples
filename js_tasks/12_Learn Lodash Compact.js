function compact(arr) {
    var result = [];
    for (i = 0; i<arr.length; i++){
        if (arr[i] < 0 || typeof arr[i] != 'boolean' && arr[i] != '' && typeof arr[i] != 'undefined' && arr[i] != null)
            result.push(arr[i])
    }
    return result
}

console.log(compact([0, 1, false, 2, "", 3]));