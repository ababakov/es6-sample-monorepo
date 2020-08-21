## Пример монорепозитория с локальными зависимостями

* react-sample - пример клиентского приложения на основе CRA
* es6-sample-lib - пример библиотеки на базе ES6 Babel

## Сборка и запуск

* Собрать пакет es6-sample-lib (cwd: .\es6-sample-lib)
    ```
    npm i && npm run build
    ```
* Инициализировать и запустить react-sample (cwd: .\react-sample)
    ```
    yarn install && yarn start
    ```

## Дополнительно

Рекомендации для монорепозитория Yarn - symlink dependency:

* https://classic.yarnpkg.com/en/docs/cli/add/

    ```
    cd react-sample
    yarn add link:..\es6-sample-lib
    ```

Для сборки библиотеки React ES6 используется Babel:

* https://babeljs.io/docs/en/babel-preset-react