// Знайдіть кнопку за її id
var purrButton = document.getElementById("purrButton");

// Знайдіть аудіоелемент з муркотінням за його id
var purringAudio = document.getElementById("purringAudio");

// Додайте обробник подій для натискання на кнопку
purrButton.addEventListener("click", function() {
    // Відтворіть муркотіння
    purringAudio.play();
});

