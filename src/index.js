import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    try {
        // 1º Capturar la entrada del usuario por consola.

        const userAnswer = await promptQuestion('Introduce tu operación: ');
        console.log(userAnswer);

        // 2on Validar l'entrada i separar les part de la mateixa en operands i operador
        const standarizeInput = userAnswer.trim();

        if (standarizeInput === '') throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no controlado: ${error.message}. Stack: ${error.stack}`
            );
    }
    // 3er Realitar l'operació
    // 4art Mostrar resultat per consola
})();
