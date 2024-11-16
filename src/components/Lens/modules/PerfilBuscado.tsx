import { FunctionComponent } from "react";
import { PerfilBuscadoProps } from "../types/lens.types";
import Image from "next/legacy/image";
import createProfilePicture from "@/lib/helpers/createProfilePicture";

const PerfilBuscado: FunctionComponent<PerfilBuscadoProps> = ({
  router,
  perfil,
}): JSX.Element => {
  const pfp = createProfilePicture(perfil?.metadata?.picture as any);
  return (
    <div
      className="relative w-full h-fit px-2 py-2 rounded-md bg-ligero flex flex-row cursor-pointer items-center justify-between"
      onClick={() => router.push(`profile/${perfil?.handle?.localName}`)}
    >
      <div className="relative bg-negro w-16 h-16 rounded-full bg-ligero border-2 border-ligero">
        {pfp !== "" && pfp && (
          <Image
            draggable={false}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={pfp}
            alt="pfp"
          />
        )}
      </div>
      <div className="relative w-fit h-fit flex items-end justify-end flex-col gap-1">
        <div className="relative text-white text-lg flex text-right">
          {perfil?.metadata?.displayName}
        </div>
        <div className="relative text-white text-xs flex text-right">
          @{perfil?.handle?.localName}
        </div>
      </div>
    </div>
  );
};

export default PerfilBuscado;
