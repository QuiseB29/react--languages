// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      "Post List": "Post List",
      "Loading...": "Loading...",
      "Error": "An error occurred",
      "No Posts": "No posts available",
      "Select User": "Select User",
      "All Users": "All Users"

    }
  },
  es: {
    translation: {
      "Post List": "Lista de Publicaciones",
      "Loading...": "Cargando...",
      "Error": "Ocurrió un error",
      "No Posts": "No hay publicaciones disponibles",
      "Select User": "Seleccionar Usuario",
      "All Users": "Todos los Usuarios"

    }
  },
  fr: {
    translation: {
        "Post List": "Liste des articles",
        "Loading...": "Chargement",
        "Error": "Erreur",
        "No Posts": "Aucun message",
        "Select User": "Sélectionner un utilisateur",
        "All Users": "Tous les utilisateurs"
    }
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init ({

    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['querystring', 'cookie', 'localstorage', 'sessionsStore', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie']

    }, 
    backend : {
        loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
        escapeValue: false,
    },
  });

  export default i18n;  
