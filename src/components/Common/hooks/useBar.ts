import { useEffect, useState } from "react";
import { Fabrica, Pantalla } from "../types/common.types";

const useBar = () => {
  const [abrirFijado, setAbrirFijado] = useState<boolean>(false);
  const [fijado, setFijado] = useState<Pantalla[]>([Pantalla.Hogar]);
  const [filtro, setFiltro] = useState<string>("");
  const [fabrica, setFabrica] = useState<Fabrica>(Fabrica.Memes);

  return {
    fijado,
    setFijado,
    abrirFijado,
    setAbrirFijado,
    filtro,
    setFiltro,
    fabrica,
    setFabrica,
  };
};

export default useBar;
