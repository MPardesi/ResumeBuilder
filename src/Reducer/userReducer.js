const initialstate={
    email:" ",
    uid: ""
};
export default function userReducer(state=initialstate,action) {
  if(action.type=="user")
  {
      return{ 
          ...state,
        email:action.payload.email,
        uid:action.payload.uid
      }
  }
  else
  {
      return state;
  }
}
