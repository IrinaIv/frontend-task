/* При оптимальном распределении нужно 3 итерации (3 минуты).
Я выбрала ООП подход, потому что он наиболее приближен к реальному миру задачи.
Алгоритм:
1. Итерация - на двух сковородках одновременно с первой (верхней) стороны жарятся блин №1 и блин №2
2. Итерация - переворачивается на вторую (нижнюю) сторону блин № 1, а второй блин убирается, вместо него кладется блин № 3 верхней стороной
3. Итерация - убирается блин № 1, вместо него кладется блин № 2 нижней стороной, блин № 3 переварачивается нижней стороной
Блины готовы. Приятного аппетита! */
function Pancake() {
    var isFriedUpside = false;
    var isFriedDownside = false;
    this.fryUpside = function() {
        if (isFriedUpside) {
            throw new Error('Эта сторона уже обжарена'); // Чтобы не испортить блин
        }
        isFriedUpside = true;
    };
    this.fryDownside = function() {
        if (isFriedDownside) {
            throw new Error('Эта сторона уже обжарена'); // И с этой стороны тоже
        }
        isFriedDownside = true;
    };
    this.getIsFriedUpside = function() {
        return isFriedUpside;
    };
    this.getIsFriedDownside = function() {
        return isFriedDownside;
    };
}

function Pan() {
    this.frySide = function(pancake, isUpside){
        if (isUpside) {
            pancake.fryUpside();
        } else {
            pancake.fryDownside();
        }
    };
}

var pancakeOne = new Pancake();
var pancakeTwo = new Pancake();
var pancakeThree = new Pancake();
var panOne = new Pan();
var panTwo = new Pan();

// Итерация 1
panOne.frySide(pancakeOne, true);
panTwo.frySide(pancakeTwo, true);
// Итерация 2
panOne.frySide(pancakeOne, false);
panTwo.frySide(pancakeThree, true);
// Итерация 3
panOne.frySide(pancakeTwo, false);
panTwo.frySide(pancakeThree, false);

// Проверяем готовность
console.log(pancakeOne.getIsFriedUpside());
console.log(pancakeOne.getIsFriedDownside());
console.log(pancakeTwo.getIsFriedUpside());
console.log(pancakeTwo.getIsFriedDownside());
console.log(pancakeThree.getIsFriedUpside());
console.log(pancakeThree.getIsFriedDownside());