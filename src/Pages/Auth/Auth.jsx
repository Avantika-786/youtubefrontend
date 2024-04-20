import React from "react";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../actions/currentUser";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setPremiumPage = () => {
    navigate("/PremiumBadge");
  };

  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out Successfully");
  };

  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()} </>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()} </>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </p>
        <div className="btns_Auth">
          {User?.result.name ? (
            <Link to={`/chanel/${User?.result._id}`} className="btn_Auth">
              Your Channel
            </Link>
          ) : (
            <input
              type="submit"
              className="btn_Auth"
              value="Create Your Chanel"
              onClick={() => setEditCreateChanelBtn(true)}
            />
          )}

          <GoogleLogout
            clientId={
              "558840243147-6eu173om8m1cu2d76cu3h1bt2k07kcoa.apps.googleusercontent.com"
            }
            onLogoutSuccess={onLogOutSuccess}
            render={(renderProps) => (
              <div onClick={renderProps.onClick} className="btn_Auth">
                <BiLogOut />
                Log Out
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
