import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    // 1º Capturar la entrada del usuario por consola.
    const userAnswer = await promptQuestion('Introduce tu operación: ');
    console.log(userAnswer);

    // 2on Validar l'entrada i separar les part de la mateixa en operands i operador
    // 3er Realitar l'operació
    // 4art Mostrar resultat per consola
})();
