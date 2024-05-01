import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { userSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/auth-context";

export const TopBar = () => {
  const { mutate: signOut, isSuccess } = userSignOutAccount();
  const navigate = useNavigate();

  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <p className="text-2xl font-bold">
            Railson<span className="text-[#877EFF]">gram</span>
          </p>
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="rounded-full h-8 w-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
