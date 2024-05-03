import ModalHeader from "./components/modal-header";
import DetailsComponent from "./components/details-component";

const ModalContent = ({ handleClose }: any) => {
  return (
    <div>
      <ModalHeader handleClose={handleClose} />
      <div className="bg-gray-300  h-[1px] "></div>
      <DetailsComponent />
    </div>
  );
};

export default ModalContent;
