import Book_46 from './components/Book_46';
import BookList_46 from './components/BookList_46';
import './App.css';

function App() {
  return (
    <section className="booklist">
      <BookList_46 />
    </section>
  );
}

const ThreeBooks = () => {
  return (
    <section className='booklist'>
      <Book_46
        key='1'
        img='https://m.media-amazon.com/images/I/91b7tm523VL._SL1500_.jpg'
        title="The Covenant of Water (Oprah's Book Club)"
        author='Abraham Verghese'
      />
      <Book_46
        key='2'
        img='https://m.media-amazon.com/images/I/91GYtFqr3GL._SL1500_.jpg'
        title='The Lost Bookshop: The most charming and uplifting novel of 2023 and the perfect gift for book lovers!'
        author='Evie Woods'
      />
      <Book_46
        key='3'
        img='https://m.media-amazon.com/images/I/91JdUMuwCbL._SL1500_.jpg'
        title='One for the Blackbird, One for the Crow: A Novel'
        author='Olivia Hawker '
      />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        alt=''
      />
      <h1>Build the Life You Want: The Art and Science of Getting Happier</h1>
      <h4> Arthur C. Brook</h4>
    </article>
  );
};


export default App;
