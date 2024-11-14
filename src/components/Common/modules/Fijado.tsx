import { FunctionComponent } from "react";
import { FijadoProps, Fabrica, Pantalla } from "../types/common.types";
import { RiEmojiStickerFill } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import Feed from "./Feed";
import { PiCoinFill } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import FabricaCambio from "./FabricaCambio";
import Actividad from "./Actividad";
import Buscar from "./Buscar";
import Perfil from "./Perfil";
import { RiUnpinFill } from "react-icons/ri";

const Fijado: FunctionComponent<FijadoProps> = ({
  elemento,
  dict,
  fabrica,
  cuenta,
  setCuenta,
  setFabrica,
  setFijado,
  setMostrarConexion,
  conectado,
  setPublicar,
  setURL
}): JSX.Element => {
  switch (elemento) {
    case Pantalla.Fabrica:
      return (
        <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
          <div className="relative text-sm text-white w-fit h-10 text-center">
            {dict.Home.Fabrica +
              ` ( ${dict.Home[fabrica as unknown as keyof typeof dict.Home]} )`}
          </div>
          <div
            className="absolute cursor-pointer right-0 justify-center items-center"
            onClick={() =>
              setFijado((prev) => prev.filter((e) => e !== Pantalla.Fabrica))
            }
          >
            <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
          </div>
          <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
            <div className="relative w-full h-fit flex flex-row gap-2 justify-between items-center rounded-full p-2 bg-ligero/30">
              <div
                className={`relative w-fit h-fit flex items-center justify-center cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFabrica(Fabrica.Pegatinas);
                }}
              >
                <RiEmojiStickerFill
                  size={20}
                  color={fabrica == Fabrica.Pegatinas ? "white" : "#7f7f7f"}
                />
              </div>
              <div
                className={`relative w-fit h-fit flex items-center justify-center cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFabrica(Fabrica.Ropa);
                }}
              >
                <GiSewingMachine
                  size={20}
                  color={fabrica == Fabrica.Ropa ? "white" : "#7f7f7f"}
                />
              </div>
              <div
                className={`relative w-fit h-fit flex items-center justify-center cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFabrica(Fabrica.Memes);
                }}
              >
                <LiaBirthdayCakeSolid
                  size={20}
                  color={fabrica == Fabrica.Memes ? "white" : "#7f7f7f"}
                />
              </div>
              <div
                className={`relative w-fit h-fit flex items-center justify-center cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFabrica(Fabrica.Moneda);
                }}
              >
                <PiCoinFill
                  size={20}
                  color={fabrica == Fabrica.Moneda ? "white" : "#7f7f7f"}
                />
              </div>
            </div>
            <FabricaCambio fabrica={fabrica} />
          </div>
        </div>
      );

    case Pantalla.Actividad:
      return <Actividad setFijado={setFijado} dict={dict} depin />;

    case Pantalla.Buscar:
      return <Buscar setFijado={setFijado} dict={dict} depin />;

    case Pantalla.Perfil:
      return (
        <Perfil
          setFijado={setFijado}
          dict={dict}
          cuenta={cuenta}
          setCuenta={setCuenta}
          depin
          setURL={setURL}
          setMostrarConexion={setMostrarConexion}
        />
      );

    case Pantalla.Marcadores:
      return (
        <Feed
          setPublicar={setPublicar}
          conectado={conectado}
          setMostrarConexion={setMostrarConexion}
          dict={dict}
          setFijado={setFijado}
          titulo={dict.Home.Marcadores}
          depin
        />
      );

    case Pantalla.ParaTi:
    default:
      return (
        <Feed
          setPublicar={setPublicar}
          conectado={conectado}
          setMostrarConexion={setMostrarConexion}
          dict={dict}
          setFijado={setFijado}
          titulo={dict.Home.ParaTi}
        />
      );
  }
};

export default Fijado;
