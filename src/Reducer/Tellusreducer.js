const initialstate={
    name:" ",
    email:" ",
    streetaddress:" ",
    city:" ",
    country:" ",
    phonenumber:" "
};
export default function Tellusreducer(state=initialstate,action) {
  if(action.type=="tellus")
  {
      return{ 
          ...state,
        name:action.payload.name,
        email:action.payload.email,
        streetaddress:action.payload.streetaddress,
        city:action.payload.city,
        country:action.payload.country,
        phonenumber:action.payload.phonenumber
      }
  }
  else
  {
      return state;
  }
}
