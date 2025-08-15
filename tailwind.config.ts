import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
} satisfies Config;
