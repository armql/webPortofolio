import React from "react";

export default function Avatar() {
  return (
    <div className="mt-4 flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-sky-400 sm:h-96 sm:w-96 lg:mt-0">
      <img
        src="https://media.licdn.com/dms/image/C4E03AQH7KDhUVO5guQ/profile-displayphoto-shrink_800_800/0/1629375864267?e=1707955200&v=beta&t=O_5T40BdUAb4IqukaSOc_zsd7MEdbHOAjD_CSdxqbWc"
        alt=""
        className="bg-clip-content object-contain"
      />
    </div>
  );
}
