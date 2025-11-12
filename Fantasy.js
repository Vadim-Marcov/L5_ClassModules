import { Book } from './Book.js';

export class Fantasy extends Book {
  #world;

  constructor(title, pages, isPublished, world) {
    super(title, pages, isPublished);
    this.#world = world;
  }

  get world() { return this.#world; }
  set world(value) { this.#world = value; }

  show() {
    console.log("Информация о фэнтези:");
    console.log("Название: " + this.title);
    console.log("Страниц: " + this.pages);
    console.log("Опубликована: " + (this.isPublished ? "Да" : "Нет"));
    console.log("Мир: " + this.#world);
  }

  delete() {
    super.delete();
    this.#world = null;
  }

  copy() {
    return this;
  }

  static clone(instance) {
    return new Fantasy(
      instance.title,
      instance.pages,
      instance.isPublished,
      instance.world
    );
  }
}
