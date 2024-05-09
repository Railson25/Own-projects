import * as z from "zod";
import { Models } from "appwrite";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/auth-context";
import { postSchema } from "@/lib/validation";
import {
  useCreatePost,
  useUpdatePost,
} from "@/lib/react-query/queriesAndMutations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader } from "../shared/loader";
import { FilePondComponent } from "../shared/file-pond-uploader";

type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};

export const PostForm = ({ post, action }: PostFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();
  console.log("aquuuuiiii", post, action);

  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: "",
      location: post ? post.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  });

  // Query
  const { mutateAsync: createPost, isLoading: isLoadingCreate } =
    useCreatePost();
  const { mutateAsync: updatePost, isLoading: isLoadingUpdate } =
    useUpdatePost();

  // Handler
  const handleSubmit = async (value: z.infer<typeof postSchema>) => {
    // ACTION = UPDATE
    if (post && action === "Update") {
      console.log(post, action);
      const updatedPost = await updatePost({
        ...value,
        postId: post.$id,
        imageId: post.imageId,
        imageUrl: post.imageUrl,
      });
      if (!updatedPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
      return navigate(`/post/${post.$id}`);
    }
    // ACTION = CREATE
    const newPost = await createPost({
      ...value,
      userId: user.id,
    });
    if (!newPost) {
      toast({
        title: `${action} post failed. Please try again.`,
      });
    }
    navigate("/");
  };

  const onUploadFile = (value: string) => {
    form.setValue("file", value);
  };

  return (
    <>
      <div className="flex flex-col gap-9 w-[400px] max-w-5xl">
        <FilePondComponent onChange={onUploadFile} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-9 w-full  max-w-5xl">
          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Caption</FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-textarea custom-scrollbar"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input type="text" className="text-black" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="shad-form_label">Add Location</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Add Tags (separated by comma " , ")
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Art, Expression, Learn"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <div className="flex gap-4 items-center justify-end">
            <Button
              type="button"
              className="shad-button_dark_4"
              onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              disabled={isLoadingCreate || isLoadingUpdate}>
              {(isLoadingCreate || isLoadingUpdate) && <Loader />}
              {action} Post
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
