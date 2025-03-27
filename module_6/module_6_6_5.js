// Задание 6.6.5
// Есть объект obj. В одном из ключей объекта — массив. Добавьте в новый массив arrValues значения всех ключей объекта.
// Если значение — массив, добавьте каждый элемент в массив arrValues.
// Выведите получившийся массив в консоль.
//
// Входные данные:
//
// const obj = {
//     some: 'some',
//     dom: 'text',
//     arr: [1, 2, 3, 4, 5],
//     tom: 'there'
// };
// // РЕШЕНИЕ 6.6.5:

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];
const values = Object.values(obj);
for (const value of values) {
    if (Array.isArray(value)) {
        for (const item of value) {
            arrValues.push(item);
        }
    } else {
        arrValues.push(value);
    }
}
console.log(arrValues);