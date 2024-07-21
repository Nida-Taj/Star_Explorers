import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; 

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setShowDropdown(false);
    };

    return (
        <div className="language-switcher">
            <button className="language-switcher-button" onClick={toggleDropdown}>
                <i className="fas fa-globe"></i>
            </button>
            {showDropdown && (
                <div className="dropdown-menu">
                    <button onClick={() => handleLanguageChange('en')}>English</button>
                    <button onClick={() => handleLanguageChange('fr')}>Français</button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
