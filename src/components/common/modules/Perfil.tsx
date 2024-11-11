import { FunctionComponent } from "react";
import { PerfilProps } from "../types/common.types";
import usePerfil from "../hooks/usePerfil";
import manejarCopiar from "@/lib/helpers/manejarCopiar";

const Perfil: FunctionComponent<PerfilProps> = ({
  dict,
  cuenta,
}): JSX.Element => {
  const { copiado, setCopiado } = usePerfil();
  return (
    <div className="relative w-96 flex items-center justify-start flex flex-col gap-4">
      <div className="relative text-lg text-white w-fit h-10 text-center">
        {dict.Home.Perfil}
      </div>
      <div
        className="relative w-fit h-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-4 cursor-pointer bg-ligero/30 text-white text-center"
        onClick={() => manejarCopiar(cuenta?.direccion as string, setCopiado)}
      >
        {cuenta?.direccion?.substring(0, 15) +
          "..." +
          cuenta?.direccion?.slice(-15)}
        {copiado && (
          <div className="absolute w-fit h-fit rounded-sm p-2 bg-ligero text-white text-xs">
            {dict.Home.copiado}
          </div>
        )}
      </div>
      <div className="relative w-full h-full overflow-y-scroll flex">
        <div className="relative w-full h-fit flex items-start justify-center flex-col gap-5"></div>
      </div>
    </div>
  );
};

export default Perfil;
