import React from "react";

const Footer = ({setLanguage, language}) => {


    return (
        <div>
            <h3>{language ==='vn' && 'Thực hiện bởi MindX Team'}{language ==='en' && 'Made by MindX'}🔥</h3>
            <div>
                <span>{language ==='vn' && 'Thay đổi ngôn ngữ:'}{language ==='en' && 'Change language:'}</span>
                <span className={`languague-picker ${language === 'vn' ? 'selected' : ''}`} onClick={()=> setLanguage('vn')}>🇻🇳</span>
                <span className={`languague-picker ${language === 'en' ? 'selected' : ''}`} onClick={()=> setLanguage('en')}>🇺🇸</span>
            </div>
        </div>
    );
};

export default Footer;
