//import {combineReducers} from 'redux';
//redux-immutable提供了一个和redux一样的combineReducer函数，但是是immutable类型的
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store';
import  {reducer as homeReducer} from '../common/pages/home/store';
//如果没有index文件，则像下面的写法。但是一般不要直接引入reducer，要从index引入
//import homeReducer from '../common/pages/home/store/reducer';

//引入第三方 redux immutable

//state.header就是值得header里的子reducer。

import {reducer as detailReducer} from '../common/pages/detail/store'
import { reducer as loginReducer } from '../common/pages/login/store'
const reducer= combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})

export default reducer