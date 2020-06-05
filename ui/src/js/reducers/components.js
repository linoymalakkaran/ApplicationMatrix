import {
    ADD_COMPONENT,
    UPDATE_COMPONENT,
    DELETE_COMPONENT,
    FILTER_COMPONENTS
} from '../actions/types.js';

export default function components(state=[], action) {
    switch(action) {
        case ADD_COMPONENT: {
            return ([
                ...state,
                action.component
            ]);
        }
        case UPDATE_COMPONENT: {
            return ([
                ...(state.filter((c) => {
                        return(c.name !== action.component.name);
                    })),
                action.component
            ]);
        }
        case DELETE_COMPONENT: {
            return ([
                ...(state.filter((c) => {
                        return(c.name !== action.name);
                    }))
            ]);
        }
        case FILTER_COMPONENTS: {
            return state;
        }
        default: 
            return state;
    }
}