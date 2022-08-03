const ToDoItemFactory =  (title, description, dueDate, priority) => {
    const status = 'Incomplete';

    return {title, description, dueDate, priority, status }
}

export { ToDoItemFactory }