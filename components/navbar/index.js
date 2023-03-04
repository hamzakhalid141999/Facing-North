import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar-assets/logo-white.svg";
import Link from "next/link";
import SlidingPanel, { PanelType } from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import menu from "../../public/assets/navbar-assets/menu.svg";

function Navbar() {
  const router = useRouter();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);
  const [panelSize, setPanelSize] = useState(60);
  const [panelType, setPanelType] = useState("left");

  let listener = null;

  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (backgroundColor !== "opaque") {
            setBackgroundColor("opaque");
          }
        } else {
          if (backgroundColor !== "transparent") {
            setBackgroundColor("transparent");
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div
      className={
        isNavbarVisisbleFromTop
          ? classes.navbar_body_opaque
          : backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <SlidingPanel
        type={"left"}
        isOpen={openPanel}
        backdropClicked={() => setOpenPanel(false)}
        size={panelSize}
        panelClassName="additional-class"
        panelContainerClassName=""
        noBackdrop={noBackdrop}
      >
        <div className={classes.panel_container}>
          <img src={logo.src} />

          <p>ABOUT</p>
          <p>SERVICES</p>
          <p>TOUR PACKAGES</p>
          <p>DESTINATIONS</p>
          <p>BLOGS</p>
          <p>CONTACT</p>
        </div>
      </SlidingPanel>
      <img
        onClick={() => setOpenPanel(true)}
        src={menu.src}
        className={classes.menu_icon}
      />

      <div className={classes.left_panel}>
        <Link href={"/"}>
          <img className={classes.logo} src={logo.src} />
        </Link>
      </div>
      <div className={classes.right_panel}>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICES</p>
        <p>TOUR PACKAGES</p>
        <Link href={"/destination_detail"}>
          <p>DESTINATIONS</p>
        </Link>

        <p>BLOG</p>
        <Link href={"/contact"}>
          <p>CONTACT</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
