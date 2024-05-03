interface SingleTaskProps {
  task: any;
}

const SingleTask = ({ task }: SingleTaskProps) => {
  return (
    <div className="border bg-blue-100/10 shadow-sm mx-[1px] rounded-sm px-2 py-1">
      {task.name}
    </div>
  );
};

export default SingleTask;
