import { RecentPosts } from "./components/recentPosts";
import { Intro } from "./components/intro";

export default function Page() {
  return (
    <section>
      <Intro />
      <div className="my-8">
        <RecentPosts />
      </div>
    </section>
  );
}
