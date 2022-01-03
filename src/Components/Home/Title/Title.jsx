import React from "react";
import PropTypes from "prop-types";

import { mainClass } from "../Home";

import "../style.scss";

const Title = ({ titleText }) => (
    <div className={`${mainClass}__title`}>
        <h1 className={`${mainClass}__title-tile`}>{titleText}</h1>
    </div>
);

Title.propTypes = {
  titleText: PropTypes.string.isRequired
};

Title.displayName = "Title";
export default Title;
