import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-app',
  styleUrl: 'main-app.scss'
})
export class MainApp {
  render() {
    return (
      <div>
        <global-header></global-header>
        <div class="wrapper">

        <todo-list></todo-list>
        </div>


      </div>
    );
  }
}
