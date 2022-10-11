import { fromJS } from "immutable";
import * as constants from "./constants";
// import mark from "../../../../../src/statics/logo/add-bookmark.png";
// import article from "../../../../../src/statics/article.jpg";
import bannerDaily from "../../../../statics/banner-daily.png";
// import bannerClub from "../../../../statics/banner-club.png";
// import bannerS from "../../../../statics/banner-s.png";
// import bannerS1 from "../../../../statics/banner-s1.png";
// import writerlulu from "../../../../statics/writer-lulu.jpg";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [
    // {
    //   id: 1,
    //   imgUrl: bannerDaily,
    // },
    // {
    //   id: 2,
    //   imgUrl: bannerDaily,
    // },
    // {
    //   id: 3,
    //   imgUrl: bannerDaily,
    // },
    // {
    //   id: 4,
    //   imgUrl: bannerDaily,
    // },
  ],
  writerList: [],
  articlePage: 1,
  showScroll: false,
});
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
  });
};
const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage,
  });
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    // eslint-disable-next-line no-duplicate-case
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);

    // state.set(
    //   "articleList",
    //   state.get("articleList").concat(action.list)
    // );
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
}

export default reducer;
