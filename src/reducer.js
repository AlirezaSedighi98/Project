export const content = (state=[],action) => {
    
    switch (action.type) {
        case "success":
            state = action.payload
            return state
            break;
        
        case "failed":
            state = action.payload
            return state
        default:
            return state
            break;
    }
}
export const search = (state="",action) => {
    
    switch (action.type) {
        case "search":
            state = action.payload
            return state
            break;
        default:
            return state
            break;
    }
}
export const searchedItems = (state=0,action) => {
    
    switch (action.type) {
        case "addSearched":
            state = action.payload
            return state
            break;
        default:
            return state
            break;
    }
}
export const pageNumber = (state=1,action) => {
    
    switch (action.type) {
        case "change":
            state = action.payload
            return state
            break;
        case "reset":
            state = 1
            return state
            break;
        default:
            return state
            break;
    }
}