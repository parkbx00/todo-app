import React, { Component } from "react";
import styles from "./ThemeToggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

class ThemeToggle extends Component {
  checkboxRef = React.createRef();

  state = {
    theme: "",
    icon: "",
  };

  switchToggle = () => {
    this.checkboxRef.current.checked
      ? this.setState({ ...this.state, theme: "dark", icon: "moon" })
      : this.setState({ ...this.state, theme: "light", icon: "sun" });
  };

  componentDidMount() {
    if (localStorage.getItem("theme") && localStorage.getItem("icon")) {
      this.setState({
        ...this.state,
        theme: localStorage.getItem("theme"),
        icon: localStorage.getItem("icon"),
      });
      localStorage.getItem("theme") === "dark"
        ? (this.checkboxRef.current.checked = true)
        : (this.checkboxRef.current.checked = false);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.setState({
        ...this.state,
        theme: "dark",
        icon: "moon",
      });
      this.checkboxRef.current.checked = true;
    } else {
      this.setState({
        ...this.state,
        theme: "light",
        icon: "sun",
      });
      this.checkboxRef.current.checked = false;
    }
  }

  componentDidUpdate() {
    localStorage.setItem("theme", this.state.theme);
    localStorage.setItem("icon", this.state.icon);

    const currentTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  render() {
    return (
      <nav className={styles.nav}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={this.state.icon === "sun" ? faSun : faMoon}
        />
        <div className={styles.wrapper}>
          <label className={styles.switch} htmlFor="checkbox">
            <input
              ref={this.checkboxRef}
              type="checkbox"
              id="checkbox"
              onChange={this.switchToggle}
            />
            <div className={`${styles.slider} ${styles.round}`}></div>
          </label>
        </div>
      </nav>
    );
  }
}

export default ThemeToggle;
