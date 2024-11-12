import { useEffect, useState } from "react";
import { OpcionActividad } from "../types/common.types";

const useActividad = () => {
  const [opcion, setOpcion] = useState<OpcionActividad>(OpcionActividad.Todo);
  const [opcionAbierta, setOpcionAbierta] = useState<boolean>(false);
  const [actividadCargando, setActividadCargando] = useState<boolean>(false);
  const [actividad, setActividad] = useState<[]>([]);

  const manejarActividad = async () => {
    setActividadCargando(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setActividadCargando(false);
  };

  useEffect(() => {
    manejarActividad();
  }, [opcion]);

  return {
    opcion,
    setOpcion,
    opcionAbierta,
    setOpcionAbierta,
    actividadCargando,
    actividad,
    manejarActividad
  };
};

export default useActividad;
