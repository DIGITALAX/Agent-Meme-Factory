import { FunctionComponent } from "react";
import { ActividadProps, Pantalla } from "../types/common.types";
import { RiUnpinFill } from "react-icons/ri";

const Actividad: FunctionComponent<ActividadProps> = ({
  dict,
  setFijado,
  depin,
}): JSX.Element => {
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm text-white w-fit h-10 text-center">
        {dict.Home.Actividad}
      </div>
      {depin && (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => prev.filter((e) => e !== Pantalla.Actividad))
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full"></div>
    </div>
  );
};

export default Actividad;
