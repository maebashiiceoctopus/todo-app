import { Component, h, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'input-form',
  styleUrl: 'input-form.scss'


})
export class TodoForm {
  @Event() todoAdded: EventEmitter<string>;

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const input = document.getElementById('todo-input') as HTMLInputElement;
    const todo = input.value.trim();
    if (todo) {
      this.todoAdded.emit(todo);
      input.value = '';
    }
  }

  render() {
    return (
      <div class="todo-container">
        <form class="todo-form" onSubmit={this.handleSubmit}>
          <input class="todo-form__input" type="text" id="todo-input" placeholder="Agregar tarea" />
          <button class="todo-form__button" type="submit">Agregar</button>
        </form>

      </div>

    );
  }
}
