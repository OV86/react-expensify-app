import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ onStartLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <button onClick={onStartLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    onStartLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
