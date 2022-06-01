import './button.styles.scss';

const Button_type_Classes = {
	google: 'google-sign-in',
	inverted: 'inverted',
};
const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<div>
			<button className={`button-container ${Button_type_Classes[buttonType]}`} {...otherProps}>
				{children}
			</button>
		</div>
	);
};

export default Button;
