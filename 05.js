const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculator(a, b, c) {
    switch (b) {
        case "+":
            return a + c;
            break;

        case "-":
            return a - c;
            break;

        case "*":
            return a * c;
            break;

        case "/":
            return a / c;
            break;
        default:
            return "연산자가 필요합니다.";
    }
}

function addThree(scores) {
    newScores = [];
    for (let i = 0; i < scores.length; i++) {
        let newScore = calculator(scores[i], "+", 3)
        newScores.push(newScore);
    }
    return newScores
}

console.log(addThree(scores))