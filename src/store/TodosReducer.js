const defaultState = {
    items: []
}

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // console.log(action)
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_TODO':
                return {
                    ...state,
                    items: state.items.filter(
                        item => item !== action.payload
                    )
                }
        default:

            return state

    }
}