const initialstate={
    skillone:" ",
    skilltwo:" ",
    skillthree:" ",
    skillfour:" ",
    skillfive:" ",
    skillsix:" ",
    skillseven:" ",
};
export default function Skillsreducer(state=initialstate,action) {
    if(action.type=="skill")
    {
        return{
            ...state,
            skillone:action.payload.skillone,
            skilltwo:action.payload.skilltwo,
            skillthree:action.payload.skillthree,
            skillfour:action.payload.skillfour,
            skillfive:action.payload.skillfive,
            skillsix:action.payload.skillsix,
            skillseven:action.payload.skillseven
        }
    }
    else
    {
        return state;
    }
}
