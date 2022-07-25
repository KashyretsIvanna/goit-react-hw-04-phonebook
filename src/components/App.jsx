import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
	const [contacts, setContacts] = useState([
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	]);

	const [filter, setFilter] = useState('');

	useEffect(() => {
		if (localStorage.getItem('todos')) {
			setContacts(JSON.parse(localStorage.getItem('todos')));
		}
	}, []);

	useEffect(() => {
		console.log('state was updated');

		localStorage.setItem('todos', JSON.stringify(contacts));
	}, [contacts]);

	const handleSubmit = (name, number) => {
		let loginInputId = nanoid();
		setContacts(contacts => [
			...contacts,
			{ id: loginInputId, name: name, number: number },
		]);
	};

	const handleChange = e => {
		setFilter(e.target.value);
	};

	const handleDelete = itemId => {
		setContacts(contacts => contacts.filter(el => el.id !== itemId));
	};

	const handleFilter = () => {
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);
	};

	return (
		<div className={styles.app}>
			<h2>Phonebook</h2>
			<Form contacts={contacts} onSubmit={handleSubmit} />
			<h2>Contacts</h2>
			<Filter onFilter={handleChange} filter={filter} />
			<Contacts onDelete={handleDelete} onFilter={handleFilter} />
		</div>
	);
};

export default App;
