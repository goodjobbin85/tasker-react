import PropTypes from 'prop-types'; 
import Button from './Button';

const Header = ({ title }) => { 
    const onButtonClick = () => { 
        console.log("Button clicked")
    }

    return ( 
        <header className="header">
             <h1>{title}!</h1> 
             <Button 
                color="green" 
                text="Add" 
                onClick={onButtonClick} 
             />
        </header> 
    )
} 

Header.defaultProps = { 
    title: 'Tasker',
} 

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

export default Header;