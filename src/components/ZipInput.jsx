import React, { Component } from "react";
import PropTypes from 'prop-types';


const ZipInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {

  return (
    <React.Fragment>
      
        <input className="block col-12 field string zip required"
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          required="required"
        />
        {error && <p>{error}</p>}
      
      
    </React.Fragment>
  )
}

ZipInput.defaultProps = {
  type: "text",
  className: ""
}

ZipInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password','email']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default ZipInput;