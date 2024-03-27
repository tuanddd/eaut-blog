"use client";
import { Editor } from "novel";

const TextEditor = () => {
  return (
    <Editor
      className="w-full bg-background text-foreground"
      editorProps={{
        attributes: {
          class: `prose dark:prose-invert novel-prose-lg outline-none min-h-[70dvh] max-w-full focus:outline-none`,
        },
      }}
    />
  );
};

export default TextEditor;
