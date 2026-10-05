// Organizing actions
// https://docs.astro.build/en/guides/actions/#organizing-actions
import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";

export const myAction = {
  example: defineAction({
    input: z.object({
      error: z.boolean().optional(),
    }),
    handler: async (input, context) => {
      if (input.error) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "User must be logged in.",
        });
      }

      console.log(context);

      return {
        success: true as const,
        code: "OK",
      };
    },
  }),
};
