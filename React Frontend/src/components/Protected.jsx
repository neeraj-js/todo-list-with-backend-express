import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  let isLoggedIn = localStorage.getItem("isAuthenticated");
  console.log(isLoggedIn);
  if (isLoggedIn == "false") {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
