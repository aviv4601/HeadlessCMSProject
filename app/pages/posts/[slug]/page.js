import {
  getCategryByPostId,
  getPostBySlug,
  getCommentsByPostId,
} from "../../../lib/wordpress";
import PostBody from "../../../components/single-post-page/post-body";
import PostHeader from "../../../components/single-post-page/post-header";
import CommentForm from "../../../components/single-post-page/comments/comment-form";
import CommentItem from "../../../components/single-post-page/comments/comment-item";

export default async function PostPage({ params }) {
  const posts = await getPostBySlug(params.slug);
  if (posts.length === 0) {
    // Handle the case when no posts are found for the given slug
    return <div>No posts found.</div>;
  }

  const post = posts[0];

  const category = await getCategryByPostId(post.id);
  const categoryData = category.length > 0 ? category[0].name : "No Category";

  const comments = await getCommentsByPostId(post.id);
  console.log("comments", comments);
  return (
    <div className="container mx-auto px-5">
      <div>
        <PostHeader post={post} category={categoryData} />
      </div>
      <div>
        <PostBody post={post} />
      </div>
      <div className="w-11/12 flex flex-col justify-center mx-auto align-center">
        <CommentForm postId={post.id} />
        <div className="mt-8 xl:mx-28 lg:m-24">
          <h1 className="font-bold text-3xl mb-8">Comments</h1>
          {comments.map((comment) => (
            <CommentItem comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
