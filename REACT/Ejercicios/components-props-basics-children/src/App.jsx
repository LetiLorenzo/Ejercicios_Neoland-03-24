
import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Image } from './components/Image/Image';
import { Main } from './components/Main/Main';
import Paragraph from './components/Paragraph/Paragraph';
import SubTitle from './components/SubTitle/Subtitle';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div id="cuerpo">
      <Header>
        <Title text={"CAPITAN AMERICA"} />      
      </Header>
      <Main>
        <SubTitle text={"Personaje de ficción de la saga Marvel"} />
        <Image
          src="https://res.cloudinary.com/dfax6hcff/image/upload/v1712587491/MemoryImages/C-America_lgp52l.jpg"
          alt="Imagen Capitán América"
          width="250"
          height="300"
        />
        <Paragraph id="Main" text={"Maravilloso ejemplar de nuestro querido Capitán América."} />
      </Main>
      <Footer>
        <Paragraph text={"© 2024 Leticia Lorenzo. All rights reserved."}/>
      </Footer>
     
    </div>
  );
};

export default App
