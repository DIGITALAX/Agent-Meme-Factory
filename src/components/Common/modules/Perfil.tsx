import { FunctionComponent } from "react";
import { Pantalla, PerfilProps } from "../types/common.types";
import usePerfil from "../hooks/usePerfil";
import manejarCopiar from "@/lib/helpers/manejarCopiar";
import { VscRefresh } from "react-icons/vsc";
import { ethers } from "ethers";
import { config } from "@/app/providers";
import { FaAngleDown } from "react-icons/fa6";
import { RiUnpinFill } from "react-icons/ri";
import Image from "next/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import { AiOutlineLoading, AiOutlineLogout } from "react-icons/ai";
import { disconnect } from "@wagmi/core";

const Perfil: FunctionComponent<PerfilProps> = ({
  dict,
  cuenta,
  setCuenta,
  setFijado,
  depin,
  setMostrarConexion,
  setURL
}): JSX.Element => {
  const {
    copiado,
    setCopiado,
    manejarLens,
    manejarFarcaster,
    farcasterCargando,
    lensCargando,
    abierto,
    setAbierto,
  } = usePerfil(cuenta, setCuenta, setURL);
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm text-white w-fit h-10 text-center">
        {dict.Home.Perfil}
      </div>
      {depin ? (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => prev.filter((e) => e !== Pantalla.Perfil))
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      ) : (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={async () => {
            await disconnect(config);
            setCuenta({
              ...cuenta,
              direccion: undefined,
            });
            setMostrarConexion(true);
          }}
        >
          <AiOutlineLogout
            size={15}
            className={`hover:fill-white fill-nubes`}
          />
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
          {cuenta?.lens ? (
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
          ) : (
            <div
              className="relative w-full h-14 rounded-md rounded-md bg-negro items-center justify-between flex flex-row p-2"
              title="Lens"
            >
              <div className="relative w-10 h-10 rounded-md flex">
                <Image
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmWGGYR4a3fQm2hREsnHpYnFCSqWGi2tzsGFT1SrHbMyC8`}
                  layout="fill"
                  objectFit="cover"
                  alt="Lens"
                  className="rounded-md"
                />
              </div>
              <div
                className={`"relative px-3 py-1 flex items-center justify-center bg-gris text-white w-28 h-8 hover:text-ligero rounded-md ${
                  !lensCargando && "cursor-pointer active:scale-95"
                }`}
                onClick={() => !lensCargando && manejarLens()}
              >
                {lensCargando ? (
                  <AiOutlineLoading
                    size={15}
                    className={`fill-nubes animate-spin`}
                  />
                ) : cuenta?.lens ? (
                  dict.Home.salir
                ) : (
                  dict.Home.conexion
                )}
              </div>
            </div>
          )}
          {cuenta?.farcaster ? (
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
          ) : (
            <div
              className="relative w-full h-14 rounded-md rounded-md bg-negro items-center justify-between flex flex-row p-2"
              title="Farcaster"
            >
              <div className="relative w-10 h-9 rounded-md flex">
                <Image
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/QmZZV3AUs5Di9De9iekMeQ6SYCt11KY8kqbYYYjWJTWWb8`}
                  layout="fill"
                  objectFit="cover"
                  alt="Farcaster"
                  className="rounded-md"
                />
              </div>
              <div
                className={`"relative px-3 py-1 flex items-center justify-center bg-gris text-white w-28 h-8 hover:text-ligero rounded-md ${
                  !farcasterCargando && "cursor-pointer active:scale-95"
                }`}
                onClick={() => !farcasterCargando && manejarFarcaster()}
              >
                {farcasterCargando ? (
                  <AiOutlineLoading
                    size={15}
                    className={`fill-nubes animate-spin`}
                  />
                ) : cuenta?.farcaster ? (
                  dict.Home.salir
                ) : (
                  dict.Home.conexion
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
