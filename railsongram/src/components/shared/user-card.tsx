import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <div className="relative w-14 h-14">
        <img
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="creator"
          className="rounded-full absolute w-full h-full object-cover"
        />
      </div>

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
      </div>
      <Button className="shad-button_primary px-5" type="button" size="sm">
        Follow
      </Button>
    </Link>
  );
};
