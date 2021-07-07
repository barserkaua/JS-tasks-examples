function timeForMilkAndCookies(date) {
    let christmas = new Date(2013, 11, 24);
    if (date.getDate() == christmas.getDate() && date.getMonth() == christmas.getMonth())
        return true
    else
        return false
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))