import styled from "styled-components";
import writerlulu from "../../../statics/writer-lulu.jpg";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: auto;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  box-sizing: border-box;
  width: 280px;
  float: right;
  margin-left: 40px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 30px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrap = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.a`
  display: block;
  width: 280px;
  height: 50px;
  cursor: pointer;

  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrap = styled.div`
  width: 280px;
  height: 390px;
  box-sizing: border-box;
`;

export const Authors = styled.div`
  width: 280px;
  height: 350px;
  box-sizing: border-box;
  margin: 0 0 20 0;
`;
export const AuthorTitle = styled.div`
  width: 280px;
  height: 20px;
  overflow: hidden;
  color: #969696;
`;
export const AuthorSwith = styled.div`
  float: right;
  width: 60px;
  height: 20px;
`;
export const AuthorList = styled.div``;

export const Author = styled.div`
  width: 280px;
  height: 47px;
  margin-top: 15px;
  .writer {
    color: #337ab7;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .introduction {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;

export const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  float: left;
  background: url(${writerlulu});
  background-size: contain;
`;
export const FollowAuthor = styled.div`
  width: 39px;
  height: 17px;
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
`;
export const MoreAuthor = styled.a`
  display: block;
  width: 259px;
  height: 19px;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  line-height: 19px;
  cursor: pointer;
`;
export const LoadMore=styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background:#a5a5a5;
  text-align: center;
  border-radius:20px ;
  color: #fff;
  cursor: pointer;
`;
export const BackTop=styled.div`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;