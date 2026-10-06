
a_node = document.getElementById("a")


b_node = document.getElementById("a")


c_node = document.getElementById("a")


d_node = document.getElementById("a")


if ((a_node <= c_node && b_node <= d_node) || (a_node <= d_node && b_node <= c_node)) {
        console.log("✅ Прямоугольник поместится");
    } else {
        console.log("❌ Прямоугольник НЕ поместится");
    }
