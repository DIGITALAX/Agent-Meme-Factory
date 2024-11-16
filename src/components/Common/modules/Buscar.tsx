import { FunctionComponent } from "react";
import { BuscarProps, Pantalla } from "../types/common.types";
import { RiUnpinFill } from "react-icons/ri";
import useBuscar from "../hooks/useBuscar";
import { TbLoaderQuarter } from "react-icons/tb";
import PublicacionBuscada from "@/components/Lens/modules/PublicacionBuscada";
import PerfilBuscado from "@/components/Lens/modules/PerfilBuscado";
import { PrimaryPublication, Profile } from "@lens-protocol/react-web";
import { useRouter } from "next/navigation";

const Buscar: FunctionComponent<BuscarProps> = ({
  dict,
  setFijado,
  depin,
}): JSX.Element => {
  const {
    setBuscar,
    buscar,
    perfiles,
    perfilesCargando,
    publicaciones,
    publicacionesCargando,
    cambio,
    setCambio,
  } = useBuscar();
  const router = useRouter();
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm text-white w-fit h-10 text-center">
        {dict.Home.Buscar}
      </div>
      {depin && (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => prev.filter((e) => e !== Pantalla.Buscar))
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
        <input
          className="rounded-md bg-negro w-full flex h-12 px-2 py-px text-left border border-gris text-white text-xs"
          placeholder={dict.Home.searching}
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        {(Number(perfiles?.length) > 0 ||
          Number(publicaciones?.length) > 0) && (
          <div className="relative w-full h-fit flex items-center justify-center flex-row text-sm text-white">
            <div
              onClick={() => setCambio(0)}
              className={`${
                !cambio && "bg-ligero"
              } relative w-fit rounded-sm h-fit cursor-pointer flex items-center justify-center px-3 py-1.5`}
            >
              {dict.Home.perfiles}
            </div>
            <div
              onClick={() => setCambio(1)}
              className={`${
                cambio && "bg-ligero"
              } relative rounded-sm w-fit h-fit cursor-pointer flex items-center justify-center  px-3 py-1.5`}
            >
              {dict.Home.publicaciones}
            </div>
          </div>
        )}
        <div className="relative w-full h-full overflow-y-scroll items-start justify-start flex">
          {perfilesCargando || publicacionesCargando ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <TbLoaderQuarter
                className="animate-spin"
                color="#454545"
                size={40}
              />
            </div>
          ) : (
            <div className="relative w-full h-fit flex flex-col items-start justify-start gap-4">
              {(!cambio ? perfiles : publicaciones)?.map(
                (elemento, indice: number) => {
                  return !cambio ? (
                    <PerfilBuscado
                      key={indice}
                      router={router}
                      perfil={elemento as Profile}
                    />
                  ) : (
                    <PublicacionBuscada
                      key={indice}
                      router={router}
                      publicacion={elemento as PrimaryPublication}
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buscar;
