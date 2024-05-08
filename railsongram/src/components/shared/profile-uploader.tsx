import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};
export const ProfileUploader = ({
  fieldChange,
  mediaUrl,
}: ProfileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className="cursor-pointer" />
      <div className="cursor-pointer flex-center gap-4">
        <div className="relative h-24 w-24 ">
          <img
            src={fileUrl || "/assets/icons/profile-placeholder.svg"}
            alt="image"
            className="absolute w-full h-full rounded-full object-cover "
          />
        </div>
        <p className="text-primary-500 small-regular md:base-semibold">
          Change profile photo
        </p>
      </div>
    </div>
  );
};
