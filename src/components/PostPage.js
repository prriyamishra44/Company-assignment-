import classes from "./Pages.module.css";
import Sidebar from "./Sidebar";
function PostPage() {
    return (
      <div>
        <Sidebar/>
        <h1>Post</h1>
        <p className={classes.paparagrapg}>Coming soon</p>
      </div>
    );
  }
export default PostPage;  