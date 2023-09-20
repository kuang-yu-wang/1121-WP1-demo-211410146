import { useState } from "react";
import Book_46 from "./Book_46";
import {Book_data} from "./book_data";
const BookList_46 = () => {
	// eslint-disable-next-line no-unused-vars
	const [books, setBooks] = useState(Book_data);
	return (
		books.map((book) => {
			const {id, img, title, author} = book;
			return (
				// eslint-disable-next-line react/jsx-pascal-case
				<Book_46
					key={id}
					img={img}
					title={title}
					author={author}
				/>
			)
		})
	)
}
export default BookList_46;