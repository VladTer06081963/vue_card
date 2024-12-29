/** @format */

export default {
  app: {
    head: {
      title: "My Nuxt App",
      meta: [
        {
          name: "description",
          content: "Пример приложения на Nuxt 3 с ванильным JS",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },

  css: ["~/assets/styles/main.sass"],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          indentedSyntax: true,
        },
      },
    },
  },

  buildDir: ".nuxt", // Указание стандартной папки
  compatibilityDate: "2024-12-29",
};
