import { useUserContext } from "@/context/auth-context";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { PostStats } from "./post-stats";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

export const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
}: GridPostListProps) => {
  const { user } = useUserContext();

  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/post/${post.$id}`} className="grid-post_link">
            <div className="relative w-full h-[640px] mb-5">
              <img
                src={post.imageUrl}
                alt="post"
                className="object-center w-full h-full object-cover "
              />
            </div>
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                <div className="h-10 w-10 relative">
                  <img
                    src={post.creator.imageUrl}
                    alt="creator"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <p className="line-clamp-1">{post.creator.name}</p>
              </div>
            )}
            {showStats && <PostStats userId={user.id} post={post} />}
          </div>
        </li>
      ))}
    </ul>
  );
};
