import { Fantasy } from './Fantasy.js';

const books = [
  new Fantasy("Властелин колец", 1178, true, "Средиземье"),
  new Fantasy("Гарри Поттер", 410, true, "Хогвартс")
];

console.log("Фэнтези:");
books[0].show();
console.log("");
books[1].show();

console.log("");
console.log("Название первой книги: " + books[0].title);
console.log("Опубликована ли: " + (books[0].isPublished ? "Да" : "Нет"));

console.log("");
console.log("Меняем свойства первой книги:");
books[0].title = "Хоббит";
books[0].isPublished = false;
books[0].show();

console.log("");
console.log("Создаем копию:");
const clonedBook = Fantasy.clone(books[0]);
clonedBook.show();
console.log("Это один и тот же объект? " + (books[0] === clonedBook));

document.getElementById('output').innerHTML = `
  <p>Создано 2 книги жанра фэнтези:</p>
  <ul>
    <li>${books[0].title}, ${books[0].pages} стр., ${books[0].isPublished ? "опубликована" : "не опубликована"}, мир: ${books[0].world}</li>
    <li>${books[1].title}, ${books[1].pages} стр., ${books[1].isPublished ? "опубликована" : "не опубликована"}, мир: ${books[1].world}</li>
  </ul>
`;
