import { FunctionComponent } from "react";
import { PublicacionBuscadaProps } from "../types/lens.types";
import moment from "moment";
import createProfilePicture from "@/lib/helpers/createProfilePicture";
import Image from "next/legacy/image";

const PublicacionBuscada: FunctionComponent<PublicacionBuscadaProps> = ({
  router,
  publicacion,
}): JSX.Element => {
  const pfp = createProfilePicture(publicacion?.by?.metadata?.picture as any);
  return (
    <div
      className="relative w-full h-fit flex flex-col gap-2 items-start justify-start bg-ligero p-2 cursor-pointer rounded-md"
      onClick={() => router.push(`publication/${publicacion?.id}`)}
    >
      <div className="relative w-full h-fit flex items-center justify-between flex-row">
        <div className="relative w-fit h-fit flex items-center justify-center gap-2">
          <div className="relative bg-negro w-6 h-6 rounded-full bg-ligero border-2 border-ligero">
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
          <div className="relative text-white text-xs flex text-right">
            @{publicacion?.by?.handle?.localName}
          </div>
        </div>
        <div
          className={`relative w-fit h-fit flex items-center justify-start font-bit text-xxs text-white`}
        >
          {publicacion?.createdAt &&
            moment(`${publicacion?.createdAt}`).fromNow()}
        </div>
      </div>
      {(publicacion?.metadata as any)?.content && (
        <div className="relative bg-negro text-white border border-white rounded-md p-2.5 w-full h-fit overflow-y-scroll text-sm">
          {(publicacion?.metadata as any)?.content?.slice(0, 200) + "..."}
        </div>
      )}
    </div>
  );
};

export default PublicacionBuscada;
