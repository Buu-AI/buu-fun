import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["http://dev.api.buu.fun/graphql"],
  documents: "./src/gql/documents/**/*.ts",
  generates: {
    "./src/gql/types/": {
      preset: "client-preset",
    },
  },
};
export default config;
