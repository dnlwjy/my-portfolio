import MyStackCard from "@/components/ui/MyStackCard";
import figma from "@/assets/figma.svg";
import framer from "@/assets/framer.svg";
import tailwind from "@/assets/tailwind.svg";
import js from "@/assets/js.svg";
import ts from "@/assets/ts.svg";
import react from "@/assets/react.svg";

const MyStack = () => {

  return (
    <section id="my-stack" className="py-20 p-6 flex flex-col gap-10 mx-auto w-full">
      
        <div className="flex items-center gap-6">
          <h2>My Stack</h2>
          <hr className="flex-grow h-0.5 bg-darkgray" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <MyStackCard
            image={figma}
            title="Figma"
            description="Collaborative design and prototyping tool."
          />
          <MyStackCard
            image={framer}
            title="Framer"
            description="Interactive prototyping and rapid no-code web builder."
          />
          <MyStackCard
            image={tailwind}
            title="HTML/Tailwind CSS"
            description="Semantic markup and utility-first styling."
          />
          <MyStackCard
            image={js}
            title="JavaScript"
            description="Core language for dynamic web interactions."
          />
          <MyStackCard
            image={ts}
            title="TypeScript"
            description="Strongly typed superset of JavaScript for safer code."
          />
          <MyStackCard
            image={react}
            title="React"
            description="Component-based library for building UIs."
          />
        </div>
        
    </section>
  );
};

export default MyStack;