//action creators
let nextTodoId = 0

export const addTodo = todo => ({
    id: nextTodoId++,
    type: "ADD_TODO",
    todo: todo
})

export const filterTodo = (filter) => ({
    type: 'VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    id: todoId
})