import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'header.home': 'Home',
      'header.news': 'News',
      'header.downloads': 'Downloads',
      'header.aboutUs': 'About Us',
      
      'footer.copyright': '© 2025 SunChaser. All rights reserved.',
      'footer.social': 'Follow us on social media',
      
      'home.title': 'SunChaser',
      'home.description': 'SunChaser, a game where you can save the world in a solarpunk universe!',
      
      'zone.solar.title': 'Sun Forest',
      'zone.solar.description': 'In this living and fabulous forest, people live by using solar power to create energy. You can find different villages, small forests, and a large power station. But stay alert... bandits lurk in the shadows.',
      'zone.wind.title': 'Wind Zone',
      'zone.wind.description': 'A large region focused on wind energy. You will travel between different islands by boat to meet new people and party. Every activity feels like a big celebration!',
      'zone.thermo.title': 'Train Valley',
      'zone.thermo.description': 'A hot and dry desert where only robots can work. In this western-style region, your car will be your best friend. Watch out for sunburn!',
      
      'download.title': 'Dowload the alpha for free',
      
      'about.title': 'Who are we ?',
      'about.description': 'Sacabam studio was founded in 2024 by four friends to create one game.\n Our objective is to create a game that can send a message for the planet and build a fun and interesting universe for all the players.',
      
      'news.title': 'News page',
      
      'notFound.title': 'Page Not Found',
      'notFound.backHome': 'Back to Home',
      
      'language.english': 'English',
      'language.french': 'Français',
      'language.selectLanguage': 'Select Language',
    }
  },
  fr: {
    translation: {
      'header.home': 'Accueil',
      'header.news': 'Actualités',
      'header.downloads': 'Téléchargements',
      'header.aboutUs': 'À Propos',
      
      'footer.copyright': '© 2025 SunChaser. Tous droits réservés.',
      'footer.social': 'Suivez-nous sur les réseaux sociaux',
      
      'home.title': 'SunChaser',
      'home.description': 'SunChaser, un jeu où vous pouvez sauver le monde dans un univers solarpunk !',
      
      'zone.solar.title': 'Forêt Solaire',
      'zone.solar.description': 'Dans cette forêt vivante et fabuleuse, les gens vivent en utilisant l\'énergie solaire pour créer de l\'énergie. Vous pouvez trouver différents villages, de petites forêts et une grande centrale électrique. Mais restez vigilant... des bandits rôdent dans l\'ombre.',
      'zone.wind.title': 'Zone Éolienne',
      'zone.wind.description': 'Une grande région axée sur l\'énergie éolienne. Vous voyagerez entre différentes îles en bateau pour rencontrer de nouvelles personnes et faire la fête. Chaque activité ressemble à une grande célébration !',
      'zone.thermo.title': 'Vallée des Trains',
      'zone.thermo.description': 'Un désert chaud et sec où seuls les robots peuvent travailler. Dans cette région de style western, votre voiture sera votre meilleure amie. Attention aux coups de soleil !',
      
      'download.title': 'Téléchargez l\'alpha gratuitement',
      
      'about.title': 'Qui sommes-nous ?',
      'about.description': 'Sacabam studio a été fondé en 2024 par quatre amis pour créer un jeu.\n Notre objectif est de créer un jeu qui puisse envoyer un message pour la planète et construire un univers amusant et intéressant pour tous les joueurs.',
      
      'news.title': 'Page d\'Actualités',
      
      'notFound.title': 'Page Non Trouvée',
      'notFound.backHome': 'Retour à l\'Accueil',
      
      'language.english': 'English',
      'language.french': 'Français',
      'language.selectLanguage': 'Sélectionner la langue',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
  });

export default i18n;
