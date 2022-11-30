import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar-assets/logo-white.svg";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);

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
        <p>DESTINATIONS</p>
        <p>BLOG</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
}

export default Navbar;
