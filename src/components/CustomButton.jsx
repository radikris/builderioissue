import { useRouter } from "next/router";
import React from "react";
import { Builder } from "@builder.io/react";

const CustomButton = ({ text, link }) => {
  const router = useRouter();

  return (
    <div>
      custom buttuon here
      <br />
      <button
        className="text-xl font-semibold uppercase bg-blue-500 rounded-md p-4"
        onClick={() => {
          router.push(link);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;

Builder.registerComponent(CustomButton, {
  name: "CustomButton",
  inputs: [
    { name: "text", type: "string" },
    { name: "link", type: "string" },
  ],
});
