import IconSet from "../../../assets/icons/iconSet.svg";
import Check from "../../../assets/icons/check.svg";
import { Category, Line, TextCard, Wrapper } from "./style";

const Cards = ({ icons, title, seria, category, day }) => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-end pt-5 pr-5">
          <button>
            <img src={IconSet} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <img src={icons} />
          </div>
          <div className="flex flex-col justify-start gap-3">
            <TextCard title>{title}</TextCard>
            <TextCard gray>{seria}</TextCard>
          </div>
        </div>
      </div>
      <Line></Line>
      <div className="flex justify-between pl-6 pr-6 pt-[18px] items-center">
        <Category>
          <img src={Check} />
          <Category.Text>{category}</Category.Text>
        </Category>
        <TextCard gray>{day} days left</TextCard>
      </div>
    </Wrapper>
  );
};

export default Cards;
