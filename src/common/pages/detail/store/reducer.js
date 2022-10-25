import { fromJS } from "immutable";
import * as constants from "./constants";
//import japan from "../../../../statics/japan.jpg";


const defaultState = fromJS({
  title: '',
  content:''
    
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
        return state.merge({
           title:action.title,
           content:action.content 
        })
    default:
      return state;
  }
}

export default reducer;
