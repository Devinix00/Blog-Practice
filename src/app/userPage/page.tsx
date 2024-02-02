"use client";

import getMyPostsApi from "@/api/getMyPosts/getMyPostsApi";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import UserTemplate from "@/components/templates/userTemplate/UserTemplate";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import { useEffect, useState } from "react";

function UserPage(): JSX.Element {
  const [posts, setPosts] = useState<IPost[] | undefined>(undefined);
  const { userId } = useUserIdStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyPostsApi(userId);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <UserTemplate posts={posts} setPosts={setPosts} />
      </div>
      <Footer />
    </div>
  );
}

export default UserPage;
