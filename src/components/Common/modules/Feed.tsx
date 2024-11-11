import { FunctionComponent } from "react";
import { FeedProps, Pantalla } from "../types/common.types";
import { RiUnpinFill } from "react-icons/ri";
import Fijado from "./Fijado";

const Feed: FunctionComponent<FeedProps> = ({
  titulo,
  setFijado,
  depin,
}): JSX.Element => {

  return (
    <div className="relative w-100 flex flex-col gap-3 items-center justify-start h-full">
      <div className="relative text-sm text-white w-fit h-10 text-center">
        {titulo}
      </div>
      {depin && (
        <div
          className="absolute cursor-pointer right-0 justify-center items-center"
          onClick={() =>
            setFijado((prev) => {
              const arr = prev.filter((e) => e !== Pantalla.Marcadores);
              return arr;
            })
          }
        >
          <RiUnpinFill size={15} className={`hover:fill-white fill-nubes`} />
        </div>
      )}
      <div className="relative bg-gris w-full flex flex-col gap-8 items-center justify-start p-3 rounded-lg h-full">
        <div className="relative w-full h-full overflow-y-scroll flex">
          <div className="relative w-full h-fit flex items-start justify-center flex-col gap-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
