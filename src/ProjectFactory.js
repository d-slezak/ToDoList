import { ToDoItemFactory } from "./TodoFactory.Js";

const ProjectFactory = (title) => {
    const items = [];

    function getItems() {
        return items
    }

    function createItem(title, description, dueDate, priority) {
        const newItem = ToDoItemFactory(title, description, dueDate, priority);
        addItem(newItem);
    }

    function addItem(item) {
        items.push(item);
    }

    return { title, getItems, createItem }
}

export { ProjectFactory }       