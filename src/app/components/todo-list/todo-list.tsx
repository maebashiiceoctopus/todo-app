import { Component, h, State } from '@stencil/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss',
})
export class TodoList {
  @State() todos: Todo[] = [];
  @State() counter: number = 0;
  @State() completedCounter: number = 0;

  componentWillLoad() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
      this.updateTodos();
    }
  }

  updateTodos() {
    this.counter = this.todos.filter(todo => !todo.completed).length;
    this.completedCounter = this.todos.filter(todo => todo.completed).length;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleAddTodo = (event: Event) => {
    event.preventDefault();
    const input = document.getElementById('todo-input') as HTMLInputElement;
    const todo = input.value;
    if (todo) {
      this.todos = [...this.todos, { text: todo, completed: false }];
      input.value = '';
      this.updateTodos();
    }
  }

  handleCompleteTodo = (index: number, completed: boolean) => {
    this.todos[index].completed = completed;
    this.completedCounter++;
    this.updateTodos();
  }

  handleDeleteTodo = (index: number) => {
    const todo = this.todos[index];
    if (todo.completed) {
      this.completedCounter--;
    } else {
      this.counter--;
    }
    this.todos.splice(index, 1);
    this.updateTodos();
  }

  handleDeleteCompletedTodos = () => {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.updateTodos();
  }

  render() {
    return (
      <div>

        <input-form onTodoAdded={this.handleAddTodo}></input-form>
        <div class="container">
        {this.todos.map((todo, index) => (
          <todo-items
            todo={todo}
            index={index}
            onComplete={this.handleCompleteTodo}
            onDelete={this.handleDeleteTodo}
          />
        ))}
        </div>
        <div class="counters">
        <p>Tareas pendientes: {this.counter}</p>
        <p>Tareas completadas: {this.completedCounter}</p>
        <button class="counter-button" onClick={this.handleDeleteCompletedTodos}>Eliminar completados</button>
        </div>
       
      </div>
    );
  }
}
