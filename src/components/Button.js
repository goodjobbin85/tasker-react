import PropTypes from 'prop-types'; 

const Button = ({ color, text, onButtonClick}) => { 
    return ( 
        <button 
            className='btn'
            style={{ backgroundColor: color }} 
            onClick={onButtonClick} 
        >
            {text} 
        </button>
    )
} 

Button.defaultProps = { 
    color: 'blue',
} 

Button.propTypes = { 
    text: PropTypes.string, 
    color: PropTypes.string, 
    onButtonClick: PropTypes.func,
} 

export default Button;