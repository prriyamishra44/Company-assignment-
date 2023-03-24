import classes from './Pages.module.css';
import Sidebar from './Sidebar';
function TodoPage() {
    return (
      <div>
        <Sidebar/>
        <h1>ToDo</h1>
        <p className={classes.paragrapg}>Coming soon</p>
      </div>
    );
  }
export default TodoPage;