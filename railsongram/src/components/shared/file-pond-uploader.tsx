import { useEffect, useRef, useState } from "react";
// import { ActualFileObject } from "filepond";
import { deleteFile, uploadFile } from "@/lib/appwrite/api";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";

// Import FilePond styles
import "filepond";
import "filepond/dist/filepond.min.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "@pqina/pintura/pintura.css";

import {
  openEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
  processImage,
  getEditorDefaults,
  setPlugins,
  plugin_crop,
  plugin_finetune,
  plugin_annotate,
} from "@pqina/pintura/pintura.js";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,

  FilePondPluginImageEditor,
  FilePondPluginFilePoster
);

setPlugins(plugin_crop, plugin_finetune, plugin_annotate);

export const FilePondComponent = ({ onChange }: any) => {
  const pond = useRef<FilePond | null>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [fileId, setFileId] = useState<string | null>(null);

  useEffect(() => {
    if (pond.current) {
      const files = pond.current.getFiles().map((file) => file.file);
      setFiles(files);
    }
  }, []);

  return (
    <FilePond
      // ref={pond}
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      maxFiles={1}
      server={{
        process: async (fieldName, file, metadata, load) => {
          const fileUrl = await uploadFile(file as File);
          if (fileUrl) {
            console.log(fileUrl.$id);
            load(fileUrl);
            onChange(fileUrl.$id);
            setFileId(fileUrl.$id);
          }
        },
        revert: async (source, load, error) => {
          console.log({ source, load, error, fileId });
          if (!fileId) return;
          try {
            await deleteFile(fileId);
            load();
          } catch (err) {
            console.error(err);
            error("Erro ao remover o arquivo");
          }
        },
      }}
      imageEditor={{
        createEditor: openEditor,
        imageReader: [
          createDefaultImageReader,
          {
            // createDefaultImageReader options here
          },
        ],
        imageWriter: [
          createDefaultImageWriter,
          {
            // We'll resize images to fit a 512 × 512 square
            targetSize: {
              width: 512,
              height: 512,
            },
          },
        ],
        imageProcessor: processImage,
        editorOptions: {
          ...getEditorDefaults(),

          imageCropAspectRatio: 1,
        },
      }}
      data-allow-reorder="true"
      data-max-file-size="3MB"
    />
  );
};
