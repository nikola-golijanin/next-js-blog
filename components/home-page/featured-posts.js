import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
