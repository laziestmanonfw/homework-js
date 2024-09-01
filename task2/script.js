const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})
// клик на console.log выводит alert с "Служит для вывода информации в консоль"


const alert1= document.querySelector('#alert');  // const=alert1 чтобы не рушилась функция alert

alert1.addEventListener('click', () => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
})
// клик на alert выводит alert с "Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK." 


const prompt1= document.querySelector('#prompt');  // const=prompt1 чтобы не рушилась функция prompt

prompt1.addEventListener('click', () => {
    alert('«собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста');
})
// клик на prompt выводит alert с "«собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста" 


console.log('Пример использования команды console.log');


const alert11 = document.querySelector('#alert1');

alert1.addEventListener('click', () => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
})
// клик на Пример использования команды alert выводит alert с "Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK."

const prompt2 = document.querySelector('#prompt1');

prompt2.addEventListener('click', () => {
    prompt('«собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста');
})
// клик на prompt выводит alert с "«собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста" 