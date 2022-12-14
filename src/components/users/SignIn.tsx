import React, { useState } from "react";
import { Card, TextInput, Button, Label } from "flowbite-react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import { IUserSignIn } from "../../interfaces/users/users.interface";
import { userSignIn } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/users/users.interface";

interface SignInProps {
  currentUser: IUser | null;
}

export default function SignIn({ currentUser }: SignInProps) {
  const [signInFormData, setSignInFormData] = useState<IUserSignIn>({
    email: "",
    password: "",
    tenantId: "Cohort-118",
  });

  const navigate = useNavigate();

  const onFormFieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.id;
    const newValue = e.currentTarget.value;

    console.log();

    setSignInFormData({ ...signInFormData, [target]: newValue });
  };

  const onSignInBttClicked = (e: React.MouseEvent<HTMLElement>) => {
    console.log("submitting this::: ", signInFormData);
    userSignIn(signInFormData).then(() => {
      navigate(0);
    });
  };

  if (currentUser) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/4 shadow-2xl">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Sign In
        </h5>

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
            value={signInFormData.email}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Password" />
          </div>
          <TextInput
            id="password"
            type="Password"
            placeholder="Type your Password"
            required={true}
            icon={BsKey}
            onChange={onFormFieldChanged}
            value={signInFormData.password}
          />

          <Button
            color="dark"
            className="mx-auto my-5"
            onClick={onSignInBttClicked}
          >
            <IoArrowForward className="mr-2 h-5 w-5" />
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  );
}
