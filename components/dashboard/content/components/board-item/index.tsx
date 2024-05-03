import ItemWraper from "./components/item-wraper";
import TasksComponent from "./components/tasks";

const BoardItem = () => {
  return (
    <ItemWraper>
      <TasksComponent />
    </ItemWraper>
  );
};

export default BoardItem;
