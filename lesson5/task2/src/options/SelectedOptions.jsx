import { connect } from "react-redux";
import {
  optionsListSelector,
  selectedOptionsSelector,
} from "./options.selestors.js";
import Options from "./Options.jsx";

const mapState = (state) => {
  return {
    options: optionsListSelector(state),
  };
};

const connector = connect(mapState);

export default connector(Options);
