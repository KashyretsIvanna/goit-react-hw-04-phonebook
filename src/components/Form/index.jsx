import { Component } from 'react';
import styles from '../Form/index.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    let bool = this.props.contacts.some(contact => {
      return contact.name.toLowerCase() === this.state.name.toLowerCase();
    });

    if (!bool) {
      this.props.onSubmit(this.state.name, this.state.number, this.reset);
      this.reset();
    } else alert(this.state.name + ' is already exists');
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangeTel = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            value={name}
          />

          <br />

          <input
            onChange={this.handleChangeTel}
            type="tel"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />

          <br />

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
