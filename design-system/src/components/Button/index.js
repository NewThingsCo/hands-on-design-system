/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import styled, { css } from "styled-components";
import { colors, spacing } from "../../tokens";
import { bool, string } from "prop-types";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: ${(p) =>
    p.isOutline
      ? p.isActive
        ? colors.pinkPink100
        : colors.secondaryBlack20
      : "transparent"};
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  user-select: none;
  text-decoration: none;
  border-radius: ${spacing.spacingLgBottom};
  padding: ${(p) => (p.label ? "16px" : "12px")};
  background-color: ${p => p.disable ? colors.primary200 : colors.primary500};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: ${colors.background500};
  font-size: 14px;
  font-weight: 700;
  width: ${(p) => (p.isStretched ? "100%" : "295px")};
  height: 56px;
  ${(p) =>
    p.isActive &&
    `svg {
      fill: ${colors.pinkPink100};
        path {
          fill-opacity: 1;
        }
  }`}
`;

const Button = ({ href, label, children, to, ...props }) => {
  return (
    <StyledButton as={href && "a"} href={href} {...props}>
      {label ? label : children}
    </StyledButton>
  );
};

Button.propTypes = {
  label: string,
  disabled: bool,
  isStretched: bool,
  isOutline: bool,
  color: string,
};

Button.defaultProps = {
  color: colors.primaryOrange100,
};

export default Button;
