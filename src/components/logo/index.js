import React from "react";
import LogoSvg from "assets/images/logo-bookmark.svg";

function Logo({ light }) {
   return (
      <a href="/" aria-label="logo" style={{ color: light ? "var(--cl-white)" : "var(--cl-neutral-2)" }}>
         <LogoSvg aria-hidden="true" />
      </a>
   );
}

export default Logo;
