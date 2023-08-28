import PostsPreview from "@/app/components/allPostsPages/posts-preview";
import SidelineContent from "@/app/components/allPostsPages/sideline";
import Layout from "@/app/components/layout/layout";
import { getPosts, getCategories } from "@/app/lib/wordpress";

export default async function AllPostsPage() {
  const posts = await getPosts();

  const categories = await getCategories();

  return (
    <Layout>
      <div className="container mx-auto px-5 md:max-w-full lg:flex max-w-2xl">
        <div className="lg:w-4/6 px-3">
          <PostsPreview posts={posts} />
        </div>
        <div className="lg:w-2/6">
          <SidelineContent posts={posts} categories={categories} />
        </div>
      </div>
    </Layout>
  );
}
