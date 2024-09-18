import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
export default function ({ name, control, defaultValue = "", label }) {
  return (
    <div className="w-full">
      {label && <label className="w-full mb-1 ">{label}</label>}
      <Controller
        name={name || "blog"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            onEditorChange={onchange}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            }}
          />
        )}
      />
    </div>
  );
}
