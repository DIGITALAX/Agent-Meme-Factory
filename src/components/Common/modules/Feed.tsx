import { FunctionComponent } from "react";
import { FeedProps, Opcion, Pantalla } from "../types/common.types";
import { RiUnpinFill } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import useFeed from "../hooks/useFeed";
import { TbLoaderQuarter } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";

const Feed: FunctionComponent<FeedProps> = ({
  titulo,
  setFijado,
  dict,
  depin,
  setPublicar,
  conectado,
  setMostrarConexion,
}): JSX.Element => {
  const {
    opcion,
    setOpcion,
    opcionAbierta,
    setOpcionAbierta,
    feed,
    feedCargando,
    manejarFeed,
  } = useFeed();
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm flex flex-row gap-3 text-white w-fit h-10 text-center">
        <div
          className="relative w-fit h-fit flex cursor-pointer"
          onClick={() => manejarFeed()}
        >
          {titulo !== dict.Home.Marcadores ? dict.Home[opcion] : titulo}
        </div>
        <div className="flex relative w-fit h-fit">
          <IoIosArrowDropdownCircle
            size={20}
            className={`hover:fill-white fill-nubes cursor-pointer`}
            onClick={() => setOpcionAbierta(!opcionAbierta)}
          />
          {opcionAbierta && (
            <div className="absolute rounded-md -left-28 top-7 p-2.5 z-20 gap-5 bg-nubes w-40 h-fit flex flex-col items-start justify-start">
              {Object.keys(Opcion)
                .filter((key) => isNaN(Number(key)))
                .map((elemento, indice) => {
                  return (
                    <div
                      key={indice}
                      className={`text-black text-sm relative w-full text-left flex h-fit cursor-pointer hover:opacity-50 ${
                        elemento == opcion && "opacity-70"
                      }`}
                      onClick={() => {
                        setOpcion(Opcion[elemento as keyof typeof Opcion]);
                        setOpcionAbierta(false);
                      }}
                    >
                      {dict.Home[elemento as keyof typeof Opcion]}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      {depin && (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => {
              const arr = prev.filter((e) => e !== Pantalla.Marcadores);
              return arr;
            })
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
        <div
          className="relative w-full h-12 items-center justify-start bg-negro px-2 py-px flex cursor-pointer border border-gris rounded-md"
          onClick={() =>
            conectado ? setPublicar(true) : setMostrarConexion(true)
          }
        >
          <div className="w-full flex text-left text-white text-xs opacity-50">
            {dict.Home.publicar}
          </div>
          <div className="absolute flex rounded-md bg-ligero bottom-3 right-3 w-5 items-center justify-center h-5">
            <LuPlus color="white" opacity={80} size={15} />
          </div>
        </div>
        <div className="relative w-full h-full overflow-y-scroll items-start justify-start flex">
          {feedCargando ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <TbLoaderQuarter
                className="animate-spin"
                color="#454545"
                size={40}
              />
            </div>
          ) : (
            <div className="relative w-full h-fit flex flex-col items-start justify-start">
              {feed?.map((elemento, indice: number) => {
                return <div key={indice}></div>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
