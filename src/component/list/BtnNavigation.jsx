import { useSwiper } from "swiper/react";

function Next({ direction, Shape }) {
  const swiper = useSwiper();

  const slideHandler = () => {
    if (direction === "next") return swiper.slideNext();
    if (direction === "prev") return swiper.slidePrev();
  };

  return (
    <button
      className={`absolute swiper-button-prev top-0 bg-net-1 flex justify-center items-center bg-opacity-30 z-10  h-32 ${
        direction === "next"
          ? "right-0 translate-x-full "
          : "left-0 -translate-x-full rotate-180"
      }`}
      onClick={slideHandler}
    >
      <Shape className="xs:text-5xl text-3xl text-white " />
    </button>
  );
}

export default Next;
