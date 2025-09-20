import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <section className="h-screen flex items-center justify-center w-full">
          <div className="flex flex-col gap-8 text-center w-full justify-center items-center max-w-[640px]">
            <div className="flex flex-col gap-4">
              <h1>I lost this page.</h1>
              <p>I searched high and low but couldn't find what you're looking for. Let's find a better place for you to go.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => navigate("/")}
            >
              Go home
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;