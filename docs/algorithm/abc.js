
a_node = document.getElementById("a")


b_node = document.getElementById("b")


c_node = document.getElementById("c")
let resultNode = document.getElementById("result");
let verifyButton = document.getElementById("verify");

d_node = document.getElementById("d")



 function checkFit() {
    let a = parseFloat(a_node.value);
    let b = parseFloat(b_node.value);
    let c = parseFloat(c_node.value);
    let d = parseFloat(d_node.value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        resultNode.value = "Ошибка: введите числа";
        return;
    }
    if ((a <= c && b <= d) || (a <= d && b <= c)) {
        resultNode.value = "✅ Поместится";
        resultNode.style.color = "green";
        console.log("✅ Прямоугольник поместится");
        return true;
    } else {
        resultNode.value = "❌ Не поместится";
        resultNode.style.color = "red";
        console.log("❌ Прямоугольник НЕ поместится");
        return false;
    }
}

verifyButton.addEventListener("click", checkFit);


document.getElementById("send").addEventListener("click", function () {
    if (checkFit()) {
        // Программно отправляем форму
        document.getElementById("UserEnter").submit();
    } else {
        alert("Нельзя отправить: прямоугольник не помещается!");
    }
});
