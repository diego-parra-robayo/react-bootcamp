import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { alertMessageShown, selectPopUpMessage } from "../../redux/appSlice";

const SnackBarContainer = styled.div`
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

function SnackBar() {
  const popUpMessage = useSelector(selectPopUpMessage);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const timeout = 2000;

  useEffect(() => {
    if (popUpMessage != null) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        dispatch(alertMessageShown());
      }, timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popUpMessage]);

  if (!visible) return null;
  return <SnackBarContainer>{popUpMessage}</SnackBarContainer>;
}

export default SnackBar;
