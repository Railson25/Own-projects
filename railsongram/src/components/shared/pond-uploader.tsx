import { useEffect, useRef, useState } from "react";

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

  // The method used to register the plugins
  setPlugins,

  // The plugins we want to use
  plugin_crop,
  plugin_finetune,
  plugin_annotate,

  // The user interface and plugin locale objects
  locale_en_gb,
  plugin_crop_locale_en_gb,
  plugin_finetune_locale_en_gb,
  plugin_annotate_locale_en_gb,

  // Because we use the annotate plugin we also need
  // to import the markup editor locale and the shape preprocessor
  markup_editor_locale_en_gb,
  createDefaultShapePreprocessor,

  // Import the default configuration for the markup editor and finetune plugins
  markup_editor_defaults,
  plugin_finetune_defaults,
} from "@pqina/pintura";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,

  FilePondPluginFilePoster,
  FilePondPluginImageEditor
);

// This registers the plugins with Pintura Image Editor
setPlugins(plugin_crop, plugin_finetune, plugin_annotate);

export default function UploadFilePond() {
  const pond = useRef<FilePond | null>(null);
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    if (pond.current) {
      const files = pond.current.getFiles().map((file) => file.file);
      setFiles(files);
    }
  }, [pond]);

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      maxFiles={3}
      server={{
        // fake server to simulate loading a 'local' server file and processing a file
        process: (fieldName, file, metadata, load) => {
          // simulates uploading a file
          setTimeout(() => {
            load(new Date());
          }, 1500);
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then((res) => res.blob())
            .then(load);
        },
      }}
      name="files" /* sets the file input name, it's filepond by default */
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      imageEditor={{
        // used to create the editor, receives editor configuration, should return an editor instance
        createEditor: openEditor,

        // Required, used for reading the image data
        imageReader: [
          createDefaultImageReader,
          {
            // createDefaultImageReader options here
          },
        ],

        // optionally. can leave out when not generating a preview thumbnail and/or output image
        imageWriter: [
          // The image writer to use
          createDefaultImageWriter,
          // optional image writer instructions, this instructs the image writer to resize the image to match a width of 384 pixels
          {
            targetSize: {
              width: 512,
              height: 512,
            },
          },
        ],

        // used to generate poster images, runs an editor in the background
        imageProcessor: processImage,

        // Pintura Image Editor properties
        editorOptions: {
          // Pass the editor default configuration options
          ...getEditorDefaults(),

          // // The markup editor default options, tools, shape style controls
          // ...markup_editor_defaults,

          // // The finetune util controls
          // ...plugin_finetune_defaults,

          // // This handles complex shapes like arrows / frames
          // shapePreprocessor: createDefaultShapePreprocessor(),

          // we want a square crop
          imageCropAspectRatio: 1,

          // locale: {
          //   ...locale_en_gb,
          //   ...plugin_crop_locale_en_gb,
          //   ...plugin_finetune_locale_en_gb,
          //   ...plugin_annotate_locale_en_gb,
          //   ...markup_editor_locale_en_gb,
          // },
        },
      }}
    />
  );
}
