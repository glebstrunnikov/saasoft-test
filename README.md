Приложение сделано на vite, types.ts и store.ts - прямо в корневом каталоге. Есть один основной компонент App и еще один - TableRow. В App - большая часть интерфейса, там из стора загружается массив logs, дальше мы проходим по всему массиву и рендерим отдельные строчки таблицы как TableRow, передавая данные из элементов массива как props. Вся логика ввода/вывода значений и валидация находится в TableRow; при изменени значения элемента (если пройдена валидация) он обращается к стору, в котором происходит вся работа с данными.
