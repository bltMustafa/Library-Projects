export interface BookItemType {
  id: string;
  book: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    authors: string[];
    previewLink: string;
  };
  isFavorite: boolean;
}

export interface Book {
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
    previewLink: string;
    description: string;
  };
  book: string;
}
