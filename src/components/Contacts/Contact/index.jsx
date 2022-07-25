import styles from './index.module.css';
import PropTypes from 'prop-types';

const Contact = props => {
	const { id, number, name, onDelete } = props;
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
};
Contact.propTypes = {
	onDelete: PropTypes.func.isRequired,
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Contact;
