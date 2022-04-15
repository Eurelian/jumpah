export const resolvers = {
  Query: {
    equipment: async (_parent, args, ctx) =>
      await ctx.prisma.equipment.findMany(),
  },
};
