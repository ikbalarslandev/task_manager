import ItemWraper from "./components/item-wraper";
import TasksComponent from "./components/tasks";

const BoardItem = ({ item }: any) => {
  return (
    <ItemWraper item={item}>
      <TasksComponent data={item.tasks} />
    </ItemWraper>
  );
};

export default BoardItem;
