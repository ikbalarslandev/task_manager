import SingleTask from "../single-task";

interface ITask {
  data: any[];
}

const TasksComponent = ({ data }: ITask) => {
  return (
    <div className="flex flex-col  justify-start gap-1 mt-1">
      {data.map((item: any) => (
        <SingleTask key={item.id} task={item} />
      ))}
    </div>
  );
};

export default TasksComponent;
