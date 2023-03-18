const salaryСleaner = 40000;
const salaryTeacher = 22000;
const cleanerTeacher = salaryСleaner + salaryTeacher;
console.log(
  `Вечерний уборщик, имея голос и педагогическое образование зарабатывает ${cleanerTeacher} рублей`
);

const stringCity = "Владивосток";
const Time = 2000;
console.log(`${stringCity} ${Time}`);

const chattingTime = 128;
const likeTime = 254;
const vkReadArticles = 137;
const watchYoutube = 201;
const mermaidTogether = chattingTime + likeTime + vkReadArticles + watchYoutube;
const minutesInHour = 60;
const timeInHours = mermaidTogether / minutesInHour;
console.log(`Ответ:Русалка страдала фигней целых, ${timeInHours} часов`);

const result = 5 ** 2;
console.log(`Если возвести число 2 в 5 степень, то получиться ${result}`);

let message =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(message);

const greetings = "Привет";
const catName = "Кот";
console.log(`${greetings}, ${catName}`);

const time = 34;
console.log("Старт поездки. Осталось минут:", time);
console.log("Немного сторис в соцсетях. Осталось минут:", time - 15);
console.log("Вы приехали. Добро пожаловать в Москву:", time - 15 - 10 - 9);

const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(
  `${fahrenheit} градуса по Фаренгейту - это, ${celsius}градууса по Цельсию`
);
