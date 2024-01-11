import PostsPreview from "../../../components/all-posts-page/posts-preview";
import SidelineContent from "../../../components/all-posts-page/sideline";
import { getCategories, getPosts } from "../../../lib/wordpress";

export default async function AllPostsPage() {
  const allPosts = await getPosts();
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-5 md:max-w-full lg:flex max-w-2xl">
      <div className="lg:w-4/6 px-3">
        <PostsPreview posts={allPosts} />
      </div>
      <div className="lg:w-2/6">
        <SidelineContent posts={allPosts} categories={categories} />
      </div>
    </div>
  );
}
