const initialstate={
    schoolname:" ",
    citytown:" ",
    country:" ",
    degree:" ",
    month:" ",
    year:" ",
};
export default function Educationreducer(state=initialstate,action) {
  if(action.type=="education")
  {
      return{
          ...state,
          schoolname:action.payload.schoolname,
          citytown:action.payload.citytown,
          country:action.payload.country,
          degree:action.payload.degree,
          month:action.payload.month,
          year:action.payload.year
      }
  }
  else
  {
      return state;
  }
}
