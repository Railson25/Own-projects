import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/components/layout/menu";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";

export const LeftSideBar = () => {
  return (
    <div className="sticky inset-0 h-screen overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={200} height={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="">
            <Image
              src="/images/Railson.jpg"
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">Railson</p>
        </div>
        <div className="flex justify-between text-light-1">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">post</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">post</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">post</p>
          </div>
        </div>

        <hr />

        <Menu />
        <hr />
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/" />
          <p className="text-base-bold">Manage account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer gap-4 items-center">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};
