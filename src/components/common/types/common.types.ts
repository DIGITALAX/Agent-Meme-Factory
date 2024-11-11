import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SetStateAction } from "react";

export enum Pantalla {
  Hogar,
  Marcadores,
  Buscar,
  Actividad,
  Perfil,
  Fabrica,
}

export enum Fabrica {
  Memes = "Memes",
  Ropa = "Ropa",
  Pegatinas = "Pegatinas",
  Moneda = "Moneda",
}

export type FeedProps = {
  titulo: string;
};

export type PerfilProps = {
  dict: Dictionary;
};

export type BuscarProps = {
  dict: Dictionary;
};

export type ActividadProps = {
  dict: Dictionary;
};

export type CambioProps = {
  pantalla: Pantalla;
  setPantalla: (e: SetStateAction<Pantalla>) => void;
  fijado: Pantalla[];
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  dict: Dictionary;
  fabrica: Fabrica;
  setFabrica: (e: SetStateAction<Fabrica>) => void;
};

export type BarProps = {
  pantalla: Pantalla;
  setPantalla: (e: SetStateAction<Pantalla>) => void;
  abrirFijado: boolean;
  setAbrirFijado: (e: SetStateAction<boolean>) => void;
  dict: Dictionary;
  fijado: Pantalla[];
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  filtro: string;
  setFiltro: (e: SetStateAction<string>) => void;
  router: AppRouterInstance;
};

export type Dictionary = {
  Home: {
    pin: string;
    Hogar: string;
    Marcadores: string;
    Buscar: string;
    foryou: string;
    Actividad: string;
    Perfil: string;
    Fabrica: string;
    searching: string;
  };
  "404": {
    nada: string;
  };
};

export type FabricaCambioProps = {
  fabrica: Fabrica;
};
