import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { Loader } from "@/components/shared/loader";
import { multiFormatDateString } from "@/lib/utils";
import { useUserContext } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { PostStats } from "@/components/shared/post-stats";

const PostDetails = () => {
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: post, isLoading } = useGetPostById(id);

  const handleDeletePost = () => {};

  return (
    <div className="post_details-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <div className="relative w-full xl:w-1/2 h-[640px] mb-5">
            <img
              src={post?.imageUrl}
              alt="post"
              className="rounded-t-3xl absolute h-full w-full object-cover xl:object-top "
            />
          </div>
          <div className="post_details-info max-[468px]:p-3 ">
            <div className="flex-between w-full max-[468px]:flex-col max-[468px]:items-start max-[468px]:gap-1 ">
              <Link
                to={`/profile/${post?.creator.$id}`}
                className="flex items-center gap-3">
                <img
                  src={
                    post?.creator?.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="w-8 h-8 lg:h-12 lg:w-12 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                      {multiFormatDateString(post?.$createdAt)}
                    </p>
                    -
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex-center gap-1 max-[468px]:self-end ">
                <Link
                  to={`/update-post/${post?.$id}`}
                  className={`${user.id !== post?.creator.$id && "hidden"}`}>
                  <img
                    src="/assets/icons/edit.svg"
                    alt="edit"
                    height={24}
                    width={24}
                  />
                </Link>
                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ghost_details-delete_btn ${
                    user.id !== post?.creator.$id && "hidden"
                  }`}>
                  <img
                    src="/assets/icons/delete.svg"
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>
            <hr className="border w-full border-dark-4/80" />

            <div className="small-medium lg:base-regular flex flex-col flex-1 w-full">
              <p>{post?.caption}</p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((tag: string, index: string) => (
                  <li
                    key={`${tag}${index}`}
                    className="text-light-3 small-regular">
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
