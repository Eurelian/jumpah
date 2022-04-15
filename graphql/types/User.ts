import {
  objectType,
  extendType,
  enumType,
  queryType,
  queryField,
  stringArg,
  nonNull,
} from "nexus";

import { Workout } from "./Workout";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("email");
    t.string("password");
    t.string("image");
    t.field("role", { type: Role });
    t.list.field("createdWorkouts", {
      type: Workout,
      resolve: (parent, args, ctx) =>
        ctx.prisma.workout.findMany({ where: { authorId: parent.id } }),
    });
    t.list.field("favoriteWorkouts", {
      type: Workout,
      resolve: (parent, args, ctx) =>
        ctx.prisma.workout.findMany({ where: { authorId: parent.id } }),
    });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: User,
      resolve: (_parent, _args, ctx) => ctx.prisma.user.findMany(),
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: "User",
      resolve: (_parent, _args, ctx) => _args,
    });
  },
});

const Role = enumType({
  name: "Role",
  members: ["ADMIN", "USER"],
});
