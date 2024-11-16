import { useState } from "react";
import {
  useSearchPublications,
  useSearchProfiles,
} from "@lens-protocol/react-web";

const useBuscar = () => {
  const [buscar, setBuscar] = useState<string>("");
  const [cambio, setCambio] = useState<number>(0);
  const { data: perfiles, loading: perfilesCargando } = useSearchProfiles({
    query: buscar,
  });
  const { data: publicaciones, loading: publicacionesCargando } =
    useSearchPublications({ query: buscar });

  return {
    buscar,
    setBuscar,
    publicacionesCargando,
    perfilesCargando,
    perfiles,
    publicaciones,
    cambio,
    setCambio,
  };
};

export default useBuscar;
