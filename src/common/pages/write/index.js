import React, { PureComponent } from "react";
import {Navigate} from 'react-router'
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    const {loginStatus}=this.props;
    console.log(loginStatus);
    if(loginStatus){
       return (
      <div>写文章页面</div>
    );
    }else{
      return <Navigate to='/login' />
    }
   
  }
}

const mapState = (state) => ({
  loginStatus:state.getIn(['login','login'])
});

export default connect(mapState, null)(Write);
