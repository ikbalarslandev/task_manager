import { Button } from "@/components/ui/button";

const ModalContent = ({ handleClose }: any) => {
  return (
    <div>
      <h1>Modal Content</h1>
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
};

export default ModalContent;
