import { useState } from "react";
import { Opcion } from "../types/common.types";
import {
  ExplorePublicationsOrderByType,
  useExplorePublications,
  useFeed as useLensFeed,
  useBookmarks,
  FeedEventItemType,
  usePublications,
} from "@lens-protocol/react-web";

const useFeed = (perfilId: string | undefined) => {
  const [opcion, setOpcion] = useState<Opcion>(Opcion.ParaTi);
  const [opcionAbierta, setOpcionAbierta] = useState<boolean>(false);

  const { data: explorar = [], loading: explorarCargando } =
    useExplorePublications({
      orderBy: ExplorePublicationsOrderByType.LensCurated,
    });

  const { data: feed = [], loading: feedCargando } = perfilId
    ? opcion == Opcion.Tuyas
      ? usePublications({
          where: {
            from: perfilId as any,
          },
        })
      : useLensFeed(
          opcion == Opcion.ParaTi
            ? {
                where: {
                  for: perfilId as any,
                },
              }
            : {
                where: {
                  for: perfilId as any,
                  feedEventItemTypes: [FeedEventItemType.Reaction],
                },
              }
        )
    : { data: [], loading: false };

  const { data: marcadores = [], loading: marcadoresCargando } = perfilId
    ? useBookmarks({})
    : { data: [], loading: false };

  return {
    opcion,
    setOpcion,
    opcionAbierta,
    setOpcionAbierta,
    feedCargando,
    feed,
    explorar,
    explorarCargando,
    marcadoresCargando,
    marcadores,
  };
};

export default useFeed;
