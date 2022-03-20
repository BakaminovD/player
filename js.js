let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
// Массив с названиями песен
let playlist = [
    '1.mp3',
    '2.mp3',
    '3.mp3',
    '4.mp3',
    '5.mp3',
    '6.mp3',
    '7.mp3',
    '8.mp3',
    '9.mp3',
    '10.mp3'
];

let flag; // служебная переменная для проверки паузы

let treck; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
    flag = 0; // Присваиваем переменной ноль
}

// функции для переключения песен
function switchTreck (numTreck) {
    // Меняем значение атрибута src
    audio.src = './audio/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    audio.play();
    // МОЙ КОД !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var elem = document.getElementById('mytrack');
    if (playlist[numTreck] == "1.mp3") {
        elem.innerHTML = "Звучит: Пролог";
    }
    if (playlist[numTreck] == "2.mp3") {
        elem.innerHTML = "Звучит: Ежели бы мне бы...";
    }
    if (playlist[numTreck] == "3.mp3") {
        elem.innerHTML = "Звучит: Девяткино";
    }
    if (playlist[numTreck] == "4.mp3") {
        elem.innerHTML = "Звучит: Полрайона";
    }
    if (playlist[numTreck] == "5.mp3") {
        elem.innerHTML = "Звучит: Пастораль";
    }
    if (playlist[numTreck] == "6.mp3") {
        elem.innerHTML = "Звучит: Пачка";
    }
    if (playlist[numTreck] == "7.mp3") {
        elem.innerHTML = "Звучит: Проститутка";
    }
    if (playlist[numTreck] == "8.mp3") {
        elem.innerHTML = "Звучит: Содом";
    }
    if (playlist[numTreck] == "9.mp3") {
        elem.innerHTML = "Звучит: 1000 лет";
    }
    if (playlist[numTreck] == "10.mp3") {
        elem.innerHTML = "Звучит: Эпилог";
    }
            
}




    // обработку событий этих кнопок, для работы с плеером и музыкой
    btnPlay.addEventListener("click", function() {
        audio.play(); // Запуск песни
        // МОЙ КОД !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var elem = document.getElementById('mytrack');
        if (treck == 0) {
            elem.innerHTML = "Звучит: Пролог";
        }
        if (treck == 1) {
            elem.innerHTML = "Звучит: Ежели бы мне бы...";
        }
        if (treck == 2) {
            elem.innerHTML = "Звучит: Девяткино";
        }
        if (treck == 3) {
            elem.innerHTML = "Звучит: Полрайона";
        }
        if (treck == 4) {
            elem.innerHTML = "Звучит: Пастораль";
        }
        if (treck == 5) {
            elem.innerHTML = "Звучит: Пачка";
        }
        if (treck == 6) {
            elem.innerHTML = "Звучит: Проститутка";
        }
        if (treck == 7) {
            elem.innerHTML = "Звучит: Содом";
        }
        if (treck == 8) {
            elem.innerHTML = "Звучит: 1000 лет";
        }
        if (treck == 9) {
            elem.innerHTML = "Звучит: Эпилог";
        }
        // Запуск интервала 
        audioPlay = setInterval(function() {
            // Получаем значение на какой секунде песня
            let audioTime = Math.round(audio.currentTime);
            // Получаем всё время песни
            let audioLength = Math.round(audio.duration)
            // Назначаем ширину элементу time
            time.style.width = (audioTime * 100) / audioLength + '%';
            // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная treck меньше девяти
            if (audioTime == audioLength && treck < 9) {
                treck++; // То Увеличиваем переменную 
                switchTreck(treck); // Меняем трек
            // Иначе проверяем тоже самое, но переменная treck больше или равна девяти
            } else if (audioTime == audioLength && treck >= 9) {
                treck = 0; // То присваиваем treck ноль
                switchTreck(treck); //Меняем трек
            }
        }, 10)
    });



    // обработки кнопки пауза
    btnPause.addEventListener("click", function() {
        audio.pause(); // Останавливает песню
        clearInterval(audioPlay) // Останавливает интервал
        flag = 1; // Запоминаем, что нажата пауза
    });



    // кнопки переключений песен, вот как переключаем на предыдущую
    btnPrev.addEventListener("click", function() {
        // Проверяем что переменная treck больше нуля
        if (treck > 0) {
            treck--; // Если верно, то уменьшаем переменную на один
            switchTreck(treck); // Меняем песню.
        } else { // Иначе
            treck = 9; // Присваиваем девять
            switchTreck(treck); // Меняем песню
        }
       if (flag == 1) {
            time.style.width = 0
           flag = 0; // обнуляем флаг
           // Запуск интервала 
            audioPlay = setInterval(function() {
            // Получаем значение на какой секунде песня
            let audioTime = Math.round(audio.currentTime);
            // Получаем всё время песни
            let audioLength = Math.round(audio.duration)
            // Назначаем ширину элементу time
            time.style.width = (audioTime * 100) / audioLength + '%';
            // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная treck меньше девяти
            if (audioTime == audioLength && treck < 9) {
                treck++; // То Увеличиваем переменную 
                switchTreck(treck); // Меняем трек
            // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
            } else if (audioTime == audioLength && treck >= 9) {
                treck = 0; // То присваиваем treck ноль
                switchTreck(treck); //Меняем трек
            }
        }, 10)
       }
    });



    // переключать на следующую песню
    btnNext.addEventListener("click", function() {
        // Проверяем что переменная treck больше трёх
        if (treck < 9) { // Если да, то
            treck++; // Увеличиваем её на один
            switchTreck(treck); // Меняем песню 
        } else { // Иначе
            treck = 0; // Присваиваем ей ноль
            switchTreck(treck); // Меняем песню
        }
        if (flag == 1) {
            time.style.width = 0
           flag = 0; // обнуляем флаг
           // Запуск интервала 
            audioPlay = setInterval(function() {
            // Получаем значение на какой секунде песня
            let audioTime = Math.round(audio.currentTime);
            // Получаем всё время песни
            let audioLength = Math.round(audio.duration)
            // Назначаем ширину элементу time
            time.style.width = (audioTime * 100) / audioLength + '%';
            // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная treck меньше девяти
            if (audioTime == audioLength && treck < 9) {
                treck++; // То Увеличиваем переменную 
                switchTreck(treck); // Меняем трек
            // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
            } else if (audioTime == audioLength && treck >= 9) {
                treck = 0; // То присваиваем treck ноль
                switchTreck(treck); //Меняем трек
            }
        }, 10)
       }
    });
