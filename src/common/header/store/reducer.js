import * as constants from "./constants";
import { fromJS } from "immutable";
//focused变成了一个人immutable的数据，就只能用get,set方法
//里面的list也是immutable数组,所以在actioncreators的changelist中要把data变成immutable数据
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      });
      //用merge代替下面的链式set，起到同样的效果。merge可以同时修改多个内容
      //return state.set("list", action.data).set("totalPage", action.totalPage);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set('page',action.page)  
    default:
      return state;
  }
  /** 
    if(action.type===constants.SEARCH_FOCUS){
    //   immutable对象的set方法，会返回一个全新的对象 
        return state.set('focused',true)
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false)
    } 
    if(action.type===constants.CHANGE_LIST){
        //console.log(action);
        return state.set('list',action.data)
    }
    return state;
 */
}

export default reducer;
