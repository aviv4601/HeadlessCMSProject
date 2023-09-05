import { getCategryByPostId, getPostBySlug } from "../../../lib/wordpress";
import PostBody from "@/app/components/allPostsPages/singlePostBySlug/post-body";
import PostHeader from "@/app/components/allPostsPages/singlePostBySlug/post-header";

export default async function PostPage({ params }) {
  const posts = await getPostBySlug(params.slug);
  if (posts.length === 0) {
    // Handle the case when no posts are found for the given slug
    return <div>No posts found.</div>;
  }

  const post = posts[0];

  const category = await getCategryByPostId(post.id);
  const categoryData = category.length > 0 ? category[0].name : "No Category";

  return (
    <div className="container mx-auto px-5">
      <div>
        <PostHeader post={post} category={categoryData} />
      </div>
      <div>
        <PostBody post={post} />
      </div>
    </div>
  );
}
