import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Cleared Gate",
    body: "Hi Friends, i am very happy to share you that i have cleared gate and now i am going to IIT.",
    reactions: 10,
    userId: "user-1",
    tags: ["IIT", "Gate", "happy"],
  },
  {
    id: "2",
    title: "Paas Ho Gaya",
    body: "4 saal ki engineering journey ka ab jake ant aaya hai. Will miss those days",
    reactions: 100,
    userId: "user-2",
    tags: ["Engineering", "Pass", "happy"],
  },
];

export default PostListProvider;
