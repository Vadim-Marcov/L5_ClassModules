export class Book {
  #title;
  #pages;
  #isPublished;

  constructor(title, pages, isPublished) {
    this.#title = title;
    this.#pages = pages;
    this.#isPublished = isPublished;
  }

  get title() { return this.#title; }
  set title(value) { this.#title = value; }

  get pages() { return this.#pages; }
  set pages(value) { this.#pages = value; }

  get isPublished() { return this.#isPublished; }
  set isPublished(value) { this.#isPublished = value; }

  show() {
    console.log("Информация о книге:");
    console.log("Название: " + this.#title);
    console.log("Страниц: " + this.#pages);
    console.log("Опубликована: " + (this.#isPublished ? "Да" : "Нет"));
  }

  delete() {
    this.#title = null;
    this.#pages = null;
    this.#isPublished = null;
  }

  copy() {
    return this;
  }

  static clone(instance) {
    return new Book(instance.title, instance.pages, instance.isPublished);
  }

  #publish() {
    this.#isPublished = true;
  }
}
