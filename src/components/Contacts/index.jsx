import styles from '../Contacts/index.module.css';
import Contact from './Contact';
import PropTypes from 'prop-types';

const Contacts = props => {
	return (
		<div>
			<ul className={styles.contacts}>
				{props.onFilter().map(contact => {
					return (
						<Contact
							onDelete={props.onDelete}
							key={contact.id}
							number={contact.number}
							name={contact.name}
							id={contact.id}
						/>
					);
				})}
			</ul>
		</div>
	);
};
Contacts.propTypes = {
	onDelete: PropTypes.func.isRequired,
	onFilter: PropTypes.func.isRequired,
};
export default Contacts;
