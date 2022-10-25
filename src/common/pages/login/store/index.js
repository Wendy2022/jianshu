//把store里的index文件作为store里面所有文件的出口文件。

//为了简化 src/store/reducer.js 里面的引用。把reducer放入到index中。
import reducer from './reducer';
//把header的index组件要用的actioncreators函数导入
import * as actionCreators from './actionCreators'
import * as constants from './constants'

export { reducer, actionCreators,constants}