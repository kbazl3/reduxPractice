export default function(state = null, action) {

    switch (action.type) {
        case "SELECT_MOVIE":
            
            return action.payload;
    }
    return state;
}
