import React, { Component,useEffect } from "react";
import { DetailWrapper, Header, Content } from "./style";
//import japan from "../../../statics/japan.jpg";
import { connect } from "react-redux";
import {actionCreators} from './store' 
import {useParams} from 'react-router-dom'
import { getDetail } from "./store/actionCreators";
/*
class Detail extends Component {
 
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    );
  }
  componentDidMount(){
    this.props.getDetail();
  }
}
*/
//react-router-dom v6版本可以用useParam()函数来获取路径中的传值（/:id)
function Detail(props) {
  const { title, content, getDetail } = props;
  const { id } = useParams();
   
  useEffect(() => {
      getDetail();
      console.log(id);
  }, []);
   
  return (
      <DetailWrapper>
          <Header>{title}</Header>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
  )

  }
   

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch=(dispatch)=>({
  getDetail(){
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail);
