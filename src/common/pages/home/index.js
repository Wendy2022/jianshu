import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
//不能再代码中直接引用图片地址，因为webpack打包的原因
import hike from "../../../statics/hike.jpg";

class Home extends PureComponent {
  
  
  handleScrollTop(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={hike} alt="hike"></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

}
const mapState=(state)=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action=actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollTopShow(){
    if (document.documentElement.scrollTop>100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
    
  }
});

export default connect(mapState, mapDispatch)(Home);
