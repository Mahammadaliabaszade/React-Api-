import React from "react";

const Header = () => {
  const ChangeCol = () => {
    const changecolor = document.querySelector(".fa-moon");
    changecolor.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  };

  return (
    <header className="header">
      <div>
        <h1 className="textworld">Where in the world</h1>
      </div>
      <div>
        <h3 className="icontext">
          <i className="fas fa-moon" onClick={() => ChangeCol()}>
            Two click moon click please
          </i>
        </h3>
      </div>
    </header>
  );
};

export default Header;
