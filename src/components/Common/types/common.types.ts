import { ethers } from "ethers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SetStateAction } from "react";
import { Profile } from "../../../../generated";
export enum Pantalla {
  Hogar,
  Marcadores,
  Buscar,
  Actividad,
  Perfil,
  Fabrica,
  ParaTi,
}

export enum OpcionActividad {
  Todo = "Todo",
  Respuestas = "Respuestas",
  Menciones = "Menciones",
  Citas = "Citas",
  Republicaciones = "Republicaciones",
  Solicitudes = "Solicitudes",
}

export enum Opcion {
  ParaTi = "ParaTi",
  Siguiendo = "Siguiendo",
  TeGusta = "TeGusta",
}

export enum Indexar {
  Inactivo = "inactivo",
  Exito = "exito",
  Indexando = "indexando",
}

export enum Fabrica {
  Memes = "Memes",
  Ropa = "Ropa",
  Pegatinas = "Pegatinas",
  Moneda = "Moneda",
}

export type FeedProps = {
  titulo: string;
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  depin?: boolean;
  dict: Dictionary;
  setPublicar: (e: SetStateAction<boolean>) => void;
  conectado: boolean;
  setMostrarConexion: (e: SetStateAction<boolean>) => void;
};

export type Cuenta = {
  quemadora?: ethers.HDNodeWallet | undefined;
  quemadoraAbierta?: boolean;
  farcaster?:
    | {
        fid?: number;
        pfpUrl?: string;
        username?: string;
        displayName?: string;
        bio?: string;
        custody?: `0x${string}`;
        verifications?: string[];
      }
    | undefined;
  farcasterAbierto?: boolean;
  lens?: Profile | undefined;
  lensAbierto?: boolean;
  direccion?: `0x${string}` | undefined;
};

export type PerfilProps = {
  dict: Dictionary;
  cuenta: Cuenta | undefined;
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
  depin?: boolean;
};

export type BuscarProps = {
  dict: Dictionary;
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  depin?: boolean;
};

export type ActividadProps = {
  dict: Dictionary;
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  depin?: boolean;
};

export type CambioProps = {
  pantalla: Pantalla;
  setPantalla: (e: SetStateAction<Pantalla>) => void;
  fijado: Pantalla[];
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
  dict: Dictionary;
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
  fabrica: Fabrica;
  setFabrica: (e: SetStateAction<Fabrica>) => void;
  cuenta: Cuenta | undefined;
  conectado: boolean;
  setPublicar: (e: SetStateAction<boolean>) => void;
  setMostrarConexion: (e: SetStateAction<boolean>) => void;
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
  conectado: boolean;
  setMostrarConexion: (e: SetStateAction<boolean>) => void;
};

export type Dictionary = {
  Home: {
    pin: string;
    aleatorio: string;
    publicar: string;
    reiniciar: string;
    clave: string;
    Siguiendo: string;
    TeGusta: string;
    social: string;
    billetera: string;
    conexion: string;
    Hogar: string;
    copiado: string;
    Marcadores: string;
    Buscar: string;
    ParaTi: string;
    Actividad: string;
    Perfil: string;
    Fabrica: string;
    searching: string;
    Todo: string;
    Respuestas: string;
    Menciones: string;
    Citas: string;
    Republicaciones: string;
    Solicitudes: string;
  };
  "404": {
    nada: string;
  };
};

export type FabricaCambioProps = {
  fabrica: Fabrica;
};

export type FijadoProps = {
  elemento: Pantalla;
  conectado: boolean;
  setPublicar: (e: SetStateAction<boolean>) => void;
  setMostrarConexion: (e: SetStateAction<boolean>) => void;
  dict: Dictionary;
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
  fabrica: Fabrica;
  setFabrica: (e: SetStateAction<Fabrica>) => void;
  cuenta: Cuenta | undefined;
  setFijado: (e: SetStateAction<Pantalla[]>) => void;
};
