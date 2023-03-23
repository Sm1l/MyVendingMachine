import { createSlice } from "@reduxjs/toolkit";
import createId from "../helpers/createId";

const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: JSON.parse(localStorage?.getItem("MyLists")) || [],
  },
  reducers: {
    addList(state, action) {
      state.lists.push({
        list: action.payload.list,
        listId: createId(),
        tasks: [],
        inputIsActive: false,
        listItemIsActive: false,
      });
    },
    addTaskToList(state, action) {
      state.lists
        .find((item) => item.listId === action.payload.listId)
        .tasks.unshift({ task: action.payload.task, taskIsChecked: false, taskId: createId() });
    },

    toggleTaskIsChecked(state, action) {
      const list = state.lists
        .find((item) => item.listId === action.payload.listId)
        .tasks.find((task) => task.taskId === action.payload.taskId);
      list.taskIsChecked = !list.taskIsChecked;
    },

    toggleInputIsActive(state, action) {
      state.lists.find((item) => item.listId === action.payload.listId).inputIsActive = !state.lists.find(
        (item) => item.listId === action.payload.listId
      ).inputIsActive;
    },

    toggleListItemIsActive(state, action) {
      state.lists.find((item) => item.listId === action.payload.listId).listItemIsActive = !state.lists.find(
        (item) => item.listId === action.payload.listId
      ).listItemIsActive;

      state.lists
        .filter((item) => item.listId !== action.payload.listId)
        .map((item) => (item.listItemIsActive = false));

      state.lists.map((item) => (item.inputIsActive = false)); //*закрываем input
    },

    cleanCheckedTasks(state, action) {
      const list = state.lists.find((item) => item.listId === action.payload.listId);
      list.tasks = list.tasks.filter((task) => !task.taskIsChecked);
    },

    deleteList(state, action) {
      state.lists = state.lists.filter((list) => list.listId !== action.payload.listId);
    },
  },
});

export const {
  addList,
  addTaskToList,
  toggleTaskIsChecked,
  toggleInputIsActive,
  toggleListItemIsActive,
  cleanCheckedTasks,
  deleteList,
} = listSlice.actions;

export default listSlice.reducer;
