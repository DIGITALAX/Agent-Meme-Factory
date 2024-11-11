import { FunctionComponent, useState } from "react";
import { QuemadoraProps } from "../types/modals.types";
import manejarCopiar from "@/lib/helpers/manejarCopiar";

const Quemadora: FunctionComponent<QuemadoraProps> = ({
  cuenta,
  setCuenta,
  dict,
}): JSX.Element => {
  const [copiado, setCopiado] = useState(false);
  return (
    <div
      className="inset-0 justify-center fixed z-200 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
      onClick={() =>
        setCuenta({
          ...cuenta,
          quemadoraAbierta: false,
        })
      }
    >
      <div
        className="rounded-md bg-gris w-96 h-fit text-sm text-white flex items-center justify-start p-3 cursor-default flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-fit pb-3 h-fit flex items-center justify-center">
          {dict.Home.clave}
        </div>
        <div
          className="relative w-full h-12 flex items-center justify-center p-2 rounded-md bg-ligero cursor-pointer"
          onClick={() => manejarCopiar(cuenta?.direccion as string, setCopiado)}
        >
          {cuenta?.quemadora?.privateKey?.substring(0, 15) +
            "..." +
            cuenta?.quemadora?.privateKey?.slice(-15)}
          {copiado && (
            <div className="absolute w-fit h-fit rounded-sm p-2 bg-ligero text-white text-xs">
              {dict.Home.copiado}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quemadora;
