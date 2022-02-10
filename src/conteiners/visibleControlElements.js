import { connect } from "react-redux";
import { menu_click } from "../actions";
import { ControlPanel } from "../components/controlPanel";

const mapStateToProps = (state) => ({
  controlElements: state.controlElements,
  currEl: state.curr,
});

const mapDispatchToProps = (dispatch) => ({
  activate: (curr) => dispatch(menu_click(curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
