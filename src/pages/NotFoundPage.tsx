import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import AnimationGroup from "@/components/ui/AnimationGroup";
import { SiteMetaData } from "@/components/SiteMetaData";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SiteMetaData
        title="404 | Page Not Found"
        description="The page you’re looking for might have been lost or never existed."
        url="https://danielwijaya.com/404"
        image="https://danielwijaya.com/og-notfound.png"
        isIndexable={false}
      />

      <Header />
      <main>
        <section className="h-screen flex items-center justify-center w-full">
          <div className="flex flex-col gap-8 text-center w-full justify-center items-center max-w-[640px]">
            <AnimationGroup
              delay={300}
              className="flex flex-col gap-4">
              <h1 aria-label="404 Not Found">I lost this page.</h1>
              <p>The page you’re looking for might have been lost or never existed.</p>
            </AnimationGroup>

            <AnimationGroup
              delay={600}>
              <Button
                onClick={() => navigate("/")}
              >
                Go home
              </Button>
            </AnimationGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;