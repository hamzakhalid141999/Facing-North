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

  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      console.log(page);
      setCurrentPage(page);
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
          : (currentPage[1] === "blogs" && currentPage?.length === 3) ||
            currentPage[1] === "destinations"
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

          <p
            onClick={() => {
              router.push("/faq");
              setOpenPanel(false);
            }}
          >
            FAQ
          </p>

          <p
            onClick={() => {
              router.push("/");
              setOpenPanel(false);
            }}
          >
            HOME
          </p>

          <p
            onClick={() => {
              router.push("/about");
              setOpenPanel(false);
            }}
          >
            ABOUT
          </p>

          <p
            onClick={() => {
              router.push("/services");
              setOpenPanel(false);
            }}
          >
            SERVICES
          </p>

          <p
            onClick={() => {
              router.push("/package_tour");
              setOpenPanel(false);
            }}
          >
            TOUR PACKAGES
          </p>

          <p
            onClick={() => {
              router.push("/destinations");
              setOpenPanel(false);
            }}
          >
            DESTINATIONS
          </p>

          <p
            onClick={() => {
              router.push("/blogs");
              setOpenPanel(false);
            }}
          >
            BLOG
          </p>

          <p
            onClick={() => {
              router.push("/contact");
              setOpenPanel(false);
            }}
          >
            CONTACT
          </p>
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
        <Link href={"/about"}>
          <p>ABOUT</p>
        </Link>
        <Link href={"/faq"}>
          <p>FAQ</p>
        </Link>

        {/* <p>ABOUT</p> */}
        <Link href={"/services"}>
          <p>SERVICES</p>
        </Link>

        <Link href={"/package_tour"}>
          <p>TOUR PACKAGES</p>
        </Link>

        <Link href={"/destinations"}>
          <p>DESTINATIONS</p>
        </Link>

        <Link href={"/blogs"}>
          <p>BLOG</p>
        </Link>
        <Link href={"/contact"}>
          <p>CONTACT</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
