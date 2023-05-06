import { newE2EPage } from '@stencil/core/testing';

describe('todo-items', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-items></todo-items>');

    const element = await page.find('todo-items');
    expect(element).toHaveClass('hydrated');
  });
});
