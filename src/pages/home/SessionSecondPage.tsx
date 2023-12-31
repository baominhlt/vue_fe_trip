import {Slider} from 'antd'
import {useEffect, useRef, useState} from 'react'
import './index.css'
import 'animate.css'
import ScrollReveal from 'scrollreveal'
import BusIcon from '../../components/icons/Bus'
import {motion} from 'framer-motion'

export default function SessionSecondPage() {
    const [range, setRange] = useState<number>(0)
    const titleElement = useRef<HTMLParagraphElement>(null)
    const descriptionElement = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            mobile: false,
        })

        sr.reveal(titleElement?.current as any)

        return () => sr.destroy()
    }, [])

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            mobile: false,
        })

        sr.reveal(descriptionElement?.current as any)

        return () => sr.destroy()
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setRange((prevValue) => {
                if (prevValue === 100) {
                    clearInterval(interval)
                    return prevValue
                } else {
                    return prevValue + 1
                }
            })
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [range])
    return (
        <>
            <figure className='absolute inset-0'>
                <img src='/images/second_page.jpg' alt='bg' className='w-full h-full object-cover'/>
            </figure>
            <div className='custom-shape-divider-top-1685952780 lg:h-[100vh] h-[150vh] md:h-[150vh] bg-transparent relative'>
                <div className='w-full'>
                    <div className='container items-center justify-center h-[150vh] lg:h-[100vh] flex flex-col'>
                        <p
                            ref={titleElement}
                            className='lg:text-6xl text-primary font-extrabold lg:mb-1 animate__wobble text-4xl'
                        >
                            INVITATION
                        </p>

                        <p
                            className='lg:text-2xl font-thin text-gray-600 sm:text-xl lg:my-2'
                            ref={descriptionElement}
                        >
                            COMPANY TRIP
                        </p>
                        <div className='flex justify-center lg:px-32' ref={titleElement}>
                            <p className='text-justify lg:my-2 lg:text-xl sm:text-sm text-base'>
                                {' '}
                                Chào mừng các bạn FTECHers Hà Nội đến với Nam Ninh Trip 2023!
                                Với tinh thần làm nhiệt tình, chơi hết mình, Company Trip 2023 mong muốn sẽ mang lại
                                những cảm xúc trọn vẹn và vui vẻ nhất đến với tất cả các thành viên FTECHers Hà Nội.
                                Chuyến đi lần này còn là hành trình của sự gắn kết và thấu hiểu, giúp tái tạo năng lượng
                                sau thời gian làm việc hăng say, thổi bùng lên ngọn lửa nhiệt huyết chinh phục những thử
                                thách phía trước. Chúc các bạn FTECHers Hà Nội sẽ có một chuyến đi thật an toàn và nhiều
                                niềm vuiii.
                            </p>
                        </div>
                        <div className='flex justify-center w-full items-center lg:mt-8'>
                            <div className='from-place mr-4'>
                                <p className='lg:text-2xl text-center mb-0 font-bold text-base md:whitespace-nowrap'>
                                    Hà Nội
                                    <p className="lg:text-xl text-center mb-0 text-sm md:whitespace-nowrap">
                                        Việt Nam
                                    </p>
                                </p>
                            </div>
                            <div className='w-1/3'>
                                <motion.div
                                    initial={{x: 0}}
                                    animate={{x: window.outerWidth*5/10}}
                                    transition={{
                                        duration: 60,
                                    }}
                                >
                                    <BusIcon/>
                                </motion.div>
                                <Slider
                                    style={{margin: 4, marginTop: -4}}
                                    range
                                    value={[0, 100]}
                                    disabled
                                />
                            </div>
                            <div className='from-place mx-auto'>
                                <p className='lg:text-2xl text-center mb-0 font-bold text-base md:whitespace-nowrap'>
                                    Sùng Tả
                                    <p className="lg:text-xl text-center mb-0 text-sm md:whitespace-nowrap">
                                        Trung Quốc
                                    </p>
                                </p>
                            </div>
                            <div className="w-1/3 h-full flex flex-col justify-end align-bottom">
                                <Slider
                                    style={{margin: 4, marginTop: -4}}
                                    range
                                    value={[0, 100]}
                                    disabled
                                />
                            </div>
                            <div className='from-place ml-4'>
                                <p className='lg:text-2xl text-center mb-0 font-bold text-base md:whitespace-nowrap'>
                                    Nam Ninh
                                    <p className="lg:text-xl text-center mb-0 text-sm md:whitespace-nowrap">
                                        Trung Quốc
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center lg:mt-8 mt-2 flex-wrap lg:12'>
                            <div className='place-center lg:w-3/12 w-full mx-3'>
                                <div className='title-main flex justify-start flex-col items-center'>
                                    <h3 className='lg:text-2xl font-bold m-0 text-center lg:mb-1 text-base'>
                                        Địa điểm tập trung:
                                    </h3>
                                    <p className='card-content text-start lg:text-base sm:text-sm text-sm'>
                                        Trụ sở chính công ty FTECH
                                        <br/>
                                        Số 434 đường Trần Khát Chân, phường Phố Huế, quận Hai Bà Trưng, TP Hà Nội.
                                    </p>
                                </div>
                            </div>
                            <div className='place-center lg:w-5/12 w-full mx-3'>
                                <div className='title-main flex justify-start flex-col items-center'>
                                    <h3 className='lg:text-2xl font-bold m-0 text-center lg:mb-1 text-base'>
                                        Liên hệ hỗ trợ:{' '}
                                    </h3>
                                    <p className='card-content text-start lg:text-base sm:text-sm text-sm'>
                                        Trưởng ban tổ chức: Ms. Nguyễn Thạch Ánh - 0902209494 <br/>
                                        Phó ban tổ chức: Ms. Lưu Thị Mến - 0979054002 <br/>
                                        Trưởng xe 1: Ms. Trương Thị Hương - 0963970521 <br/>
                                        Trưởng xe 2: Ms. Đoàn Hoài Linh - 0828152525 <br/>
                                        Trưởng xe 3: Ms. Ngô Thị Phương Duyên - 0372647468
                                    </p>
                                </div>
                            </div>
                            <div className='place-center lg:w-3/12 w-full mx-3'>
                                <div className='title-main flex justify-start flex-col items-center'>
                                    <h3 className='lg:text-2xl font-bold text-base m-0 text-center lg:mb-1'>
                                        Thời gian khởi hành:
                                    </h3>
                                    <p className='card-content text-start lg:text-base sm:text-sm text-sm'>
                                        Thứ 6, ngày 14/07/2023
                                        <br/>
                                        - 04H40: FTECHers Hà Nội tập trung.
                                        <br/>
                                        - 05H00: Xe xuất phát đi Cửa khẩu Hữu Nghị Quan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img
        className='h-[100px] w-[170px] absolute top-5 left-1/2 -translate-x-1/2'
        src='/public/images/icon-1.png'
        alt=''
      />
      <img
        className='h-[100px] w-[170px] absolute top-[10%] right-[0%] md:top-[20%] md:right-[80%]'
        src='/public/images/icon-4.png'
        alt=''
      />
      <img
        className='h-[120px] w-[205px] absolute top-[4%] right-[65%] md:top-[22%] md:right-[10%]'
        src='/public/images/icon-15.png'
        alt=''
      /> */}
            </div>
        </>
    )
}
// Đà Nẵng
