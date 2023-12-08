import HomeMain from "@/components/organisms/homeMain/HomeMain";

interface IProps {
  posts: IPost[];
}

function HomeTemplate({ posts }: IProps): JSX.Element {
  return (
    <>
      <HomeMain posts={posts} />
    </>
  );
}

export default HomeTemplate;
