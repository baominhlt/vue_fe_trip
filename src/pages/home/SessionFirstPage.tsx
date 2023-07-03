import { useEffect, useRef } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import { DATE_START } from "../../constants/date";
import Countdown from "react-countdown";
import ScrollReveal from "scrollreveal";


export default function SessionFirstPage() {
  const titleElement = useRef<HTMLParagraphElement>(null);
  // const [maxWidth,setMaxWidth]=useState<number>(window.);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      mobile: false,
    });

    sr.reveal(titleElement?.current as any);

    return () => sr.destroy();
  }, []);
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div>
        <div>{days} days</div>
        <div>{hours} hours</div>
        <div>{minutes} minutes</div>
        <div>{seconds} seconds</div>
      </div>
    );
  };
  return (
    <div className="h-[100vh] bg-bgmobile md:bg-bgfull bg-cover bg-no-repeat bg-top flex items-center justify-center relative">
      <Countdown
        date={DATE_START}
        className="text-gray-800 text-8xl"
        autoStart
        intervalDelay={0}
        renderer={() => {
          return (
            <>
              <div className="flex container md:pt-40 justify-center items-center flex-col ">
                <div className="overlay-bg"></div>
                <div className="header-content relative z-10">
                  <div
                    className="text-center lg:text-4xl lg:mb-8 text-white max-w-2xl cursor-pointer text-sm"
                    ref={titleElement}
                  >
                    Cùng đếm ngược ngày khởi hành thôiiii
                  </div>
                </div>
                <div className="flex w-full relative z-20">
                  <FlipCountdown
                    hideYear
                    hideMonth
                    endAtZero
                    size="large" // Options (Default: medium): large, medium, small, extra-small.
                    endAt={"2023-07-14 00:00:00"}
                    renderer={renderer}

                  // Date/Time
                  />
                </div>
                {/* <div className="flex justify-center mt-12 relative z-50">
                  <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                    Discovery
                  </button>
                </div> */}
              </div>
            </>
          );
        }}
      />
    </div>
  );
}
