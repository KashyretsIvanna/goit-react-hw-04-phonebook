import { Component } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    const { id, number, name, onDelete } = this.props;
    return (
      <li className={styles.li}>
        {name + ': ' + number}
        <button
          className={styles.button}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;
