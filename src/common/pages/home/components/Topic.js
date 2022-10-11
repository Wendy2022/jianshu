import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  render() {
    const {list}=this.props;
    return (
      <TopicWrapper>
        {list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img 
              src={item.get('imgUrl')} 
              alt="mark" 
              className="topic-pic" />
              {item.get('title')}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}
//fromJS对象，不能直接用. 需要用get方法来获取
const mapState = (state) => ({
  list: state.get("home").get("topicList"),
});

export default connect(mapState, null)(Topic);
