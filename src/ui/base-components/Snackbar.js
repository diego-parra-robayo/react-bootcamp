import styled from "styled-components";
import { Component } from "react";

const SnackbarContainer = styled.div`
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
`;

class Snackbar extends Component {
  state = {
    message: "",
    visible: false,
  };

  show(message, timeout = 2000) {
    this.setState({ visible: true, message }, () => {
      setTimeout(() => {
        this.setState({ visible: false });
      }, timeout);
    });
  }
  render() {
    if (!this.state.visible) return null;
    return <SnackbarContainer>{this.state.message}</SnackbarContainer>;
  }
}

export default Snackbar;
