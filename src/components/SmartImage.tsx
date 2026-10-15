"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image + skeleton shimmer tant que la photo n'est pas chargée.
 * Pensé pour les images `fill` : le skeleton remplit le parent (qui doit être
 * `relative overflow-hidden`), puis la photo apparaît en fondu au chargement.
 * Idéal sur connexion lente — pas de trou vide pendant le téléchargement.
 */
export function SmartImage({ className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <span aria-hidden className="skeleton absolute inset-0 z-0" />
      )}
      {/* alt est fourni par l'appelant via {...props} */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        // cas image déjà en cache : le load a pu se produire avant l'écoute
        ref={(node) => {
          if (node?.complete) setLoaded(true);
        }}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
