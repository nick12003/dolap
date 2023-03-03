import React from "react";
import classNames from "classnames";

const CenterWrapper = ({
  element = <div />,
  children,
  className,
  direction = "horizontal",
  ...rest
}) =>
  React.cloneElement(
    element,
    {
      className: classNames(
        "flex items-center justify-center",
        { "flex-row": direction === "vertical" },
        className
      ),
      ...rest,
    },
    children
  );

export default CenterWrapper;
