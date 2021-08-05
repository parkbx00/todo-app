import React, { Component } from "react";
import styles from "./TodoAddForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class TodoAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const title = this.inputRef.current.value;
    title && this.props.onAdd(title);
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input
          className={styles.input}
          ref={this.inputRef}
          type="text"
          placeholder="Type new todo here!"
        />
        <button className={styles.button}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    );
  }
}

export default TodoAddForm;
