import React, { PureComponent } from "react";
import { RecommendWrap, RecommendItem } from "../style";
import {connect} from "react-redux";

class Recommend extends PureComponent {
  render() {
    const {list}=this.props;
   // console.log('recommendlist:',list);
    return (
      <RecommendWrap>
        {
            list.map((item)=>(
                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl') } />
            ))
        }
      </RecommendWrap>
    );
  }
  // render() {
	// 	return (
	// 		<RecommendWrap>
	// 			{
	// 				this.props.list.map((item) => {
	// 					return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
	// 				})
	// 			}
	// 		</RecommendWrap>
	// 	)
	// }
}
const mapState=(state)=>({
   list:state.getIn(['home','recommendList'])
})


export default connect(mapState, null)(Recommend);
