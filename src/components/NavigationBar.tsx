import React from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { IUser } from "../interfaces/users.interface";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../services/userService";

interface NavbarProps {
  currentUser: IUser | null;
}

export default function NavigationBar({ currentUser }: NavbarProps) {
  const navigate = useNavigate();

  const onSignOutClicked = (e: React.MouseEvent<HTMLElement>) => {
    userLogOut()
      .then(() => navigate("/"))
      .catch(() => console.log("We got an error"));
  };

  return (
    <Navbar fluid={true} rounded={true} className="w-3/6 mx-auto">
      <Navbar.Brand href="/">
        <img
          src="futility.ico"
          className="mr-3 h-6 sm:h-9 rounded-full"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Futility
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {currentUser && (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={currentUser?.avatarUrl}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm text-blue-600">{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
              <span className="block truncate text-sm font-medium text-opacity-25">
                {currentUser?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>
              <span onClick={onSignOutClicked}>Sign out</span>{" "}
            </Dropdown.Item>
          </Dropdown>
        )}
        {!!!currentUser && (
          <div className="flex md:order-2">
            <Button
              onClick={() => navigate("/login")}
              id="signin"
              className="mx-2"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/register")}
              id="register"
              className="mx-2"
              color="dark"
            >
              Register
            </Button>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="/" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="/" className="text-lg">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
