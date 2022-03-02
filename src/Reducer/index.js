import {combineReducers} from 'redux';
import Tellusreducer from './Tellusreducer';
import Workexperiencereducer from './Workexperiencereducer';
import Educationreducer from './Educationreducer';
import Skillsreducer from './Skillsreducer';
import Summaryreducer from './Summaryreducer';
import userReducer from './userReducer';

const rootReducer=combineReducers({Tellusreducer,Workexperiencereducer,Educationreducer,Skillsreducer,Summaryreducer,userReducer});
export default rootReducer;
