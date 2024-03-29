import axios from "axios";

const BASE_URL = process.env.WP_BASE_URL;

export async function getPostsForHompage() {
  try {
    const response = await axios.get(`${BASE_URL}posts`, {
      params: {
        _sort: "date", // Order by the 'date' field
        per_page: 3, // Limit the results to 3 posts
        _order: "desc", // Sort in descending order (latest posts first)
      },
    });
    const posts = await response.data;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch latest posts."); // Handle the error gracefully
  }
}

export async function getPostBySlug(slug) {
  try {
    const response = await axios.get(`${BASE_URL}posts?slug=${slug}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post.");
  }
}

export async function getCategryByPostId(id) {
  try {
    const response = await axios.get(`${BASE_URL}categories?post=${id}`);
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch category.");
  }
}

// unused right now
// export async function getPageData(pageId) {
//   try {
//     const response = await axios.get(`${BASE_URL}pages?page=${pageId}`);
//     return await response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch pages data.");
//   }
// }

export async function getPosts() {
  try {
    const response = await axios.get(`${BASE_URL}posts`);
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts data.");
  }
}

// getting 4 posts each time
// export async function getPostsByPage(pageNumber) {
//   try {
//     const response = await axios.get(`${BASE_URL}posts`, {
//       params: {
//         _sort: "date",
//         per_page: 4,
//         _order: "desc",
//         page: pageNumber,
//       },
//     });
//     return await response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch posts data.");
//   }
// }
// export async function getPostsTitlesForSearchField(searchTerm) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}posts?__fields=title&search=${searchTerm}`,
//       {
//         params: {
//           _sort: "date",
//           per_page: 6,
//           _order: "desc",
//         },
//       }
//     );
//     return await response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch posts titles data.");
//   }
// }

export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}categories`);
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch categories data.");
  }
}

export async function getPostsByCategory(categoryId) {
  try {
    const response = await axios.get(
      `${BASE_URL}posts?categories=${categoryId}`
    );
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts by category data.");
  }
}

export async function getCategoryNameByCategoryId(categoryId) {
  try {
    const response = await axios.get(`${BASE_URL}categories/${categoryId}`);
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch category name by category id.");
  }
}

export async function getCommentsByPostId(id) {
  try {
    const response = await axios.get(`${BASE_URL}comments?post=${id}`);
    console.log("response", response.data);
    return await response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch comments by post id.");
  }
}

// this is a request that came from the browser - that's why we need to hard code the base url
export async function addComment(req, postId) {
  try {
    const response = await axios.post(
      `http://localhost:8899/BlogsWebsite/BlogPosts/wp-json/wp/v2/comments?post=${postId}`,
      req.body,
      {
        headers: req.headers,
      }
    );
    console.log("response", response);
    return response;
  } catch (error) {
    throw new Error("Failed to add comment.");
  }
}

export async function createWPAccount(req) {
  try {
    console.log("req", req);
    const response = await axios.post(
      `http://localhost:8899/BlogsWebsite/BlogPosts/wp-json/wp/v2/createuser`,
      req
    );
    console.log("response", response);
    return response;
  } catch (error) {
    throw new Error("Failed to create account.");
  }
}
