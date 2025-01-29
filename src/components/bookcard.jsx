// write the book component code here
import './bookcard.css';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h3 className="book-name">{name}</h3>
      <p className="book-genre"><strong>Genre:</strong> {genre}</p>
      <p className="book-author"><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;
