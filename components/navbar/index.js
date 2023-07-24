import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar-assets/logo-white.png";
import logo_green from "../../public/assets/navbar-assets/logo-green.png";
import Link from "next/link";
import SlidingPanel, { PanelType } from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import menu from "../../public/assets/navbar-assets/menu.svg";
import menu_green from "../../public/assets/navbar-assets/menu_green.svg";

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

  console.log("backgroundColor: ", backgroundColor);

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
              router.push("/");
              setOpenPanel(false);
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/about");
              setOpenPanel(false);
            }}
          >
            About
          </p>
          <p
            onClick={() => {
              router.push("/faq");
              setOpenPanel(false);
            }}
          >
            Faq
          </p>
          <p
            onClick={() => {
              router.push("/services");
              setOpenPanel(false);
            }}
          >
            Services
          </p>
          <p
            onClick={() => {
              router.push("/package_tour");
              setOpenPanel(false);
            }}
          >
            Tour Packages
          </p>
          <p
            onClick={() => {
              router.push("/destinations");
              setOpenPanel(false);
            }}
          >
            Destinations
          </p>
          <p
            onClick={() => {
              router.push("/blogs");
              setOpenPanel(false);
            }}
          >
            Blog
          </p>
          <p
            onClick={() => {
              router.push("/contact_form");
              setOpenPanel(false);
            }}
          >
            Contact
          </p>
        </div>
      </SlidingPanel>
      <img
        onClick={() => setOpenPanel(true)}
        src={backgroundColor === "opaque" ? menu_green.src : menu.src}
        className={classes.menu_icon}
      />

      <div className={classes.left_panel}>
        <Link href={"/"}>
          <img
            className={classes.logo}
            src={backgroundColor === "opaque" ? logo_green.src : logo.src}
          />
        </Link>
      </div>
      <div className={classes.right_panel}>
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <Link href={"/faq"}>
          <p>Faq</p>
        </Link>

        {/* <p>ABOUT</p> */}
        <Link href={"/services"}>
          <p>Services</p>
        </Link>

        <Link href={"/package_tour"}>
          <p>Tour Packages</p>
        </Link>

        <Link href={"/destinations"}>
          <p>Destinations</p>
        </Link>

        <Link href={"/blogs"}>
          <p>Blog</p>
        </Link>
        <Link href={"/contact_form"}>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
