/* eslint-disable react/jsx-pascal-case */
import'./App.css';
import Book_46 from './components/Book_46';
const LifeUWant = require("./images/build-the-life-you-want.jpg");
const OutLive = require("./images/out-live.jpg");
const RichDadPoorDad = require("./images/rich-dad-poor-dad.jpg");

const App = () => {
  const books = [
    {
      name: "Build the Life You Want: The Art and Science of Getting Happier",
      author: "21.00",
      imgSrc: LifeUWant
    },
    {
      name: "Outlive: The Science and Art of Longevity",
      author: "18.99",
      imgSrc: OutLive
    },
    {
      name: "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
      author: "7.11",
      imgSrc: RichDadPoorDad
    },
  ];
  return (
    <section className="booklist">
     <Book_46
      key="1" 
      title={books[0].name}
      imgSrc={books[0].imgSrc}
      author={books[0].author} 
    />
    <Book_46
      key="2" 
      title={books[1].name}
      imgSrc={books[1].imgSrc}
      author={books[1].author} 
    />
    <Book_46
      key="3" 
      title={books[2].name}
      imgSrc={books[2].imgSrc}
      author={books[2].author} 
    />
    </section>
  );
}


const Book = (name, author, imgSrc) => {
  return (
    <article className="book">
      <img src={imgSrc} alt={name} className="bookPic"/>
      <h1 className="bookTitle">{name}</h1>
      <h4 className="bookAuthor">{}</h4>
    </article>
  )
};
export default App;
