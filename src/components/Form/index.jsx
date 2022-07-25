import styles from '../Form/index.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = props => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		let bool = props.contacts.some(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});

		if (!bool) {
			props.onSubmit(name, number, reset);
			reset();
		} else alert(name + ' is already exists');
	};

	const reset = () => {
		setNumber('');
		setName('');
	};

	const handleChangeName = e => {
		setName(e.target.value);
	};
	const handleChangeTel = e => {
		setNumber(e.target.value);
	};

	return (
		<div className={styles.form}>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChangeName}
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
					onChange={handleChangeTel}
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
};

Form.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
		}),
	),
	onSubmit: PropTypes.func.isRequired,
};
export default Form;
