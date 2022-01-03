import React from "react";
import PropTypes from "prop-types";

import { mainClass } from "../Home";

import "../style.scss";

const Title = ({ line1Text, line2Text }) => (
    <div className={line1Text || line2Text ?`${mainClass}__lines`: ''}>
        <h3 className={line1Text && `${mainClass}__line1`}>{line1Text}</h3>
        <h3 className={line2Text && `${mainClass}__line2`}>{line2Text}</h3>
    </div>
);

Title.propTypes = {
  line1Text: PropTypes.string.isRequired,
  line2Text: PropTypes.string.isRequired
};

Title.displayName = "Title";
export default Title;