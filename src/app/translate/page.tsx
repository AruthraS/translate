"use client"
import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(script);
    };

    const initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = initGoogleTranslate;
    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element">Aruthra</div>;
};

export default GoogleTranslate;
