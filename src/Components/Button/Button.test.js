import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe('Button Component', () => {
  it('should render the button correctaly', () => {
    const props = {
      onClick: jest.fn(),
      value: 'test button',
      children: 'test',
    }
    
    render(<Button {...props}/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
    
    expect(button).toHaveAttribute("value", props.value);

    const childrenBtn = screen.getByText(props.children);
    expect(childrenBtn).toBeInTheDocument();
  });
});
