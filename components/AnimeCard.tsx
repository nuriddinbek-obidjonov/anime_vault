import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <div className="relative rounded w-full max-w-sm">
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.image.original}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 py-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="w-full font-bold text-white text-xl line-clamp-1">
            {anime.name}
          </h2>
          <div className="bg-[#161921] px-2 py-1 rounded-sm">
            <p className="font-bold text-white text-sm capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold text-white text-base">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="font-bold text-[#FFAD49] text-base">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
