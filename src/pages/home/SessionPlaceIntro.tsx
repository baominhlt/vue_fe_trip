import {Carousel, Typography, Button} from '@material-tailwind/react'

export default function SessionPlaceInfo() {
    return (
        <Carousel className='rounded-xl h-[100vh]'>
            <div className='relative h-full w-full'>
                <img
                    src='./images/thaibinhcotran_main.jpeg'
                    alt='image 1'
                    className='h-full w-full object-cover'
                />
                <div
                    className='absolute inset-0 grid h-full w-full place-items-center bg-black/25 note-background-color'>
                    <div className='w-3/4 text-center md:w-2/4'>
                        <Typography
                            variant='h1'
                            color='white'
                            className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                        >
                            THÁI BÌNH CỔ TRẤN
                        </Typography>
                        <p
                            color='white'
                            className='mb-12 opacity-80 line-clamp-4 text-white text-xl'
                        >
                            Thái Bình Cổ Trấn - nơi mệnh danh “Tiểu phượng hoàng cổ trấn”. Trấn Cổ Thái Bình có lịch sử
                            từ thời nhà Minh - từ hơn 1000 năm trước. Từ tường thành cổ, chính quyền địa phương đã cho
                            xây dựng khu cảnh quan bên dòng Tả giang. Cổ trấn về đêm lung linh ánh đèn bên dòng sông Tả.
                            Thái Bình Cổ thành – tên cũ là Thái Bình Phủ, có lịch sử từ thời nhà Nguyên. Đến thời nhà
                            Thanh mới chính thức xây tường thành. Mọi người có thể ngắm cầu Kiều, chụp ảnh tại Cầu Kiều
                            vắt ngang qua dòng Tả giang rực rỡ ánh đèn. Check in với hàng nghìn góc sống ảo tại đây: dãy
                            phố cổ, dãy đèn lồng, cổng thành, trà quán…FTECHers có thể thuê váy áo thần tiên tỷ tỷ,
                            trang phục Miêu tộc…. để check in sống ảo.
                        </p>
                        <div className='flex justify-center gap-2'>
                            <a href='https://www.ddgx.cn/show/61774.html' target='_blank'>
                                <Button size='lg' color='white'>
                                    Khám phá
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-full w-full'>
                <img
                    src='./images/congvienthanhtuson_main.jpeg'
                    alt='image 1'
                    className='h-full w-full object-cover'
                />
                <div
                    className='absolute inset-0 grid h-full w-full place-items-center bg-black/25 note-background-color'>
                    <div className='w-3/4 text-center md:w-2/4'>
                        <Typography
                            variant='h1'
                            color='white'
                            className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                        >
                            CÔNG VIÊN THANH TÚ SƠN
                        </Typography>
                        <p
                            color='white'
                            className='mb-12 opacity-80 line-clamp-4 text-white text-xl'
                        >
                            Đến với Thanh Tú Sơn chắc chắn bạn sẽ có những trải nghiệm vô cùng thú vị với hơn 30 cảnh
                            đẹp mang kiến trúc của cung điện xưa: Chùa Quan âm, tượng Phật Ngọc, tháp Ngự Long, tháp
                            Phượng Hoàng, tháp Long Tượng, vườn hữu nghị Asean…
                        </p>
                        <div className='flex justify-center gap-2'>
                            <a href='https://cn.tripadvisor.com/Attraction_Review-g317092-d1834476-Reviews-Qingxiu_Mountain-Nanning_Guangxi.html' target='_blank'>
                                <Button size='lg' color='white'>
                                    Khám phá
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-full w-full'>
                <img
                    src='./images/namninhchida_main.png'
                    alt='image 1'
                    className='h-full w-full object-cover'
                />
                <div
                    className='absolute inset-0 grid h-full w-full place-items-center bg-black/25 note-background-color'>
                    <div className='w-3/4 text-center md:w-2/4'>
                        <Typography
                            variant='h1'
                            color='white'
                            className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                        >
                            NANNING EVERBRIGHT CITY - NAM NINH CHI DẠ
                        </Typography>
                        <Typography
                            color='white'
                            className='mb-12 opacity-80 line-clamp-4 text-white text-xl'
                        >
                            Khu vui chơi và con phố ẩm thực dài nhất thành phố. Mọi người có thể xem các tiết mục biểu
                            diễn dân tộc, thưởng thức các món ăn vặt đặc sắc của Quảng Tây và các vùng miền khác như Bún
                            ốc cay Liễu Châu, bánh bao Thiên Tân, thịt nướng Mông Cổ, gà nướng Hàn Quốc, bánh bay Ấn
                            Độ...
                        </Typography>
                        <div className='flex justify-center gap-2'>
                            <a href='https://www.youtube.com/watch?v=GUEV0MiLTSQ' target='_blank'>
                                <Button size='lg' color='white'>
                                    Khám phá
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
