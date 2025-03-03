import React from "react";

const Footer = () => {
  const theme = "Dark";

  const year = new Date();

  return (
    <footer>
      <div className="address">
        <div className={`content ${theme}`}>
          <h2 className="h2_footer">ChabinDev</h2>
          <p className="p_footer">Nantes</p>
          <p className="p_footer">Développeur Web Junior - Freelance</p>
        </div>
      </div>
      <div className={`credits '${theme}`}>
        <p className="p_footer">France - {year.getFullYear()} © - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;