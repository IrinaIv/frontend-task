/* Два варианта решения задания: первый менее читаемый, но с одним проходом по строке,
второй более читаемый, но уже два прохода по строке */
function maxIndex(str, a, b) {
    for (var i = str.length - 1; i > 0; i--) {
        if ((str[i] == a) || (str[i] == b)) {
            return i;
        }
    }
    return -1;
}

function maxLastIndex(str, a, b) {
    return Math.max(str.lastIndexOf(a), str.lastIndexOf(b));
}