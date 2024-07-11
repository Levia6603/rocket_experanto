import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./zh-TW.json";
import en from "./en-EN.json";

const resources = {
  English: {
    translation: en,
  },
  中文: {
    translation: zh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "English",
    fallbackLng: "中文",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
