import { FunctionComponent } from "react";
import { IoBookmarkSharp, IoSearch } from "react-icons/io5";
import {
  MdPushPin,
  MdHome,
  MdOutlineManageAccounts,
  MdFactory,
} from "react-icons/md";
import { TiHeart } from "react-icons/ti";
import { BarProps, Pantalla } from "../types/common.types";

const Bar: FunctionComponent<BarProps> = ({
  setPantalla,
  pantalla,
  abrirFijado,
  setAbrirFijado,
  dict,
  setFijado,
  fijado,
  filtro,
  setFiltro,
}): JSX.Element => {
  return (
    <div className="absolute top-0 z-10 left-0 bg-gris w-10 h-full flex justify-between items-center flex-col px-2 py-4">
      <div className="relative w-fit h-fit flex items-center justify-center text-2xl">
        🤑
      </div>
      <div className="relative w-fit h-fit flex items-center justify-center flex-col gap-4">
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Hogar);
          }}
        >
          <MdHome
            size={20}
            color={pantalla == Pantalla.Hogar ? "white" : "#7f7f7f"}
          />
        </div>
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Buscar);
          }}
        >
          <IoSearch
            size={20}
            color={pantalla == Pantalla.Buscar ? "white" : "#7f7f7f"}
          />
        </div>
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Actividad);
          }}
        >
          <TiHeart
            size={20}
            color={pantalla == Pantalla.Actividad ? "white" : "#7f7f7f"}
          />
        </div>
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Fabrica);
          }}
        >
          <MdFactory
            size={20}
            color={pantalla == Pantalla.Fabrica ? "white" : "#7f7f7f"}
          />
        </div>
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Perfil);
          }}
        >
          <MdOutlineManageAccounts
            size={20}
            color={pantalla == Pantalla.Perfil ? "white" : "#7f7f7f"}
          />
        </div>
      </div>
      <div className="relative w-fit h-fit flex items-center justify-center flex-col gap-4">
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setAbrirFijado(!abrirFijado);
          }}
        >
          <MdPushPin size={20} color={abrirFijado ? "white" : "#7f7f7f"} />
        </div>
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setPantalla(Pantalla.Marcadores);
          }}
        >
          <IoBookmarkSharp
            size={20}
            color={pantalla == Pantalla.Marcadores ? "white" : "#7f7f7f"}
          />
        </div>
      </div>
      {abrirFijado && (
        <div
          className="absolute bottom-10 z-10 left-12 w-48 h-60 flex items-start justify-between flex flex-col bg-gris rounded-md p-2 gap-3"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div className="relative w-full h-fit text-sm text-white text-center">
            {dict.Home.pin}
          </div>
          <input
            className="rounded-full w-full flex h-7 px-1 py-px text-left border border-white bg-black text-white text-xs"
            placeholder={dict.Home.searching}
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <div className="relative w-full h-full flex overflow-y-scroll">
            <div className="relative w-full h-fit flex flex-col gap-3 justify-center items-start">
              {Object.keys(Pantalla)
                .filter((key) => isNaN(Number(key)))
                .filter((key) =>
                  key.toLowerCase().includes(filtro.toLowerCase())
                )
                .map((pagina, indice) => (
                  <div
                    key={indice}
                    className={`relative w-full h-fit flex text-sm cursor-pointer hover:opacity-80 ${
                      fijado.includes(indice) ? "text-ligero" : "text-white"
                    }`}
                    onClick={() => {
                      setFijado(
                        fijado.includes(indice)
                          ? fijado.filter((e) => e !== indice)
                          : [...fijado, indice]
                      );
                    }}
                  >
                    {dict.Home[pagina as keyof typeof Pantalla]}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bar;
