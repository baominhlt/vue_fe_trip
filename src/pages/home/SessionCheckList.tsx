import { Checkbox } from 'antd'

const items = [
  {
    name: 'Áo đồng phục nhà FTECH',
    id: 1,
  },
  {
    name: 'Kem chống nắng',
    id: 2,
  },
  {
    name: 'Các loại dây sạc',
    id: 3,
  },
  {
    name: 'Money Money',
    id: 4,
  },
  {
    name: 'Mũ che nắng',
    id: 5,
  },
  {
    name: 'List nhạc thiệt chill',
    id: 6,
  },
  {
    name: 'Dress code Gala Dinner',
    id: 7,
  },
  {
    name: 'Các loại thuốc cá nhân',
    id: 8,
  },
  {
    name: 'Máy ảnh/Máy quay phim',
    id: 9,
  },
  {
    name: 'Giấy tờ tùy thân',
    id: 10,
  },
  {
    name: 'Gối chữ U',
    id: 11,
  },
  {
    name: 'Đồ ăn vặt (nếu cần)',
    id: 12,
  },
  {
    name: 'Quần áo ấm',
    id: 13,
  },
  {
    name: 'Đồ skincare',
    id: 14,
  },
  {
    name: 'Điện thoại/Ipad',
    id: 15,
  },
  {
    name: 'Các đồ dùng cá nhân khác',
    id: 16,
  },
  {
    name: 'Dù hoặc áo mưa',
    id: 17,
  },
  {
    name: 'Một tâm hồn đẹp...',
    id: 18,
  }
]

export default function SessionCheckList() {
  return (
    <>
    <figure className='absolute inset-0'>
      <img src='/images/bg-sp3.png' alt='bg' className='w-full h-full object-cover'/>
    </figure>
    <div className='custom-shape-divider-top-1685952780 h-100vh bg-transparent relative'>
      <div className='w-full'>
        <div className='container flex items-center justify-center flex-col h-[100vh]'>
          <p className='lg:text-6xl text-primary font-extrabold animate__wobble text-4xl lg:mb-6 mb-1'>
            CHECKLIST
          </p>

          <p className='lg:text-2xl font-thin text-gray-600 sm:text-xl my-2'>
            COMPANY TRIP
          </p>
          <div className='flex justify-center lg:px-32 my-2'>
            <p className='text-center lg:text-xl sm:text-sm text-base'>
              {' '}
              Để không phải lo lắng vì quên đồ khi đi du lịch, các bạn FTECHers
              nên chuẩn bị ngay một check-list các đồ dùng cần thiết cho cả
              chuyến đi. Các bạn tham khảo hoặc "screenshot" checklist tại đây
              nhéeee
            </p>
          </div>
          <div className='flex w-full flex-wrap mt-4'>
            {items.map((e) => {
              return (
                <div
                  key={e.id}
                  className='item-check lg:w-1/6 sm:w-1/3 w-1/2 flex mt-2'
                >
                  <Checkbox className='text-start lg:text-xl sm:text-sm text-base align-middle'>{e.name}</Checkbox>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
