import { SetStateAction } from "react";

const manejarCopiar = (
  texto: string,
  setCopiado: (e: SetStateAction<boolean>) => void
) => {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    })
    .catch((error) => {
      console.error("Error al copiar:", error);
    });
};

export default manejarCopiar;
