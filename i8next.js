import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-locize-backend"

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
    backend: {
        projectId: "b999b843-f417-44f1-9d08-fcc593a82aa0",
        apiKey: "ac413edd-b427-4697-a358-a7502aab48db"
    }
})