# todo-items



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type                                          | Default     |
| ------------ | --------- | ----------- | --------------------------------------------- | ----------- |
| `index`      | `index`   |             | `number`                                      | `undefined` |
| `onComplete` | --        |             | `(index: number, completed: boolean) => void` | `undefined` |
| `onDelete`   | --        |             | `(index: number) => void`                     | `undefined` |
| `todo`       | --        |             | `Todo`                                        | `undefined` |


## Dependencies

### Used by

 - [todo-list](../todo-list)

### Graph
```mermaid
graph TD;
  todo-list --> todo-items
  style todo-items fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
