'use client'

import { Button } from "./ui/button";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {
    text: string
};

const SignInButton = ({text}: Props) => {
  return (
    <Button onClick={() => {
        signIn('google').catch(console.error)
    }}>
        { text }
    </Button>
  );
};

export default SignInButton;
