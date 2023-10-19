import "@/styles/globals.css";
import { Builder } from "@builder.io/react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

if (Builder.isServer) {
  try {
    // tricking whatever stripping vm2 to include it on server
    require("vm2");
  } catch (e) {
    console.error(e);
  }
}

//builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
