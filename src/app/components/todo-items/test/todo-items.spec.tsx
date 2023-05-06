import { newSpecPage } from '@stencil/core/testing';
import { TodoItems } from '../todo-items';

describe('todo-items', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoItems],
      html: `<todo-items></todo-items>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-items>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-items>
    `);
  });
});
