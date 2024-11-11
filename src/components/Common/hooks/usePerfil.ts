import { useState } from "react";

const usePerfil = () => {
  const [copiado, setCopiado] = useState(false);

  return {
    copiado,
    setCopiado,
  };
};

export default usePerfil;
