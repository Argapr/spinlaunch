import { useState } from "react";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="w-full text-left py-4 px-6 flex justify-between items-center bg-[#121212] focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-medium text-lg">{title}</span>
                <svg
                    className={`transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-[#121212]">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <AccordionItem
                title="What is SpinLaunch?"
                content="SpinLaunch.io is a blockchain technology service platform that provides token creation services on the Solana network. It offers tools for token management and market boosting, enabling users to create and manage their token needs instantly with an easy-to-use interface and without requiring coding."
            />
            <AccordionItem
                title="Is this platfrom secure ?"
                content="We provides secure and audited Smart Contracts for our thousand monthly recurrent users. You can rest assured that everything within our platform is 100% safe."
            />
            <AccordionItem
                title="What blockchain network does SpinLaunch.io use?"
                content="SpinLaunch.io operates on the Solana blockchain, known for its high speed and low transaction costs."
            />
            <AccordionItem
                title="Are there any subscription fees charged?"
                content="No, Spinlaunch does not charge any subscription fees. We operate on a simple one-time payment model. Once you make the payment, you gain full access to all our features and tools without any recurring charges. Enjoy the complete functionality of Spinlaunch with just a single payment."
            />
            <AccordionItem
                title="What should I do if I encounter an issue or need support?"
                content="If you face any issues or need help, visit the 'Help' section on our website or app for FAQs and support options. You can also email us directly at support@spinlaunch.io. Our support team is dedicated to resolving your concerns promptly and effectively."
            />
        </div>
    );
};

export default Accordion;
