import { FunctionComponent } from "react";
import { Fabrica, FabricaCambioProps } from "../types/common.types";
import Moneda from "./Moneda";
import Pegatinas from "./Pegatinas";
import Ropa from "./Ropa";
import Memes from "./Memes";

const FabricaCambio: FunctionComponent<FabricaCambioProps> = ({
  fabrica,
}): JSX.Element => {
  switch (fabrica) {
    case Fabrica.Moneda:
      return <Moneda />;

    case Fabrica.Pegatinas:
      return <Pegatinas />;

    case Fabrica.Ropa:
      return <Ropa />;

    default:
      return <Memes />;
  }
};

export default FabricaCambio;
