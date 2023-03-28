import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
       
            <Link to="/"  className="navbar-link" > {props.text}</Link>
            

      
      <span className="navigation-links-text1 navbar-link">{props.text1}</span>
      <Link to="/pricing" className="navigation-links-text2 navbar-link">{props.text2}</Link>
      <span className="navigation-links-text3 navbar-link">{props.text3}</span>
      <Link   to="/faqs"  className="navigation-links-text4 navbar-link">{props.text4}</Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2:'Pricing' ,
  text3: "Features",
  rootClassName: '',
  text4: "FAQS",
  text: 'Home',
  text1: 'Resources',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
