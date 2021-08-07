import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.icon}
        href="https://github.com/parkbx00/todo-app"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <p className="footer__rights">
        BRIAN PARK <span className={styles.highlight}>©2021</span>
      </p>
    </footer>
  );
}

export default React.memo(Footer);
