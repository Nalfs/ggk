import * as React from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "./ui/dialog";
import ClassSummaryComponent from "@/components/ClassSummaryComponent";
import "./styles.css";

type DataEntry = {
  "Vilken klass vill du main:a?": string;
  "Vilken roll vill du spela nästa tier/säsong?": string;
};

type ModalProps = {
  data: DataEntry[];
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />

      <DialogContent className="max-h-[90vh] p-4 overflow-y-auto hide-scrollbar">
        <DialogTitle className="text-lg font-semibold mb-4">
          Raid Composition
        </DialogTitle>

        <ClassSummaryComponent data={data} />

        {/* Close button */}
        <div className="mt-4 text-right">
          <Button onClick={onClose} className="text-white px-4 py-2 rounded">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
