import Cookies from "js-cookie";

function isAuthenticated() {
  let token = Cookies.get("remember_token");
  let session = Cookies.get("session");
  if (token !== undefined || session !== undefined) {
    return true;
  } else {
    return false;
  }
}

export default isAuthenticated;
