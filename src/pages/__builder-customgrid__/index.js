import { BuilderComponent } from "@builder.io/react";

// import where your custom components are registered

import "../../components/CustomButton";

// This page is purely for using the Builder.io editor to edit symbols
export default function EditBuilderSymbol() {
  return (
    <BuilderComponent
      model="customgrid"
      options={{
        enrich: true,
        includeRefs: true,
      }}
    />
  );
}
