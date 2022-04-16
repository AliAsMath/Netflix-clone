import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BtnNavigation from "./BtnNavigation";
import { ArrowForwardIos } from "@mui/icons-material";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div className="w-full pb-20 -mt-14 text-white gap-2 hover:z-10 relative flex flex-col items-center  overflow-x-hidden px-11 py-2">
      <h3 className="text-white self-start text-xl">{props.title}</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        navigation={true}
        className="w-full overflow-visible h-40"
      >
        {props.content.map((movieId, index) => {
          return (
            <SwiperSlide
              key={movieId}
              className={`bg-net-1 w-36 transition-all sm:hover:scale-x-150 hover:z-50 relative sm:hover:scale-y-150 hover:scale-y-125 hover:scale-x-125 ${
                index === 0 &&
                "sm:hover:translate-x-[25%] hover:translate-x-[12.5%]"
              } ${
                index === props.content.length - 1 && "hover:-translate-x-[25%]"
              }`}
            >
              <ListItem movieId={movieId} />
            </SwiperSlide>
          );
        })}

        <BtnNavigation direction={"next"} Shape={ArrowForwardIos} />
        <BtnNavigation direction={"prev"} Shape={ArrowForwardIos} />
      </Swiper>
    </div>
  );
}

export default List;
