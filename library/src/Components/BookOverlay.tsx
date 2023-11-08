import "../style/BookOverlay.css";
import CloseIcon from "@mui/icons-material/Close";

function BookOverlay({
  book,
  onClose,
  show,
}: {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  book: any;
  onClose: () => void;
  show: boolean;
}) {
  if (!show || !book) return null;

  // * I am checking the presence of the image
  const thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <CloseIcon></CloseIcon>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt={book.volumeInfo.title} />
            <div className="info">
              <h2>{book.volumeInfo.title}</h2>
              <h3>{book.volumeInfo.authors}</h3>
              <a href={book.volumeInfo.previewLink} target="_blank">
                <button>More Info</button>
              </a>
            </div>
          </div>
          <h4 className="description">{book.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
}

export default BookOverlay;
