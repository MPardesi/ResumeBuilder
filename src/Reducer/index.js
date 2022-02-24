import {combineReducers} from 'redux';
import Tellusreducer from './Tellusreducer';
import Workexperiencereducer from './Workexperiencereducer';
import Educationreducer from './Educationreducer';
import Skillsreducer from './Skillsreducer';
import Summaryreducer from './Summaryreducer';

const rootReducer=combineReducers({Tellusreducer,Workexperiencereducer,Educationreducer,Skillsreducer,Summaryreducer,});
export default rootReducer;
