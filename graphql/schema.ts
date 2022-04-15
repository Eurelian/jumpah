import { makeSchema } from "nexus";
import { join } from "path";
import * as QueryTypes from "./types";

export const schema = makeSchema({
  types: [QueryTypes],
  outputs: {
    typegen: join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: join(process.cwd(), "generated/schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "./graphql/context.ts"),
  },
});
