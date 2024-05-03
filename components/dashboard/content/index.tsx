import BoardItem from "./components/board-item";

const DashboardContentComponent = () => {
  return (
    <div className=" flex-1 flex gap-2 ">
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </div>
  );
};

export default DashboardContentComponent;
