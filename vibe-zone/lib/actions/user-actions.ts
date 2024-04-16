import User from "@/lib/models/user";
import { connectToDB } from "@/lib/mongodb/moongoose";

interface EmailAddress {
  email_address: string;
}

interface createUserProps {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string;
  email_addresses: EmailAddress[];
  username: string;
}
export const createOrUpdateUser = async ({
  email_addresses: [{ email_address }],
  first_name,
  id,
  image_url,
  last_name,
  username,
}: createUserProps) => {
  try {
    await connectToDB();
    const user = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_address,
          userName: username,
        },
      },
      { upsert: true, new: true }
    );

    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
