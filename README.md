# 2048
## Посмотреть приложение можно по ссылке:
* [2048](http://104.197.112.220:8080)

## Что представляет собой приложение?
Популярная игра 2048.
В приложение есть возможность настройки размера игрового поля.
В любой момент можно начать игру заново.
Есть возможность отмены последнего хода.
Размер поля адаптируется под разрешение экрана.
Состояние приложения сохраняется про помощи localStorage.

## Техническая часть приложения
Приложение написано в функциональном стиле.
Весь код типизирован.
При помощи библиотеки Purify-ts добавлены монады Maybe и Either и статические типы в рантайм(для сохранения и взятия значения из localStorage).

## Как запустить приложение?

### `npm start`
Запустить проект в development mode.<br>
Открыть в браузере страницу по адресу [http://localhost:3000](http://localhost:3000).

### `npm test`
Запустить тесты.

### `npm run build`
Собирает приложения в production mode в папке с названием build. Сборка будет оптимезирована.

## Инструменты используемые в написании приложения:
* Typescript
* React
* Redux
* Purify-ts
* Material-ui

## Автор
* **Lev Palkin** - [HegelPro](https://github.com/HegelPro)
