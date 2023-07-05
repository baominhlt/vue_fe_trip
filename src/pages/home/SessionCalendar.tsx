import {Button} from 'antd';
import './index.css';

import {BsMenuButton} from 'react-icons/bs'
import {useState} from 'react';
import CustomModal from '../../components/Modal/CustomModal';


const firstDay = [
    {
        time: "04H40",
        content: "Tập trung tại công ty để di chuyển đi Nam Ninh.",
    }, {
        time: "05H00 - 08H00",
        content: "Xe di chuyển đi cửa khẩu Hữu Nghị Quan - Ăn sáng tại điểm dừng."
    }, {
        time: "08H30 - 11H30",
        content: "Đến cửa khẩu Hữu Nghị Quan và làm thủ tục xuất nhập cảnh cửa khẩu Bằng Tường.",
    }, {
        time: "11H30 - 13H00",
        content: "Ăn trưa tại Bằng Tường với các món ăn truyền thống của địa phương.",
    }, {
        time: "13H30 - 15H00",
        content: "Xuất phát đi Sùng Tả - một huyện của tình Quảng Tây.",
    }, {
        time: "15H00 - 15H30",
        content: "Đến Sùng Tả đoàn nhận phòng khách sạn 5*, nghỉ ngơi.",
    }, {
        time: "16H00 - 16H30",
        content: "Chụp ảnh lưu niệm toàn công ty - FTECHers chuẩn bị áo đồng phục để cùng nhau lưu giữ những " +
            "kỷ niệm đẹp nha.",
    }, {
        time: "18H00",
        content: "Lên đường đi ăn tối thuiii.",
    }, {
        time: "Sau bữa tối",
        content: "Cùng nhau đi khám phá Thái Bình Cổ Trấn và check in cảnh đẹp ở đây.",
    }, {
        time: "Note:",
        content: "- Sáng hôm sau sẽ dọn đồ sớm để đi Nam Ninh - vậy FTECHers lưu ý không bỏ quên đồ ở khách sạn " +
            "Sùng Tả."
    }, {
        time: "",
        content: "- Thời gian có thể được điều chỉnh theo tình hình thực tế.",
    }
];
const secondDay = [
    {
        time: "07H00 - 08H00",
        content: "FTECHers kiểm tra đồ dùng cá nhân và trả phòng. Ăn sáng tại khách sạn.",
    }, {
        time: "08H30 - 10H00",
        content: "Khởi hành đi Nam Ninh bằng đường cao tốc mới “Trung Quốc - Asean”.",
    }, {
        time: "10H00 - 11h30",
        content: "Tham quan công viên Thanh Tú Sơn.",
    }, {
        time: "11H30 - 13H30",
        content: "Ăn trưa tại nhà hàng.",
    }, {
        time: "14H00 - 14H45",
        content: "Nhận phòng khách sạn và nghỉ ngơi tại Nam Ninh.",
    }, {
        time: "15H00 - 17H00",
        content: "Cùng nhau đi mua sắm tại Tam ngõ nhị - khu phố mua sắm sầm uất bậc nhất tại Nam Ninh. " +
            "(FTECHers không có nhu cầu mua sắm có thể đi chơi tự do)",
    }, {
        time: "17H00",
        content: "Di chuyển về khách sạn.",
    }, {
        time: "18H00 - 20H30",
        content: "Lên đồ sương sương để quẩy Gala Dinner thui. Tiệc Gala tại khách sạn.",
    }, {
        time: "20H30",
        content: "Kết thúc Gala Dinner, xe đón đoàn đi Thăm quan Nanning Everbright City – Nam Ninh Chi Dạ, khu " +
            "vui chơi và con phố ẩm thực dài nhất thành phố.",
    }, {
        time: "Kết thúc tham quan",
        content: "Xe sẽ đón mọi người quay trở lại khách sạn.",
    }, {
        time: "Hoạt động tự do",
        content: "",
    }
];

