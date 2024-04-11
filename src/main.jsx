import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "create-post", element: <CreatePost /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
