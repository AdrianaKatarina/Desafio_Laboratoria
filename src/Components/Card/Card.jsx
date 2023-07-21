import './Card.css';
import Button from '../Button/Button';

const Card = ({
  isCardVertical,
  vehicles,
  modelFormatting,
}) => {
  return <div className='Position-cards'>
    {vehicles.map((vehicle) => (
      <section key={vehicle.veiculo_id} className={isCardVertical ? 'Vertical-card' : 'Horizontal-card'}>
        <img className='Photo-card' src={vehicle.veiculo_foto[0]} alt={`Foto do veiculo ${vehicle.veiculo_marca}`} />
        <p className='City'>{vehicle.veiculo_cidade}</p>
        <div className='Position'>
          <h4 className='Brand'>{vehicle.veiculo_marca} {vehicle.modelo_nome_pai}</h4>
          <p className='Elipse'>{modelFormatting(vehicle.veiculo_modelo, vehicle.modelo_nome_pai )}</p>
          <h3 className='Price'>{Number(vehicle.veiculo_valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          <p className='Information'>{Number(vehicle.veiculo_km).toLocaleString()}km | {vehicle.veiculo_cambio} | {vehicle.ano_modelo}</p>          
          <Button className='Btn-financing Financing' children='Simular Financiamento' />
          <Button className='Btn-contact Contact' children='Entrar em contato' />
        </div>
      </section>
    ))}
  </div>
}

export default Card;