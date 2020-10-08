import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const StyledFormControl = styled(FormControl)`
  height: 68px;
  p {
    margin-left: 0px;
  }
`;

const StyledFormHelperText = styled(FormHelperText)``;

const MaterialSelectFormInputGroup = ({
  handleChange,
  size,
  value,
  name,
  onOptionSelected,
  options,
  disabled,
  errorText,
  type,
  helperText,
  variant,
  error,
}) => {
  const renderOptions = options.map((option, index) => (
    <MenuItem onClick={() => onOptionSelected()} value={option.value}>
      <em>{option.label ? option.label : option.value}</em>
    </MenuItem>
  ));
  return (
      <StyledFormControl size={size} variant={variant}>
        <InputLabel id={`label${name}`}>{name}</InputLabel>
        <Select
          labelId={`label${name}`}
          id={`${name}SelectField`}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          value={value}
          type={type}
          error={error}
        >
          {renderOptions}
        </Select>
        {errorText ? (
          <StyledFormHelperText>errorText</StyledFormHelperText>
        ) : helperText ? (
          <StyledFormHelperText>{helperText}</StyledFormHelperText>
        ) : (
          ""
        )}
      </StyledFormControl>
  );
};

MaterialSelectFormInputGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  onOptionSelected: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
};

MaterialSelectFormInputGroup.defaultProps = {
  onOptionSelected: () => console.log("MaterialFormInputGroup has no prop of onOptionSelected"),
  handleChange: () =>
    console.log("MaterialFormInputGroup has no prop of handleChange"),
  name: "name_of_input",
  disabled: false,
  value: null,
  size: "small",
  error: false,
  errorText: "",
  helperText: "",
  type: "text",
  variant: "standard",
  options: [
    {
      label: "label",
      value: "value",
    },
  ],
};

export default MaterialSelectFormInputGroup;
