import { FunctionComponent } from "react";
import { ConexionProps } from "../types/modals.types";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { Pantalla } from "@/components/Common/types/common.types";

const Conexion: FunctionComponent<ConexionProps> = ({
  setMostrarConexion,
  dict,
  setCuenta,
  setPantalla
}): JSX.Element => {
  const { openConnectModal } = useConnectModal();

  return (
    <div
      className="inset-0 justify-center fixed z-200 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
      onClick={() => setMostrarConexion(false)}
    >
      <div
        className="rounded-md bg-negro w-96 h-fit text-sm text-white flex flex-col gap-3 items-center justify-start p-3 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-fit pb-3 h-fit flex items-center justify-center">
          {dict.Home.conexion}
        </div>
        <div
          className="relative w-full h-12 flex items-center justify-center p-2 rounded-md bg-ligero cursor-pointer"
          onClick={() => {
            const billetera = ethers.Wallet.createRandom();
            setCuenta({
              quemadora: billetera,
              quemadoraAbierta: true,
              direccion: billetera?.address as `0x${string}`,
            });
            setMostrarConexion(false);
            setPantalla(Pantalla.Perfil);
          }}
        >
          {dict.Home.aleatorio}
        </div>
        <div
          className="relative w-full h-12 flex items-center justify-center p-2 rounded-md bg-ligero cursor-pointer"
          onClick={openConnectModal}
        >
          {dict.Home.billetera}
        </div>
      </div>
    </div>
  );
};

export default Conexion;
