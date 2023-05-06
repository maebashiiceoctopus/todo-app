import { newE2EPage } from '@stencil/core/testing';

describe('input-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-form></input-form>');

    const element = await page.find('input-form');
    expect(element).toHaveClass('hydrated');
  });
});
