import React, { useState } from "react";
import { Card, TextInput, Button, Label } from "flowbite-react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsKeyFill } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import { IUserRegister } from "../../interfaces/users/users.interface";
import { userRegister } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/users/users.interface";
import { BiImageAlt, BiUser } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

interface SignInProps {
  currentUser: IUser | null;
}

export default function Register({ currentUser }: SignInProps) {
  const [registerFormData, setSignInFormData] = useState<IUserRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "Cohort-118",
  });

  const navigate = useNavigate();

  const onFormFieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.id;
    const newValue = e.currentTarget.value;

    setSignInFormData({ ...registerFormData, [target]: newValue });
  };

  const onSignInBttClicked = (e: React.MouseEvent<HTMLElement>) => {
    console.log("submitting this::: ", registerFormData);
    userRegister(registerFormData).then(() => {
      navigate("/signin");
    });
  };

  if (currentUser) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/4 shadow-2xl">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Register
        </h5>

        <div className="grid grid-row-2 grid-flow-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Firstname" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              placeholder="Type your Firstname"
              required={true}
              icon={BiUser}
              onChange={onFormFieldChanged}
              value={registerFormData.firstName}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Lastname" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              placeholder="Type your Lastname"
              required={true}
              icon={FaUserAlt}
              onChange={onFormFieldChanged}
              value={registerFormData.lastName}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Type your Email"
            required={true}
            icon={AiOutlineMail}
            onChange={onFormFieldChanged}
            value={registerFormData.email}
          />
        </div>

        <div className="grid grid-row-2 grid-flow-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="Password"
              placeholder="Type your Password"
              required={true}
              icon={BsKey}
              onChange={onFormFieldChanged}
              value={registerFormData.password}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="passwordConfirm" value="Confirm Password" />
            </div>
            <TextInput
              id="passwordConfirm"
              type="Password"
              placeholder="Confirm your Password"
              required={true}
              icon={BsKeyFill}
              onChange={onFormFieldChanged}
              value={registerFormData.passwordConfirm}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="avatarUrl" value="Avatar Link" />
          </div>
          <TextInput
            id="avatarUrl"
            type="text"
            placeholder="Type your avatar url"
            required={true}
            icon={BiImageAlt}
            onChange={onFormFieldChanged}
            value={registerFormData.avatarUrl}
          />
        </div>

        <Button
          color="dark"
          className="mx-auto my-5"
          onClick={onSignInBttClicked}
        >
          <IoArrowForward className="mr-2 h-5 w-5" />
          Register
        </Button>
      </Card>
    </div>
  );
}
