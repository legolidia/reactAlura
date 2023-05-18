import Banner from './componentes/Banner';
import TextLabel from './componentes/TextLabel';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextLabel label="Pokémon name:" placeholder="Write the name of your Pokémon."/>    
      <TextLabel label="Type:" placeholder="Fire, Water, Dark, Grass, Fairy, Bug"/>     
      <TextLabel label="Photo:" placeholder="Choose a photo of your Pokémon."/>    
 
    </div>
  );
}

export default App;
