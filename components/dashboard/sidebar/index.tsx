import SmallSidebar from "./components/small-sidebar";
import LargeSeidebar from "./components/large-sidebar";

const SideBarComponent = () => {
  return (
    <aside className=" flex">
      <SmallSidebar />
      <LargeSeidebar />
    </aside>
  );
};

export default SideBarComponent;
