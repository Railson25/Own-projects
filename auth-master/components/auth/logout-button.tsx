"use client";

import { Logout } from "@/actions/logout";

interface LogoutButton {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButton) => {
  const onClick = () => {
    Logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
