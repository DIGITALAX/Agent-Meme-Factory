import { useState } from "react";
import { OpcionActividad } from "../types/common.types";
import { usePublications } from "@lens-protocol/react-web";

const useActividad = (profileId: string | undefined) => {
  const [opcion, setOpcion] = useState<OpcionActividad>(OpcionActividad.Todo);
  const [opcionAbierta, setOpcionAbierta] = useState<boolean>(false);

  const { data: actividad = [], loading: actividadCargando } = profileId
    ? usePublications({
        where: {
          from: profileId as any,
        },
      })
    : { data: [], loading: false };

  return {
    opcion,
    setOpcion,
    opcionAbierta,
    setOpcionAbierta,
    actividadCargando,
    actividad,
  };
};

export default useActividad;
