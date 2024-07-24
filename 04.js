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