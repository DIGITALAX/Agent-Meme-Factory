import { FunctionComponent, useContext } from "react";
import { Pantalla, PerfilProps } from "../types/common.types";
import usePerfil from "../hooks/usePerfil";
import manejarCopiar from "@/lib/helpers/manejarCopiar";
import { VscRefresh } from "react-icons/vsc";
import { ethers } from "ethers";
import { ModalContext } from "@/app/providers";
import { FaAngleDown } from "react-icons/fa6";
import { RiUnpinFill } from "react-icons/ri";

const Perfil: FunctionComponent<PerfilProps> = ({
  dict,
  cuenta,
  setCuenta,
  setFijado,
  depin,
}): JSX.Element => {
  const contexto = useContext(ModalContext);
  const {
    copiado,
    setCopiado,
    manejarLens,
    manejarFarcaster,
    abierto,
    setAbierto,
  } = usePerfil(contexto);
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm text-white w-fit h-10 text-center">
        {dict.Home.Perfil}
      </div>
      {depin && (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => prev.filter((e) => e !== Pantalla.Perfil))
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
        <div className="relative w-full h-fit flex flex-col gap-3 items-center justify-center">
          <div className="relative w-fit h-fit flex flex-row gap-2 justify-center items-center">
            <div
              className="relative w-fit h-fit flex justify-center items-center rounded-full py-2 px-4 cursor-pointer bg-ligero/30 text-white text-center"
              onClick={() =>
                manejarCopiar(cuenta?.direccion as string, setCopiado)
              }
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
            {cuenta?.quemadora?.address && (
              <div
                className="relative w-fit h-fit cursor-pointer flex items-center justify-center"
                title={dict.Home.reiniciar}
                onClick={() => {
                  const billetera = ethers.Wallet.createRandom();
                  setCuenta({
                    quemadora: billetera,
                    quemadoraAbierta: true,
                    direccion: billetera?.address as `0x${string}`,
                  });
                }}
              >
                <VscRefresh
                  size={20}
                  className={`hover:fill-white fill-nubes`}
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative w-full h-fit flex flex-col gap-2 justify-center items-center">
          <div
            className={`relative w-full flex items-start justify-start p-2 rounded-md bg-negro ${
              abierto?.lens ? "h-96" : "h-60"
            }`}
          >
            <div
              className="relative w-full h-fit flex items-end justify-end cursor-pointer"
              onClick={() =>
                setAbierto({
                  ...abierto,
                  lens: !abierto?.lens,
                })
              }
            >
              <FaAngleDown
                size={20}
                className={`hover:fill-white fill-nubes`}
              />
            </div>
          </div>
          <div
            className={`relative w-full h-60 flex items-start justify-start p-2 rounded-md bg-negro  ${
              abierto?.farcaster ? "h-96" : "h-60"
            }`}
          >
            <div
              className="relative w-full h-fit flex items-end justify-end cursor-pointer"
              onClick={() =>
                setAbierto({
                  ...abierto,
                  farcaster: !abierto?.farcaster,
                })
              }
            >
              <FaAngleDown
                size={20}
                className={`hover:fill-white fill-nubes`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
