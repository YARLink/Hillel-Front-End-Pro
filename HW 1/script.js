console.log("Hello, World!");
//Выводит сообщение в консоль браузера

console.group();
//Создаёт новую группу сообщений, сдвигая все следующие выводимые строки вправо на один уровень
console.log("group1");
console.count("Example");
//Выводит количество вызовов метода с определённой меткой
console.count("Example");
console.count("Example");
console.group();
console.log("group2");
console.count("Example");
console.count("Example");
console.count("Example");
console.group();
console.log("group3");
console.count("Example");
console.count("Example");
console.groupEnd();
//Выход из текущей группы
console.log("back to the group2");
console.count("Example");
console.count("Example");
console.groupEnd();
console.log("back to the group1");
console.count("Example");
console.count("Example");
console.groupEnd();

console.groupCollapsed();
//То же, что и console.group за исключением одного отличия - вывод происходит в свёрнутую группу, требующую раскрыть её вручную по кнопке
console.log("outer level");
console.count("Example2");
console.groupCollapsed();
console.log("level 1");
console.count("Example2");
console.groupCollapsed();
console.log("level 2");
console.count("Example2");
console.groupCollapsed();
console.log("level 3");
console.count("Example2");
console.groupEnd();
console.log("back to the level 2");
console.count("Example2");
console.groupEnd();
console.log("back to the level 1");
console.count("Example2");
console.groupEnd();
console.log("back to the outer level");
console.groupEnd();

console.warn("There will be trouble");
//Выводит предупреждающее сообщение в консоль браузера

console.time("First group");
//Запускает таймер с именем из переданного параметра
console.timeEnd("First group");
//Останавливает указанный таймер и записывает в лог, сколько прошло секунд от его старта

console.error("Not found");
//Выводит сообщение об ошибке







