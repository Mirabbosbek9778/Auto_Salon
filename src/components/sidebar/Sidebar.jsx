import { Link } from "react-router-dom";
import { Box, Container, Text, TextLogo, Wrapper } from "./style";
import { useState } from "react";
import User from "../../assets/icons/user.svg";
import Rim from "../../assets/icons/rim.svg";
import Settings from "../../assets/icons/settings.svg";

const Sidebar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveNavIndex(index);
  };

  return (
    <Wrapper>
      <Container>
        <TextLogo>
          <Link to="/">Demo Test</Link>
        </TextLogo>
        <div className="w-full">
          <Box
            className={activeNavIndex === 0 ? "active-nav" : ""}
            onClick={() => handleItemClick(0)}
          >
            <Link to="/profile" className="flex items-center gap-5">
              <img src={User} />
              <Text>Profile</Text>
            </Link>
          </Box>
          <Box
            className={activeNavIndex === 1 ? "active-nav" : ""}
            onClick={() => handleItemClick(1)}
          >
            <Link to="/" className="flex items-center gap-5">
              <img src={Rim} />
              <Text>Vehicles</Text>
            </Link>
          </Box>
          <Box
            className={activeNavIndex === 2 ? "active-nav" : ""}
            onClick={() => handleItemClick(2)}
          >
            <Link to="/settings" className="flex items-center gap-5">
              <img src={Settings} />
              <Text>Settings</Text>
            </Link>
          </Box>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
