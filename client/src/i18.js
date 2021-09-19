import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";
// import "bootstrap/dist/js/bootstrap.js";
// import App from "App.js";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "flag-icon-css/css/flag-icon.min.css";

import English from "assets/locals/en/translation.json";
import Tamil from "assets/locals/ta/translation.json";
import Sinhala from "assets/locals/sn/translation.json";

const resources = {
    en : {translation:English},
    ta : {translation:Tamil},
    sn : {translation:Sinhala},


}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator : false,
    interpolation : {escapeValue:false}
    
  });
  console.log (i18n)

  export default i18n;
