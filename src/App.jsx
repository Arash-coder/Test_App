import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersPage from "./components/users/index";
import UserPostsPage from "./components/userPosts/index";
import EditPost from "./components/editForm/index";
const Index = () => {
  return (
    <Router>
      <Route path="/" exact component={UsersPage} />
      <Route path="/user/:id" exact component={UserPostsPage} />
      <Route path="/user/:id/post/:id" exact component={EditPost} />
    </Router>
  );
};

export default Index;
