# goit-js-hw-04

                          js 4 homework
                 Задача 1. Пакування товарів Task 1. Packaging of goods

Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи
помістяться всі товари в контейнер при пакуванні.Функція оголошує два параметри:
products — об’єкт, у якому ключі містять назви товарів, а їхні значення —
кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }. containerSize —
число, максимальна кількість одиниць товарів, яку в себе може вмістити
контейнер. Функція має повернути результат перевірки, чи помістяться всі товари
в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і
повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

Write a function isEnoughCapacity(products, containerSize) that calculates
whether all the products will fit in the container when packed. The function
declares two parameters: products — an object in which the keys contain the
names of the products, and their values ​​— the number of these products. For
example, { apples: 2, grapes: 4 }. containerSize — a number, the maximum number
of units of products that the container can hold. The function should return the
result of checking whether all the products will fit in the container. That is,
count the total number of products in the products object and return true if it
is less than or equal to containerSize, and false if not.\_/

                 Задача 2. Розрахунок калорій Task 2. Calculating calories

Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення
кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один
параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість
калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав
після оголошення своєї функції для перевірки коректності її роботи. У консоль
будуть виведені результати її викликів.

Write a function calcAverageCalories(days), which returns the average daily
value of the number of calories that the athlete consumed during the week. The
function expects one parameter: days — an array of objects. Each object
describes the day of the week and the number of calories calories consumed by
the athlete on that day. Take the code below and insert it after the declaration
of your function to check that it works correctly. The results of its calls will
be displayed in the console

                 Задача 3. Профіль гравця Task 3. Player profile

Об’єкт profile описує профіль користувача на ігровій платформі. У його
властивостях зберігається ім’я профілю username та кількість активних годин
playTime, проведених у грі. const profile = { username: "Jacob", playTime: 300,
}; Доповни об’єкт profile методами для роботи з його властивостями. Метод
changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та
змінювати значення властивості username на нове. Нічого не повертає. Метод
updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours
та збільшити на нього значення властивості playTime. Нічого не повертає. Метод
getInfo() має повертати рядок формату <Username> has <amount> active hours!, де
<Username> — це ім’я профілю, а <amount> — кількість ігрових годин.

The profile object describes a user's profile on the gaming platform. Its
properties store the profile name username and the number of active hours
playTime spent in the game.\_ /const profile = { username: 'Jacob', playTime:
300,} /\_Add methods to the profile object to work with its properties. The
changeUsername(newName) method should accept a string (new name) in the newName
parameter and change the username property value to the new one. Returns
nothing. The updatePlayTime(hours) method should accept a number (number of
hours) in the hours parameter and increase the playTime property value by it.
Returns nothing. The getInfo() method should return a string of the format
<Username> has <amount> active hours!, where <Username> is the profile name, and
<amount> is the number of play hours. Take the code below and insert it after
the declaration of your function to check that it works correctly. The results
of its work will be displayed in the console.

https://www.freecodecamp.org/learn/full-stack-developer/
