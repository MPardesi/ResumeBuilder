const initialstate={
text:" "
};
export default function Summaryreducer(state=initialstate,action) {
    if(action.type=="summary")
    {
        return{
            ...state,
            text:action.payload.text,
        }
    }
    else
    {
        return state;
    }
}
