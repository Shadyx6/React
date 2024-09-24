import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "./conf/config";
export default function ({ name, control, defaultValue = "", label }) {
  return (
    <div className="w-full">
      {label && <label className="w-full mb-1 ">{label}</label>}
      <Controller
        
        name={name || "blog"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
          value={value}
          apiKey={conf.MCEapiKey}
            initialValue={defaultValue}
            onEditorChange={(content) => onChange(content)}
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
