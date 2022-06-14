import * as actions from './actions'
function reducer(state = [], action) {
    if (action.type === actions.addTodo) {

        return [...state, { id: state.length + 1, description: action.data.description, completed: false }]
    }
    else if (action.type === actions.removeTodo) {
        return state.filter(item => item.id !== action.id)
    }
    else if (action.type === actions.markAsCompleteTodo) {
        return state.map(item => (item.id === action.id) ? { ...item, completed: true } : item)
    }
    return state
}

// function reducer(state, action) {
//     switch (action) {
//         case addTodo {
//             return add new item
//         }
//         case removeTodo {
//             return remove my todo
//         }
//         case markAsCompleteTodo {
//             return mark as completed
//         }
//         defaul: {
//             return state
//         }
//     }
// }


export default reducer;