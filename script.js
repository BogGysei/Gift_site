function moveButton() {
    var button = document.querySelector(".main_btn_second");
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;
    var newX = Math.floor(Math.random() * (maxX - 400)) + 400; // Переміщення в межах від 400 до (maxX - 400)
    var newY = Math.floor(Math.random() * (maxY - 400)) + 400; // Переміщення в межах від 400 до (maxY - 400)
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
