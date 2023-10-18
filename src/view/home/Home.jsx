import { ButWrap } from "../../components/generic/buttons/style";
import Cards from "../../components/generic/card/Cards";
import { Category } from "../../components/generic/card/style";
import Title from "../../components/generic/title/Title";
import { cardCar } from "../../mock/cardCar";
import Plus from "../../assets/icons/plus.svg";
import Profile from "../../assets/icons/profile.svg";

const Home = () => {
  return (
    <div className="pt-[34px] max-w-[1440px] ml-[30px]">
      <div className="flex justify-between pr-[30px]">
        <div className="flex items-center">
          <Title title={"Vechicles"} />
          <Category blur>256</Category>
        </div>
        <div className="flex items-center">
          <ButWrap red>
            <img src={Plus} />
          </ButWrap>
          <img src={Profile} />
          <h1>john Doe</h1>
        </div>
      </div>
      <div className="pt-2 flex gap-[30px] flex-wrap justify-center">
        {cardCar.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
