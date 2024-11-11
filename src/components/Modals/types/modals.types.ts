import {
  Cuenta,
  Dictionary,
  Pantalla,
} from "@/components/Common/types/common.types";
import { SetStateAction } from "react";

export type ConexionProps = {
  setMostrarConexion: (e: SetStateAction<boolean>) => void;
  dict: Dictionary;
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
  setPantalla: (e: SetStateAction<Pantalla>) => void;
};

export type QuemadoraProps = {
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
  cuenta: Cuenta | undefined;
  dict: Dictionary;
};
