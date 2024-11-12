import { FunctionComponent } from "react";
import { PublicarProps } from "../types/modals.types";

const Publicar: FunctionComponent<PublicarProps> = ({ setPublicar, dict }): JSX.Element => {
  return (
    <div
      className="inset-0 justify-center fixed z-200 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
      onClick={() => setPublicar(false)}
    >
      <div
        className="rounded-md bg-negro w-96 h-fit text-sm text-white flex flex-col gap-3 items-center justify-start p-3 cursor-default"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Publicar;
