import { Component, h } from '@stencil/core';

@Component({
  tag: 'global-header',
  styleUrl: 'global-header.scss'
})
export class GlobalHeader {
  render() {
    return (
      <div class="global-header">
          <div class="global-header__container">
            <h1 class="global-header__container-title">TODO</h1>
          </div>
      </div>
    );
  }
}