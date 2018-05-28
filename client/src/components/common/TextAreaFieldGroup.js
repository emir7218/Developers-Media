import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  rows,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        style={{ resize: "none" }}
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info} </small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  rows: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
