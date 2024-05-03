import ModalWraper from "./components/modal-wraper";
import ModalContent from "./components/modal-content";

const Modal = ({ handleClose }: any) => {
  return (
    <ModalWraper>
      <ModalContent handleClose={handleClose} />
    </ModalWraper>
  );
};

export default Modal;
