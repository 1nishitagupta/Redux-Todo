const initialData = {
    list : []
}

export const todoReducer = (state=initialData,action) =>{
    switch(action.type){
        case "ADD_TODO" : 
            const {id,data} = action.payload;
            if(data){
                return{
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }
                    ]
    
                }
            }
        
        case "DELETE_TODO" : 
        const newList = state.list.filter((val) => val.id !== action.id)
        return{
            ...state,
            list: newList

        }
        case "DELETE_ALL_TODO" : 
        return{
            ...state,
            list: []
        }
        default : return state
    }
}
