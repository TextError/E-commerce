import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../common/isEmpty';
import { createStructuredSelector } from 'reselect';

// Components
import CartIcon from './cart_icon/Cart_Icon';
import Cart from './cart/Cart';

// Firebase
import { auth } from '../../../firebase/utils';

// Redux
import { connect } from 'react-redux';
import { select_user } from '../../../redux/selectors/user';
import { select_cart_hidden } from '../../../redux/selectors/cart';

// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

// Scss
import './navbar.scss';

const Navbar = ({ user, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
       <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      {
        !isEmpty(user) ? 
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        : <Link className='option' to='/sign-in'>Sign In</Link>
      }
    <CartIcon />
    </div>
    { hidden ? null : <Cart /> }
  </div>
);

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  hidden: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  user: select_user,
  hidden: select_cart_hidden
});

// const mapStateToProps = state => ({
//   user: select_user(state),
//   hidden: select_cart_hidden(state)
// });

// const mapStateToProps = ({ user: { user }, cart: { hidden } }) => ({
//   user,
//   hidden
// });

export default connect(mapStateToProps, {})(Navbar);