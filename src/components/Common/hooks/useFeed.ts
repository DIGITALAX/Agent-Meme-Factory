import { useEffect, useState } from "react";
import { Opcion } from "../types/common.types";

const useFeed = () => {
  const [opcion, setOpcion] = useState<Opcion>(Opcion.ParaTi);
  const [opcionAbierta, setOpcionAbierta] = useState<boolean>(false);
  const [feedCargando, setFeedCargando] = useState<boolean>(false);
  const [feed, setFeed] = useState<[]>([]);

  const manejarFeed = async () => {
    setFeedCargando(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setFeedCargando(false);
  };

  useEffect(() => {
    manejarFeed();
  }, [opcion]);

  return {
    opcion,
    setOpcion,
    opcionAbierta,
    setOpcionAbierta,
    feedCargando,
    feed,
    manejarFeed,
  };
};

export default useFeed;
