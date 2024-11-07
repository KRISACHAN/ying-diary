import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import content from "@/assets/aboutMe.md"; // 更新路径以正确指向 Markdown 文件

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Something about Kris and his life",
    openGraph: {
      title: "About Me",
      description: "Something about Kris and his life",
      images: [
        signOgImageUrl({
          title: "Kris",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
