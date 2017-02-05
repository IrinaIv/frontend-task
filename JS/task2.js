function checkSyntax(string) {
    var openingBrackets = ['{', '[', '(', '<'];
    var closingBrackets = ['}', ']', ')', '>'];
    var bracketsStack = [];
    var brackets = {'}': '{', ']': '[', ')': '(', '>': '<'};
    for (var i = 0; i < string.length; i++) {
        if (openingBrackets.includes(string[i])) {
            bracketsStack.push(string[i]);
        } else if (closingBrackets.includes(string[i]) && bracketsStack.pop() != brackets[string[i]]) {
            return 1;
        }
    }
    return bracketsStack.pop() === undefined ?  0 : 1;
}

console.log(checkSyntax("---(++++)----") == 0);
console.log(checkSyntax("") == 0);
console.log(checkSyntax("before ( middle []) after ") == 0);
console.log(checkSyntax(") (") == 1);
console.log(checkSyntax("} {") == 1);
console.log(checkSyntax("<(   >)") == 1);
console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0);
console.log(checkSyntax("   (      [)") == 1);