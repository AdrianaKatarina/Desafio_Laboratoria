import Button from '../Button/Button';

const Pagination = ({
  numberOfPages,
  currentPage,
  onClickCurrentPage,
}) => {
  return (
    <section>
      {Array.from(Array(numberOfPages), (_, i) => (
        <Button
          className={i === currentPage ? 'Current-page': 'Other-pages' } 
          key={i} 
          value={i} 
          onClick={onClickCurrentPage} 
          children={i + 1} 
        />
      ))}
    </section>
  )
};

export default Pagination;