import React from 'react';

const Header = ({message}) => {
	return(
		<div className="Header">
			<h2> 
				{message}
			</h2>
		</div>
	);
};

Header.propTypes = {
	message : React.PropTypes.string.isRequired
};

Header.defaultProps = {
	message : "Hello Guest"
};

export default Header;