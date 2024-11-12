import { useState } from "react";

const useBuscar = () => {
  const [buscar, setBuscar] = useState<string>("");
  const [buscarCargando, setBuscarCargando] = useState<boolean>(false);
  const [resultados, setResultados] = useState<[]>([]);

  const manejarBuscar = async () => {
    setBuscarCargando(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setBuscarCargando(false);
  };

  return {
    buscar,
    setBuscar,
    buscarCargando,
    manejarBuscar,
    resultados,
  };
};

export default useBuscar;
