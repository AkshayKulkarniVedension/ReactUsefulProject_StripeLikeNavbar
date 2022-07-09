import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext();
  const container = useRef(null);
  useEffect(
    function () {
      const { center, bottom } = location;
      const submenu = container.current;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
    },
    [location]
  );

  return (
    <div
      className={`${isSubmenuOpen ? "submenu show" : `submenu`}`}
      ref={container}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center col-2`}>
        {page.links.map(function (link, index) {
          const { url, icon, label } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
