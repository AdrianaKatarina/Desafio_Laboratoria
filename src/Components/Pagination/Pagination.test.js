import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe('Pagination Component', () => {
  it('should render the pagination correctaly', () => {
    const props = {
      numberOfPages: 10,
      currentPage: 0,
      onClickCurrentPage: jest.fn()
    };
    
    render(<Pagination {...props}/>);
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(props.numberOfPages);
    userEvent.click(button[2]);
    expect(props.onClickCurrentPage).toHaveBeenCalledTimes(1);
  });
});

