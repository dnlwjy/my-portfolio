import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerY } from "./Hamburger";
import AnimationGroup from "./AnimationGroup";

interface FAQItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: FAQItem[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col gap-4">
            {items.map((item, index) => (
                <AnimationGroup
                    key={index}
                    delay={index * 100 + 100}
                    className="w-full flex flex-col gap-4"
                >
                    <button
                        className="rounded-2xl bg-darkgray bg-opacity-50 py-5 flex flex-col gap-2 focus:outline-none"
                        onClick={() => toggleIndex(index)}
                    >
                        <div className="w-full px-6 flex justify-between items-center gap-4">
                            <p className="font-medium text-white text-left">{item.question}</p>
                            <HamburgerY
                                isOpen={activeIndex === index}
                                toggle={() => toggleIndex(index)}
                            />
                        </div>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="px-6 overflow-hidden text-gray-700 text-left"
                                >
                                    <p>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </AnimationGroup>
            ))}
        </div>
    );
};

export default Accordion;
