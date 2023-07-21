import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  const vehicles = [
    {
      veiculo_id: 1234567,
      veiculo_foto: [
        "https://fotos.socarrao.com.br/158460/5146971/5146971M_1689097462_33_30.jpg",
        "https://fotos.socarrao.com.br/158460/5146971/5146971M_1689097463_35_770.jpg"
      ],
      veiculo_cidade: "Cidade test 1",
      veiculo_marca: "Citroen",
      modelo_nome_pai: "C3",
      veiculo_modelo: "c3 C3 FEEL PACK 1.6 AT FLEX",
      veiculo_valor: "81890.00",
      veiculo_km: 0,
      veiculo_cambio: "Câmbio Manual",
      ano_modelo: 2023,
    }
  ]
  it("should render the card component correctaly", () => {
    const props = {
      isCardVertical: true,
      vehicles,
      modelFormatting: jest.fn(),
    }
    
    render(<Card {...props}/>);

    expect(screen.getByRole("img", { name: "Foto do veiculo Citroen" })).toBeInTheDocument();
    expect(screen.getByText(props.vehicles[0].veiculo_cidade)).toBeInTheDocument();
    expect(screen.getByText(`${props.vehicles[0].veiculo_marca} ${props.vehicles[0].modelo_nome_pai}`)).toBeInTheDocument();

    expect(props.modelFormatting).toHaveBeenCalledTimes(1);
    expect(props.modelFormatting).toHaveBeenCalledWith(props.vehicles[0].veiculo_modelo, props.vehicles[0].modelo_nome_pai);
    
    expect(screen.getByText("R$ 81.890,00")).toBeInTheDocument();
    const info = screen.getByText(`${props.vehicles[0].veiculo_km}km | ${props.vehicles[0].veiculo_cambio} | ${props.vehicles[0].ano_modelo}`)
    expect(info).toBeInTheDocument();

    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(2);
    expect(screen.getByText("Simular Financiamento")).toBeInTheDocument();
    expect(screen.getByText("Entrar em contato")).toBeInTheDocument(); 
  });
});
