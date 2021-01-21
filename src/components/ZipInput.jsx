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
      <div class="mb3 zip required zip">
      <label class="bold zip required" for="zip"><abbr
        title="required" pattern="^\d{5}(?:[-\s]\d{4})?$" class="red display-none">*</abbr> Find an
                                identity services center near you:</label>
      <div class="mb1 text-hint">
        <span>Enter postal code</span>
        </div>
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
      
      </div>
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
  type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default ZipInput;