export interface IBaseMovie {
  title: string;
  year: number;
  director: string;
  picture: string;
  genres: string[];
}

export interface IMovie extends IBaseMovie {
  id: number;
  dateModified: string;
  dateAdded: string;
}
