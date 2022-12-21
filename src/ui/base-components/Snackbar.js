import styled from "styled-components";
import { Component } from "react";

const SnackbarContainer = styled.div`
  min-width: 250px;
  background-color: rgba(44, 44, 44, 0.8);
  color: #fff;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  text-align: start;
  position: fixed;
  z-index: 1;
  left: 3vw;
  bottom: 3vh;
`;

class Snackbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      visible: false,
    };
  }

  render() {
    if (!this.state.visible) return null;
    return <SnackbarContainer>{this.state.message}</SnackbarContainer>;
  }

  show(message, timeout = 2000) {
    this.setState({ visible: true, message }, () => {
      setTimeout(() => {
        this.setState({ visible: false });
      }, timeout);
    });
  }
}

export default Snackbar;
