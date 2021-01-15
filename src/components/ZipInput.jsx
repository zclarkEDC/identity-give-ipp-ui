import React, { Component } from "react";
import PropTypes from 'prop-types';
/*
class ZipInput extends Component {
  // default props for input
  static defaultProps = {
    onInput: "",
    onKeyDown: "",
    onKeyUp: "",
    // this is an example of removing the paste
    // functionality entirely across the board
    // onPaste: (e) => { e.preventDefault() },
    onPaste: "",
    max: "",
    min: "",
    inputmode: "",
    pattern: "",
    placeholder: "",
    type: "text"
  };

  render() {
    return (
      <input
        inputMode={this.props.inputmode}
        max={this.props.max}
        min={this.props.min}
        onInput={e => {
          this.props.onInput === "" ? "" : this.props.onInput(e);
        }}
        onKeyDown={e => {
          this.props.onKeyDown === "" ? "" : this.props.onKeyDown(e);
        }}
        onKeyUp={e => {
          this.props.onKeyUp === "" ? "" : this.props.onKeyUp(e);
        }}
        onPaste={e => {
          this.props.onPaste === "" ? "" : this.props.onPaste(e);
        }}
        pattern={this.props.pattern}
        placeholder={this.props.placeholder}
        type={this.props.type}
        defaultValue={this.props.value}
      />
    );
  }
}
*/
/*
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
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          required="required"
        />
        { error && <p>{ error }</p>}
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

*/

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



