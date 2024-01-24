"use client";

import { Logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    Logout();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <form>
        <button onClick={onClick} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
