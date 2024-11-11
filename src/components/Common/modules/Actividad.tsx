import { FunctionComponent } from "react";
import { ActividadProps } from "../types/common.types";

const Actividad: FunctionComponent<ActividadProps> = ({
    dict
}): JSX.Element => {
  return (
    <div className="relative w-96 flex items-center justify-start flex flex-col gap-4">
       <div className="relative text-lg text-white w-fit h-10 text-center">
        {dict.Home.Actividad}
      </div>
      <div className="relative w-full h-full overflow-y-scroll flex">
        <div className="relative w-full h-fit flex items-start justify-center flex-col gap-5"></div>
      </div>
    </div>
  );
};

export default Actividad;
