import { objectType, extendType, enumType } from "nexus";
import { User } from "./User";
export const Workout = objectType({
  name: "Workout",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});

//   type Workout {
//     id: String

//     name: String
//     description: String
//     author: User
//     authorId: String
//     exercises: [Exercise]
//     equipment: [Equipment]
//   }
