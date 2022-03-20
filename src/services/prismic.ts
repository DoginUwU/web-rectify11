import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = import.meta.env.VITE_REPOSITORY_NAME as string;
const endpoint = prismic.getEndpoint(repositoryName);

export const client = prismic.createClient(endpoint, {
  accessToken: import.meta.env.VITE_ACCESS_TOKEN as string,
  routes: [],
});
