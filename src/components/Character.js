import React, { useContext } from "react";
import clsx from "clsx";
import ThemeContext from "../contexts/Theme";

const Character = ({ id, name, image, species, status, gender, origin, location }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <article key={id} className="group relative rounded-2 max-w-max placeholder:border-blue-400">
      <div className="px-4 absolute translate-y-60 group-hover:translate-y-0 group-hover:grid inset-0 bg-black/75 place-content-center hidden">
        <p className="text-center" >
          <span className="font-bold text-white" >Especie:</span>
          <span className="text-white" >{' '}{species}</span>
        </p>
        <p className="text-center">
          <span className="font-bold text-white">Estado</span>
          <span className="text-white">{' '}{status}</span>
        </p>
        <p className="text-center">
          <span className="font-bold text-white">Género</span>
          <span className="text-white">{' '}{gender}</span>
        </p>
        <p className="text-center">
          <span className="font-bold text-white">Origen</span>
          <span className="text-white">{' '}{origin.name}</span>
        </p>
        <p className="text-center">
          <span className="font-bold text-white">Ubicación</span>
          <span className="text-white">{' '}{location.name}</span>
        </p>
      </div>
      <img src={image} alt={name} className="w-full" />
      <p
        className={clsx("font-bold text-center", {
          "text-white": darkMode,
          "text-black": !darkMode,
        })}
      >
        {name}
      </p>
    </article>
  );
};

export default Character;
