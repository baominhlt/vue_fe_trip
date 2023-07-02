interface INumberCardTimer {
  value: number;
  text: string;
}
export default function CardTimer(cardTimer: INumberCardTimer) {
  let numberShow = cardTimer.value.toString();
  if (cardTimer.value < 10) {
    numberShow = "0" + cardTimer.value.toString();
  }
  return (
    <div className="p-8 bg-gray-200 text-primary rounded-md hover:cursor-pointer md:text-4xl sm:text-2xl text-xl lg:text-8xl min-w-[150px] hover:bg-primary hover:text-white">
      {numberShow}
      <p className="text-sm mt-1 font-bold">{cardTimer.text}</p>
    </div>
  );
}
