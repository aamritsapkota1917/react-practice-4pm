const initialData={
    studentNam:'Amrit'

}

const studentReducer=(state=initialData,action)=>{
switch(action.type){
case 'CHANGE_NAME':
return{
    ...state,
    studentName: action.payLoad 
}

    default:
        return state 
}
}

export default studentReducer 