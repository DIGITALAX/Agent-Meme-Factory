import { FunctionComponent } from "react";
import { CambioProps, Fabrica, Pantalla } from "../types/common.types";
import { RiEmojiStickerFill } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import Feed from "./Feed";
import { PiCoinFill } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import FabricaCambio from "./FabricaCambio";
import Actividad from "./Actividad";
import Buscar from "./Buscar";
import Perfil from "./Perfil";
import Fijado from "./Fijado";

const Cambio: FunctionComponent<CambioProps> = ({
  pantalla,
  setPantalla,
  dict,
  fabrica,
  setFabrica,
  cuenta,
  fijado,
  setFijado,
  setCuenta,
  setMostrarConexion,
  conectado,
  setPublicar,
}): JSX.Element => {
  switch (pantalla) {
    case Pantalla.Fabrica:
      return (
        <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
          <div className="relative text-sm text-white w-fit h-10 text-center">
            {dict.Home.Fabrica +
              ` ( ${dict.Home[fabrica as unknown as keyof typeof dict.Home]} )`}
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
      return <Actividad dict={dict} setFijado={setFijado} />;

    case Pantalla.Buscar:
      return <Buscar dict={dict} setFijado={setFijado} />;

    case Pantalla.Perfil:
      return (
        <Perfil
          dict={dict}
          setFijado={setFijado}
          cuenta={cuenta}
          setCuenta={setCuenta}
        />
      );

    case Pantalla.Marcadores:
      return (
        <Feed
          setPublicar={setPublicar}
          conectado={conectado}
          setMostrarConexion={setMostrarConexion}
          dict={dict}
          titulo={dict.Home.Marcadores}
          setFijado={setFijado}
        />
      );

    case Pantalla.Hogar:
    default:
      return (
        <div
          className={`relative w-full h-full overflow-x-scroll flex ${
            fijado?.length > 1 ? "justify-start pr-3 pl-12" : "justify-center"
          }`}
        >
          <div className="relative w-fit h-full items-start justify-center flex flex-row gap-4">
            {fijado?.map((elemento: Pantalla, indice: number) => {
              return (
                <Fijado
                  conectado={conectado}
                  setMostrarConexion={setMostrarConexion}
                  setPublicar={setPublicar}
                  dict={dict}
                  elemento={elemento}
                  key={indice}
                  setCuenta={setCuenta!}
                  fabrica={fabrica}
                  cuenta={cuenta}
                  setFabrica={setFabrica}
                  setFijado={setFijado}
                />
              );
            })}
          </div>
        </div>
      );
  }
};

export default Cambio;
