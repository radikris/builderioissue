import { BuilderComponent } from "@builder.io/react";

// import where your custom components are registered

// This page is purely for using the Builder.io editor to edit symbols
export default function EditBuilderSymbol() {
  return (
    <BuilderComponent
      model="symbol"
      options={{
        enrich: true,
        includeRefs: true,
      }}
    />
  );
}