const thirdDay = [
    {
        time: "07H00 - 08H00",
        content: "Kiểm tra đồ dùng cá nhân và trả phòng. Ăn sáng tại khách sạn.",
    }, {
        time: "08H30 - 11H30",
        content: "Xe đón khởi hành đi Bằng Tường.",
    }, {
        time: "12H00 - 13H30",
        content: "Ăn trưa tại Bằng Tường.",
    }, {
        time: "13H30 - 14H00",
        content: "Đoàn khởi hành về cửa khẩu Hữu Nghị Quan.",
    }, {
        time: "14H00 - 16H00",
        content: "Về cửa khẩu Hữu Nghị Quan, làm thủ tục nhập cảnh trở lại Việt Nam, xe đón về Hà Nội.",
    }, {
        time: "19H00",
        content: "Kết thúc chuyến hành trình 3N2Đ tại 434 Trần Khát Chân.",
    }
];
export default function SessionCalendar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [datePopup, setDatePopup] = useState(firstDay);

    const showModal = (value: number) => {
        switch (value) {
            case 1:
                setDatePopup(firstDay as []);
                break;
            case 2:
                setDatePopup(secondDay as []);
                break;

            case 3:
                setDatePopup(thirdDay as []);
                break;
            default:
                break;
        }
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="bg-img w-full h-[100vh]">
                <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} children={
                    <>

                        <ul className='container p-0'>
                            {
                                datePopup.map((e) =>
                                    <li className="flex">
                                        {e.time == "Note" ? "<br/>" : ""}
                                        <p className="timer w-5/12 text-primary text-lg font-bold">
                                            {e.time}
                                        </p>
                                        <p className="timer w-7/12 text-primary text-lg font-medium">
                                            {e.content}
                                        </p>
                                    </li>
                                )
                            }
                        </ul>
                    </>
                } zIndex={100} title={<h3 className='font-bold text-2xl text-primary'>Lịch trình</h3>}/>

                <div className="w-full flex items-center container">
                    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative h-[100vh]">
                        <h1 className="lg:text-6xl text-center font-bold text-white md:text-4xl text-2xl">
                            Timeline
                        </h1>
                        <div className="border-l-2 lg:mt-10 mt-4">
                            <div onClick={() => showModal(1)}
                                 className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 lg:py-4 py-2 bg-blue-300 text-white rounded mb-8 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div
                                    className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0"></div>

                                <div className="flex-auto">
                                    <h1 className="text-lg text-white">Ngày 1</h1>
                                    <h1 className="lg:text-xl text-lg font-bold text-white">
                                        Lên đường đi Sùng Tả; Nam Ninh thôiii
                                    </h1>
                                    <h3 className="text-white">Ngày 14/07/2023</h3>
                                </div>
                                <div className="hidden">
                                    <Button icon={<BsMenuButton color="white" size={24}/>} type='text'/>
                                </div>
                            </div>

                            <div onClick={() => showModal(2)}
                                 className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 lg:py-4 py-2 bg-amber-800 text-white rounded mb-8 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div
                                    className="w-5 h-5 bg-amber-900 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <div className="w-10 h-1 bg-amber-600 absolute -left-10 z-0"></div>

                                <div className="flex-auto">
                                    <h1 className="text-lg text-white">Ngày 2</h1>
                                    <h1 className="lg:text-xl text-lg font-bold text-white">
                                        Khám phá Nam Ninh - thăm thú công viên Thanh Tú Sơn - shopping quên lối về - và
                                        cháy hết mình cùng Gala Dinner
                                    </h1>
                                    <h3 className="text-white">Ngày 15/07/2023</h3>
                                </div>
                                <div className="hidden">
                                    <Button icon={<BsMenuButton color="white" size={24}/>} type='text'/>
                                </div>
                            </div>

                            <div onClick={() => showModal(3)}
                                 className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 lg:py-4 py-2 bg-green-600 text-white rounded mb-8 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div
                                    className="w-5 h-5 bg-green-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                <div className="w-10 h-1 bg-green-400 absolute -left-10 z-0"></div>

                                <div className="flex-auto">
                                    <h1 className="text-lg text-white">Ngày 3</h1>
                                    <h1 className="lg:text-xl text-lg font-bold text-white">
                                        Nam Ninh - Bằng Tường - Hữu Nghị Quan - Hà Nội
                                    </h1>
                                    <h3 className="text-white">Ngày 16/07/2023</h3>
                                </div>
                                <div className="hidden">
                                    <Button icon={<BsMenuButton color="white" size={24}/>} type='text'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}
