import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const data = [
  {
    type: "login",
    data: {
      footerLink: "/register",
      footerText: "Don't have an account? Click here to register",
      headerTitle: "Login",
      headerDescription: "Login to your account",
    },
  },
  {
    type: "register",
    data: {
      footerLink: "/login",
      footerText: "Already have an account? Click here to login",
      headerTitle: "Register",
      headerDescription: "Register for a new account",
    },
  },
];
export function CardWrapper({
  children,
  type,
}: {
  children: React.ReactNode;
  type: any;
}) {
  const contentData = data?.find((item) => item.type === type)?.data;

  if (!contentData) return null;

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>{contentData.headerTitle}</CardTitle>
        <CardDescription>{contentData.headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col justify-between items-start">
        <Link href={contentData.footerLink}>
          <p>{contentData.footerText}</p>
        </Link>
      </CardFooter>
    </Card>
  );
}
