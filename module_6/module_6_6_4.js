// Задание 6.6.4
// С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.
//
// Выходные данные:
// x o x
// o x o
// x o x
// РЕШЕНИЕ 6.6.4:

const arr = [];
for (let i = 1; i <= 9; i+=1) {
    if (i % 2 === 0) {
        arr.push("O");
    } else {
        arr.push("X");
    }
}
for (let i = 0; i < arr.length; i+=3) {
    const line = arr.slice(i, i + 3).join(' ');
    console.log(line);
}