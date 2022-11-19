import { useRef } from "react";
import Footer from "../components/Footer";
import question from "../assets/images/question mark.png";

const FAQ = () => {
  const ansRef = useRef<HTMLParagraphElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const questionAnswers = [
    {
      q: `I am Nigerian and a victim of crime, but I was victimized outside of Nigeria.
        Can I receive financial assistance?`,
      a: `victims of specific heinous violent crimes in a foreign jurisdiction for financial situations if no other source of support is available. we support Nigerian citizens outside the country.`,
    },
    {
      q: `My loved one is a victim of crime. How can I support them?.`,
      a: `victims of specific heinous violent crimes in a foreign jurisdiction for financial situations if no other source of support is available. we support Nigerian citizens outside the country.`,
    },
    {
      q: `My loved one is a victim of crime. How can I support them?.`,
      a: `victims of specific heinous violent crimes in a foreign jurisdiction for financial situations if no other source of support is available. we support Nigerian citizens outside the country.`,
    },
    {
      q: `My loved one is a victim of crime. How can I support them?.`,
      a: `victims of specific heinous violent crimes in a foreign jurisdiction for financial situations if no other source of support is available. we support Nigerian citizens outside the country.`,
    },
  ];

  function toggleOpenAnswer(target: HTMLDivElement) {
    let sibling = target.nextElementSibling;
    let span = target.querySelector("span")!;
    const answers = faqRef.current?.querySelectorAll("p:last-child");
    answers?.forEach((ans) => {
      if (ans === sibling) {
        console.log("equal");
      } else {
        console.log("not equal");
        ans?.setAttribute("style", `height:0px`);
        span.textContent = "+";
        span.setAttribute("style", "transform:scaleX(1)");
      }
    });
    if (sibling) {
      if (getComputedStyle(sibling).height === "0px") {
        sibling?.setAttribute("style", `height:${sibling.scrollHeight}px`);
        span.textContent = "-";
        // console.log('height is 0px');
      } else sibling?.setAttribute("style", `height:0px`);
      span.textContent = "+";
      // console.log('height is not 0px');
    }
  }

  return (
    <>
      <div className="bg-[#27284d] pb-10 md:pb-28">
        <div className="w-full h-96 lg:h-[450px]">
          <img
            className="w-full h-full object-fill md:object-cover"
            src={question}
          />
        </div>
        <div className="bg-white max-w-2xl mx-auto py-5 -translate-y-10">
          <h3 className="px-5 sm:px-10 font-semibold text-2xl border-b pb-5">
            Information for Victims
          </h3>
          <div className="faq" ref={faqRef}>
            {questionAnswers.map((item, idx) => (
              <div
                className="border-b pr-[14px] sm:pr-8 px-5 sm:px-10 py-3"
                key={idx}
              >
                <div
                  onClick={(e) => {
                    const target = e.currentTarget;
                    toggleOpenAnswer(target);
                  }}
                  className="flex cursor-pointer items-start gap-5 justify-between"
                >
                  <p className="font-medium">{item.q}</p>
                  <span className="text-xl block font-bold p-2 -mt-3 pb-1 cursor-pointer">
                    +
                  </span>
                </div>
                <p
                  className="answer mt-3 h-0 overflow-hidden transition-all duration-500 ease-in-out text-sm opacity-90"
                  ref={ansRef}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
