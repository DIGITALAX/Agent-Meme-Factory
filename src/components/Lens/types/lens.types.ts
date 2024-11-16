import {
  AnyPublication,
  Comment,
  ExplorePublication,
  Post,
  PrimaryPublication,
  Profile,
  Quote,
} from "@lens-protocol/react-web";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type PerfilBuscadoProps = { router: AppRouterInstance; perfil: Profile };

export type PublicacionBuscadaProps = {
  router: AppRouterInstance;
  publicacion: PrimaryPublication;
};

export type PublicacionProps = {
  router: AppRouterInstance;
  publicacion: Post | Quote | Comment | ExplorePublication | AnyPublication;
};

export type ActividadCambioProps = {
  actividad: AnyPublication;
  router: AppRouterInstance;
};
