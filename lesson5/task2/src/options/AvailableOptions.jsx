import { connect } from "react-redux";
import {
  availableOptionsSelector,
  optionsListSelector,
} from "./options.selestors.js";
import Options from "./Options.jsx";

const mapState = (state) => {
  return {
    options: optionsListSelector(state),
  };
};

const connector = connect(mapState);

export default connector(Options);
