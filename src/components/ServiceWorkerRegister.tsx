"use client";

import { useEffect } from "react";

/**
 * Enregistre le service worker (offline). Actif en production uniquement :
 * en dev, un SW qui met en cache gêne le hot-reload.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch(() => {
          /* silencieux : l'app reste utilisable sans SW */
        });
    };

    if (document.readyState === "complete") register();
    else {
      window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
