import { Button } from "@/components/ui/button";

interface ContentWraperProps {
  children: React.ReactNode;
}

const ContentWraper = ({ children }: ContentWraperProps) => {
  return (
    <div className="bg-sky-800/10 flex-1 p-4 flex flex-col  ">
      <h1 className="font-bold text-karga">Frontend Case</h1>
      <div className="text-sm  my-5 flex">
        <Button variant="nav" className="rounded-l text-karga ">
          Boards
        </Button>
        <Button variant="nav">List</Button>
        <Button variant="nav">Other</Button>
        <Button variant="nav" className="rounded-r">
          Other
        </Button>
      </div>
      <div className="flex-1  flex">{children}</div>
    </div>
  );
};

export default ContentWraper;
