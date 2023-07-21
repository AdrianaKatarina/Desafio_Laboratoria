import './App.css';
import { React, useEffect, useState } from "react";
import data from '../data/data.json';
import Button from '../Components/Button/Button';
import Card from '../Components/Card/Card';
import Pagination from '../Components/Pagination/Pagination';

const App = () => {
  const [cardPerPage, setCardPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCardVertical, setIsCardVertical] = useState(true);

  const numberOfPages = Math.ceil(data.length / cardPerPage);
  const startIndex = currentPage * cardPerPage;
  const endIndex = startIndex + cardPerPage;
  const currentCard = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [setCardPerPage])

  const handleClickLayoutChange = () => {
    setIsCardVertical(!isCardVertical);
  }
 
  const modelFormatting = (vehicleModel, vehicleDadModel) => {
    const vehicleArray = vehicleModel.toLocaleLowerCase().split(' ');
    const dadModelArray = vehicleDadModel.toLocaleLowerCase().split(' ');
    
    if(dadModelArray.length > 1){
      let vehicleModel = vehicleArray;
      for(let dm = 0; dm < dadModelArray.length; dm++) {
        const filterVehicleModel = vehicleModel.filter(v => v !== dadModelArray[dm]);
        vehicleModel = filterVehicleModel;
      }
      const vehicleModelFormatted = vehicleModel.join(' ');
      return vehicleModelFormatted[0].toUpperCase() + vehicleModelFormatted.substring(1);
    } else {
      let filterVehicleModel = vehicleArray.filter(v => v !== vehicleDadModel.toLocaleLowerCase());
      filterVehicleModel = filterVehicleModel.join(' ');
      return filterVehicleModel[0].toUpperCase() + filterVehicleModel.substring(1);
    }
  }
  
  return (
    <main className='Geral'>
      <section className='Filters'>
        <h5>Visualização:</h5>
        <select className='Select-quantity' value={cardPerPage} onChange={(e) => setCardPerPage(Number(e.target.value))}>
          {[5,10,20,50].map((value) => (
            <option key={value} value={value}>{`${value} por página`}</option>
          ))}
        </select>
        <Button className='Btn-layout' onClick={handleClickLayoutChange} children={isCardVertical ? 'Horizontal' : 'Vertical'}/>
      </section>
      <Card 
        isCardVertical={isCardVertical}
        vehicles={currentCard}
        modelFormatting={modelFormatting}
      />
      <Pagination 
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        onClickCurrentPage={(e) => setCurrentPage(Number(e.target.value))}
      />
    </main>
  );
}

export default App;
