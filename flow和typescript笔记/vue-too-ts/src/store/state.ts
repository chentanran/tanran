export enum Mode {
  edit, // 处于编辑状态
  finish // 完成编辑状态
}

export interface ITodoItem {
  id: string
  name: string
  isDone: boolean
  color: string
  mode: Mode
}

export interface State {
  todoList: Array<ITodoItem>
}

export const state: State = {
  todoList: []
}