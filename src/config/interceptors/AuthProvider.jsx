/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../store/actions/settingsActions";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(setIsAuthenticated(false));
    } else {
      dispatch(setIsAuthenticated(true));
    }
  }, []);

  return (
    <>{children}</>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
