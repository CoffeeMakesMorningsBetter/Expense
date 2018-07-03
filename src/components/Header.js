import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expense Tracker</h1>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create New Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Existing Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Get Help</NavLink>
  </header>
)

export default Header