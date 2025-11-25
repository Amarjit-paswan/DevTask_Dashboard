
//Reducer initial state
//Keeps all project form data is one predictable structure.
export const initialState = {
    language : [],      //List of all tech language from backend
    projectTitle: "",   //Project title input
    projectInfo: "",    //Project description input
    technologies: [],   //Selected tech IDs
    message:"",         //Success message
    error:""            //Error message
}

//Reducer to handle all state updates
//Avoids multiple useState and makes logic scalable & maintaince 
export function projectAddReducer(state, action){

    switch(action.type){

        case 'SET_TITLE':
            //Update project Title
            return {...state, projectTitle: action.payload}
        
        case 'SET_INFO':
            //Update project description
            return {...state, projectInfo: action.payload};
        
        case 'SET_TECH':
            //Toggle technology checkbox (add/remove tech ID)
            //Single source of truth for checbox logic
            const techId = action.payload;
            return {
                ...state,
                technologies: state.technologies.includes(techId) ? state.technologies.filter((id) => id !== techId) : [...state.technologies, techId]
            };
        
        case 'SET_LANGUAGE':
            //Store languages fetches from backend
            return {...state, language:action.payload};
        
        case 'SET_MESSAGE':
            //Store backend success message
            return {...state, message:action.payload};
        
        case 'SET_ERROR':
            //Store backend validation error
            return {...state, error:action.payload};
        
        case 'RESET':
            //Reset all form fields EXCEPT languages
            return {
                ...state,
                projectTitle:"",
                projectInfo:"",
                technologies: [],
                message:"",
                error:""
            };

            default:
                return state;
    }
}
