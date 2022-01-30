import React, { useContext } from "react";
import { NavContext } from "./NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document
      .getElementById(scrollToId)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="uppercase items-center cursor-pointer text-center">
      <span
        id={navLinkId}
        className={
          activeNavLinkId === navLinkId
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        }
        aria-hidden="true"
        onClick={handleClick}
      >
        {navLinkId}
      </span>
    </section>
  );
};

export default NavLink;
