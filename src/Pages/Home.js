import React,{useState} from 'react'
import Cards from '../Components/Cards'
function Home() {
   const [isHovered, setIsHovered] = useState();
   const handleMouseEnter = (value) =>{ setIsHovered(value)};
   const handleMouseLeave = () => {setIsHovered(-1)};

  return (
    <div className="">
      <div>
        <Cards
          isHovered={isHovered}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default Home
