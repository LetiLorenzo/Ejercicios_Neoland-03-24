import React from 'react';
import SubTitle from './components/SubTitle/Subtitle';
import { Image } from './components';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';



const App = () => {
  return (
    <div id="cuerpo">
      <Title text={"Welcome to my website"} />
      <SubTitle text={"About Us"} />
      <Image
        src="https://res.cloudinary.com/dfax6hcff/image/upload/v1712590718/MemoryImages/Groot_cph7ib.jpg"
        alt="Imagen mini Groot"
        width="200"
        height="150"
      />
      <Paragraph text={"This is a paragraph explaining something."} />
    </div>
  );
};

export default App;
