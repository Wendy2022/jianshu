import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  WriterWrap,
  Authors,
  AuthorTitle,
  AuthorSwith,
  AuthorList,
  Author,
  AuthorAvatar,
  FollowAuthor,
  MoreAuthor,
} from "../style";

class Writer extends PureComponent {
  render() {
    const list = this.props.list;
    return (
      <WriterWrap>
        <Authors>
          <AuthorTitle>
            推荐作者
            <AuthorSwith>
              <span></span>
              换一批
            </AuthorSwith>
          </AuthorTitle>
          <AuthorList>
            {list.map((item) => (
              <Author key={item.get("id")}>
                <AuthorAvatar>A</AuthorAvatar>
                <FollowAuthor>+关注</FollowAuthor>
                <span className="writer">{item.get("name")}</span>
                <span className="introduction">{item.get("introduction")}</span>
              </Author>
            ))}
          </AuthorList>
        </Authors>
        <MoreAuthor>查看更多</MoreAuthor>
      </WriterWrap>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
});


export default connect(mapState, null)(Writer);
