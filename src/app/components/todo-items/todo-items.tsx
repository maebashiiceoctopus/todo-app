import { Component, h, Prop } from '@stencil/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  tag: 'todo-items',
  styleUrl: 'todo-items.scss'
})
export class TodoItems {
  @Prop() todo: Todo;
  @Prop() index: number;
  @Prop() onComplete: (index: number, completed: boolean) => void;
  @Prop() onDelete: (index: number) => void;

  handleCompleteTodo = (event: Event) => {
    this.onComplete(this.index, (event.target as HTMLInputElement).checked);
  }

  handleDeleteTodo = () => {
    this.onDelete(this.index);
  }

  render() {
    return (
        <div class="todo-item">
          <li class={this.todo.completed ? 'completed' : ''}>
            <span onClick={this.handleCompleteTodo}>
              {this.todo.text}
            </span>
          
            <input class="check" type="checkbox" checked={this.todo.completed} onChange={this.handleCompleteTodo} />
            <button class="action-button" onClick={this.handleDeleteTodo}> x </button>
            
          </li>
        </div>

    );
  }
}
