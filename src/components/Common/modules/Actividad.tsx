import { FunctionComponent } from "react";
import {
  ActividadProps,
  OpcionActividad,
  Pantalla,
} from "../types/common.types";
import { RiUnpinFill } from "react-icons/ri";
import useActividad from "../hooks/useActividad";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import { TbLoaderQuarter } from "react-icons/tb";
import ActividadCambio from "@/components/Lens/modules/ActividadCambio";

const Actividad: FunctionComponent<ActividadProps> = ({
  dict,
  setFijado,
  depin,
  cuenta,
}): JSX.Element => {
  const {
    opcion,
    opcionAbierta,
    setOpcion,
    setOpcionAbierta,
    actividad,
    actividadCargando,
  } = useActividad(cuenta?.lens?.id);
  const router = useRouter();
  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm flex flex-row gap-3 text-white w-fit h-10 text-center">
        <div className="relative w-fit h-fit flex">{dict.Home[opcion]}</div>
        <div className="flex relative w-fit h-fit">
          <IoIosArrowDropdownCircle
            size={20}
            className={`hover:fill-white fill-nubes cursor-pointer`}
            onClick={() => setOpcionAbierta(!opcionAbierta)}
          />
          {opcionAbierta && (
            <div className="absolute rounded-md -left-28 top-7 p-2.5 z-20 gap-5 bg-nubes w-40 h-fit flex flex-col items-start justify-start">
              {Object.keys(OpcionActividad)
                .filter((key) => isNaN(Number(key)))
                .map((elemento, indice) => {
                  return (
                    <div
                      key={indice}
                      className={`text-black text-sm relative w-full text-left flex h-fit cursor-pointer hover:opacity-50 ${
                        elemento == opcion && "opacity-70"
                      }`}
                      onClick={() => {
                        setOpcion(
                          OpcionActividad[
                            elemento as keyof typeof OpcionActividad
                          ]
                        );
                        setOpcionAbierta(false);
                      }}
                    >
                      {dict.Home[elemento as keyof typeof OpcionActividad]}
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
            setFijado((prev) => prev.filter((e) => e !== Pantalla.Actividad))
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
        <div className="relative w-full h-full overflow-y-scroll items-start justify-start flex">
          {actividadCargando ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <TbLoaderQuarter
                className="animate-spin"
                color="#454545"
                size={40}
              />
            </div>
          ) : (
            <div className="relative w-full h-fit flex flex-col items-center justify-start gap-4">
              {Number(actividad?.length || 0) < 1 ? (
                <div className="relative w-fit h-fit flex items-center justify-center text-white text-xxs py-4 px-2">
                  {dict.Home.actividadvacia}
                </div>
              ) : (
                actividad?.map((actividad, indice: number) => {
                  return (
                    <ActividadCambio
                      key={indice}
                      actividad={actividad}
                      router={router}
                    />
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actividad;
