import { FunctionComponent } from "react";
import { ActividadCambioProps } from "../types/lens.types";

const ActividadCambio: FunctionComponent<ActividadCambioProps> = ({
  actividad,
  router,
}): JSX.Element => {
  switch (actividad?.__typename) {
    case "Comment":
    case "Mirror":
    case "Post":
    case "Quote":
    default:
      return <div></div>;
  }
};

export default ActividadCambio;
