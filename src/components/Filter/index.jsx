import { Fragment } from 'react';
import styles from '../Filter/index.module.css';
import PropTypes from 'prop-types';

const Filter = props => {
	const { filter } = props.filter;
	return (
		<Fragment>
			<p className={styles.p}>Find contacts by name</p>
			<input
				className={styles.input}
				type="text"
				value={filter}
				onChange={e => {
					props.onFilter(e);
				}}
			/>
		</Fragment>
	);
};

Filter.propTypes = {
	onFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
};

export default Filter;
