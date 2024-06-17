import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ListItem {
  id: string,
  status: 'todo' | 'done',
  content: string
}

type State = {
  list: Array<ListItem>
}

type Action = {
  addItem: (item: ListItem, id: string) => void,
  deleteItem: (id: string) => void,
  updateItem: (item: ListItem) => void,
}

const stateCreator: StateCreator<State & Action> = (set: (arg0: { (state: any): { list: any[]; }; (state: any): { list: any; }; (state: any): { list: any; }; }) => void) => ({
  list: [
    {
      id: Math.random().toString().slice(2, 8),
      status: 'todo',
      content: '待办事项'
    }
  ],
  addItem: (item: ListItem, id?: string) => {
    set((state) => {
      if (!id) {
        return {
          list: [
            ...state.list,
            item
          ]
        }
      }

      const newList = [
        ...state.list
      ]

      const index = newList.findIndex(item => {
        return item.id === id;
      })

      newList.splice(index, 0, item);

      return {
        list: newList
      }
    })
  },
  deleteItem: (id: string) => {
    set((state) => {
      return {
        list: state.list.filter((item: { id: string; }) => {
          return item.id !== id;
        })
      }
    });
  },
  updateItem: (updateItem: ListItem) => {
    set(state => {
      return {
        list: state.list.map((item: { id: string; }) => {
          if(item.id === updateItem.id) {
            return updateItem;
          }
          return item;
        })
      }
    })
  }
})

export const useTodoListStore = create<State & Action>()(persist(stateCreator, {
  name: 'todolist'
}));