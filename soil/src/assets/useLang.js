import { useState, useEffect } from "react";
import { data } from "./data";

export const useLang = () => {
  const [language, setLanguage] = useState("ko");
  const [currentData, setCurrentData] = useState(data[language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setCurrentData(data[lang]);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
      setCurrentData(data[savedLang]);
    }
  }, []);

  return { currentData, language, changeLanguage };
};

// // hooks/useLanguageData.js
// import { useState, useEffect } from 'react';
// import { translations } from '../locales/data';

// export const useLanguageData = () => {
//   const [language, setLanguage] = useState('ko');
//   const [data, setData] = useState(translations['ko']);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setData(translations[lang]);
//     localStorage.setItem('language', lang);
//   };

//   useEffect(() => {
//     const savedLang = localStorage.getItem('language');
//     if (savedLang) {
//       setLanguage(savedLang);
//       setData(translations[savedLang]);
//     }
//   }, []);

//   return { data, language, changeLanguage };
// };

// // components/LanguageSelector.js
// const LanguageSelector = ({ language, onChange }) => {
//   return (
//     <div className="language-selector">
//       <button
//         className={language === 'ko' ? 'active' : ''}
//         onClick={() => onChange('ko')}
//       >
//         한국어
//       </button>
//       <button
//         className={language === 'en' ? 'active' : ''}
//         onClick={() => onChange('en')}
//       >
//         English
//       </button>
//       <button
//         className={language === 'ja' ? 'active' : ''}
//         onClick={() => onChange('ja')}
//       >
//         日本語
//       </button>
//     </div>
//   );
// };

// // App.js 또는 최상위 컴포넌트
// const App = () => {
//   const { data, language, changeLanguage } = useLanguageData();

//   return (
//     <div>
//       <LanguageSelector
//         language={language}
//         onChange={changeLanguage}
//       />
//       {/* 기존 컴포넌트들에서는 data.top, data.top2 등으로 접근 */}
//     </div>
//   );
// };
