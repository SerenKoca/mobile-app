import 'dotenv/config';

export default {
  expo: {
    name: "jouw-app",
    slug: "jouw-app",
    extra: {
      webflowApiUrl: process.env.WEBFLOW_API_URL,
      webflowApiToken: process.env.WEBFLOW_API_TOKEN,
      webflowBlogApiUrl: process.env.WEBFLOW_BLOG_API_URL,
      webflowBlogApiToken: process.env.WEBFLOW_BLOG_API_TOKEN,

    },
  },
};