const Book_46 = ({title, author, imgSrc}) => {
  return (
    <article className="book">
      <img src={imgSrc} alt={title} className="bookPic"/>
      <h1 className="bookTitle">{title}</h1>
      <h4 className="bookAuthor">{author}</h4>
    </article>
  )
};
export default Book_46;