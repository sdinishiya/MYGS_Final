import React from "react";
import { createPopper } from "@popperjs/core";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {NAVIGATION_ROUTES} from "../../navigation/constant/NavigationRoutes";
import {logoutUser} from "../../store/action/authAction";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const user = useSelector((state) => state.authReducer);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
    const dispatch = useDispatch();
    const history = useHistory();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
        history.push(NAVIGATION_ROUTES.login)
    }
  return (
      <>
          <a
              className="text-blueGray-500 block"
              href="#pablo"
              ref={btnDropdownRef}
              onClick={(e) => {
                  e.preventDefault();
                  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}
          >
              <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
                alt="..."
                className="w-12 h-12 rounded-full align-middle border-none shadow-lg"
                src={`data:image/jpeg;base64,${user.userImage}`}
            />
          </span>
              </div>
          </a>
          <div
              ref={popoverDropdownRef}
              className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
              }
          >
                  <a
                      href={NAVIGATION_ROUTES.notification}
                      className={
                          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                      }
                  >
                      Notifications
                  </a>
              <div className="h-0 my-2 border border-solid border-blueGray-100" />
              <a
                  href="#pablo"
                  className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  }
                  onClick={(e) => handleLogout(e)}
              >
                  Logout
              </a>
          </div>
      </>
  );
};

export default UserDropdown;
