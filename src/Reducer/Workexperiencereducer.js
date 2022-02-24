const initialstate={
    jobtitle:'',
    company:'',
    citytown:'',
    country:'',
    startmonth:'',
    startyear:'',
    endmonth:'',
    endyear:'',
};
export default function Workexperiencereducer(state=initialstate,action) {
    if(action.type=="workexperience")
    {
        return{
            ...state,
            jobtitle:action.payload.jobtitle,
            company:action.payload.company,
            citytown:action.payload.citytown,
            country:action.payload.country,
            startmonth:action.payload.startmonth,
            startyear:action.payload.startyear,
            endmonth:action.payload.endmonth,
            endyear:action.payload.endyear
        }
    }
    else
    {
        return state;
    }
}
