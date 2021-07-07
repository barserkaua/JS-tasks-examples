function countNumberOfOccurrences(obj) {
    var result = [];
    var only_values = Object.values(obj)
    for(var i = 0; i < only_values.length; ++i) {
        if(!result[only_values[i]])
            result[only_values[i]] = 0;
        ++result[only_values[i]];
    }
    return result
}



console.log(countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
}))