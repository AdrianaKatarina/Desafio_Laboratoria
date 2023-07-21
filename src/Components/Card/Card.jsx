import './Card.css';
import Button from '../Button/Button';

const Card = ({
  isCardVertical,
  vehicles,
  modelFormatting,
}) => {
  return <div className='position-cards'>
    {vehicles.map((vehicle) => (
      <section key={vehicle.veiculo_id} className={isCardVertical ? 'vertical-card' : 'horizontal-card'}>
        <img className='photo-card' src={vehicle.veiculo_foto[0]} alt={`Foto do veiculo ${vehicle.veiculo_marca}`} />
        <p className='city'>{vehicle.veiculo_cidade}</p>
        <div className='position'>
          <h4 className='brand'>{vehicle.veiculo_marca} {vehicle.modelo_nome_pai}</h4>
          <p className='elipse'>{modelFormatting(vehicle.veiculo_modelo, vehicle.modelo_nome_pai )}</p>
          <h3 className='price'>{Number(vehicle.veiculo_valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          <p className='information'>{Number(vehicle.veiculo_km).toLocaleString()}km | {vehicle.veiculo_cambio} | {vehicle.ano_modelo}</p>          
          <Button className='btn-financing financing' children='Simular Financiamento' />
          <Button className='btn-contact contact' children='Entrar em contato' />
        </div>
      </section>
    ))}
  </div>
}

export default Card;