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

const Cambio: FunctionComponent<CambioProps> = ({
  pantalla,
  setPantalla,
  dict,
  fabrica,
  setFabrica,
}): JSX.Element => {
  switch (pantalla) {
    case Pantalla.Fabrica:
      return (
        <div className="relative w-96 flex items-center justify-start flex flex-col gap-4">
          <div className="relative text-lg text-white w-fit h-10 text-center">
            {dict.Home.Fabrica +
              ` ( ${dict.Home[fabrica as unknown as keyof typeof dict.Home]} )`}
          </div>
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
      );

    case Pantalla.Actividad:
      return <Actividad dict={dict} />;

    case Pantalla.Buscar:
      return <Buscar dict={dict} />;

    case Pantalla.Perfil:
      return <Perfil dict={dict} />;

    case Pantalla.Marcadores:
      return <Feed titulo={dict.Home.Marcadores} />;

    default:
      return <Feed titulo={dict.Home.foryou} />;
  }
};

export default Cambio;
