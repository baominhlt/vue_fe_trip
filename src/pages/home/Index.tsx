import {Progress} from "antd";
import "./index.css";
import SessionFirstPage from "./SessionFirstPage.tsx";
import SessionSecondPage from "./SessionSecondPage.tsx";
import {
    BsArrowUp,
    BsCalendar2,
    BsCheck2Circle,
    BsGeoAlt, BsHeart,
    BsHouseExclamation,
    BsImage,
    BsPersonBoundingBox
} from "react-icons/bs";
import {TbBus} from "react-icons/tb";
import {useEffect, useRef, useState} from "react";
import SessionCalendar from "./SessionCalendar.tsx";
import SessionPlaceInfo from "./SessionPlaceIntro.tsx";
import SessionCheckList from "./SessionCheckList.tsx";
import SessionImage from "./SessionImage.tsx";

export default function Index() {
    const [choose, setChoose] = useState<number>(0);
    const firstPage = useRef<HTMLDivElement | null>(null);
    const secondPage = useRef<HTMLDivElement | null>(null);
    const calenderPage = useRef<HTMLDivElement | null>(null);
    const checkListRef = useRef<HTMLDivElement | null>(null);
    const dresscodePage = useRef<HTMLDivElement | null>(null);
    const discoverPage = useRef<HTMLDivElement | null>(null);
    const sessionPlace = useRef<HTMLDivElement | null>(null);
    const endPage = useRef<HTMLDivElement | null>(null);
    const [currentPos, setScrollPosition] = useState<number>(0);
    const [showButton, setShowButton] = useState(false);
    const menus = [
        {
            index: 0,
            icon: <BsHouseExclamation size={24} color={"white"}/>,
            text: "Home"
        },
        {
            index: 1,
            icon: (
                <TbBus size={24} color={"white"}/>
            ),
            text: "Invitation"
        },
        {
            index: 2,
            icon: <BsCalendar2 size={24} color={"white"}/>,
            text: "Timeline"
        },
        {
            index: 3,
            icon: <BsCheck2Circle size={24} color={"white"}/>,
            text: "CheckList"
        },
        {
            index: 4,
            icon: <BsPersonBoundingBox size={24} color={"white"}/>,
            text: "Dresscode"
        },
        {
            index: 5,
            icon: <BsGeoAlt size={24} color={"white"}/>,
            text: "Discover"
        },
        {
            index: 6,
            icon: <BsImage size={24} color={"white"}/>,
            text: "Place"
        },
        {
            index: 7,
            icon: <BsHeart size={24} color={"white"}/>,
            text: "End"
        }
    ];
    const handleClick = (index: number) => {
        switch (index) {
            case 0:
                window.scrollTo({
                    top: firstPage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 1:
                window.scrollTo({
                    top: secondPage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 2:
                window.scrollTo({
                    top: calenderPage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 3:
                window.scrollTo({
                    top: checkListRef.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 4:
                window.scrollTo({
                    top: dresscodePage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 5:
                window.scrollTo({
                    top: discoverPage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 6:
                window.scrollTo({
                    top: sessionPlace.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            case 7:
                window.scrollTo({
                    top: endPage.current?.offsetTop,
                    behavior: "smooth",
                });
                break;
            default:
                break;
        }
        setChoose(index);
    };
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const body = document.body;
            const html = document.documentElement;

            const height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);

            const percentScrolled = Math.round(((position + windowHeight) / height) * 100);

            setScrollPosition(percentScrolled);

            if (position > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentPos]);
    return (
        <div className="w-full h-[100vh]">
            <div className={`fixed z-[1000] bottom-0 left-0 right-0 pt-2 flex justify-center`}>
                <ul className="list flex bg-black/80 pt-1 pb-1 pl-3 pr-3 rounded-md">
                    {menus.map((e, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`p-3  hover:cursor-pointer text-base hover:text-white rounded mx-2 text-white
                } ${e.index == choose ? "text-white font-bold bg-primary" : "font-medium"}`}
                        >
                            {e.icon}
                        </li>
                    ))}
                </ul>
            </div>
            {showButton == true ? <div onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
            })} className="fixed lg:bottom-8 right-8 z-10 bottom-20">
                <Progress type="circle" percent={currentPos} width={60}
                          strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}
                          format={() => <div className="flex justify-center"><BsArrowUp className="font-bold" size={24}
                                                                                        color="red"/></div>}
                          showInfo={true}/>
            </div> : <></>}
            <div className="first_page" ref={firstPage}>
                <SessionFirstPage/>
            </div>
            <div className="second_page relative" ref={secondPage}>
                <SessionSecondPage/>
            </div>
            <div className="calendar_page" ref={calenderPage}>
                <SessionCalendar/>
            </div>
            <div className="checklist_paget relative" ref={checkListRef}>
                <SessionCheckList/>
            </div>
            <div className="relative" ref={dresscodePage}>
                <img src='/images/decore.jpg' alt='decore' className='w-full h-full object-cover'/>
            </div>
            <div className="place_page" ref={discoverPage}>
                <SessionPlaceInfo/>
            </div>
            <div className="" ref={sessionPlace}>
                <SessionImage/>
            </div>
            <div className="relative" ref={endPage}>
                <img src='/images/footer.png' alt='footer' className='w-full h-full object-cover'/>
            </div>
        </div>
    );
}
