import'./App.css';

const App = () => {
  return (
    <section class="menu">
    <div class="title">
      <h2>our menu - 211410146</h2>
      <div class="underline"></div>
    </div>
    <div class="btn-container">
      <button type="button" class="filter-btn" data-id="all">all</button>
      <button type="button" class="filter-btn" data-id="breakfast">breakfast</button>
      <button type="button" class="filter-btn" data-id="lunch">lunch</button>
      <button type="button" class="filter-btn" data-id="dinner">dinner</button>
      <button type="button" class="filter-btn" data-id="dessert">dessert</button>
      <button type="button" class="filter-btn" data-id="shakes">shakes</button>
    </div>
    <div class="section-center">
      <article class="menu-item">
        <img src="/theme/images/my-1.jpg" alt="eggs" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>eggs</h4>
            <h4 class="price">12.59</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
      <article class="menu-item">
        <img src="/theme/images/my-2.jpg" alt="big" salad="" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>big salad </h4>
            <h4 class="price">12.59</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
      <article class="menu-item">
        <img src="/theme/images/my-3.jpg" alt="fried" dish="" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>fried dish</h4>
            <h4 class="price">12.59</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
      <article class="menu-item">
        <img src="/theme/images/item-1.jpeg" alt="buttermilk" pancakes="" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>buttermilk pancakes</h4>
            <h4 class="price">15.59</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
      <article class="menu-item">
        <img src="/theme/images/item-2.jpeg" alt="dinner" double="" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>dinner double</h4>
            <h4 class="price">13.99</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
      <article class="menu-item">
        <img src="/theme/images/item-3.jpeg" alt="godzilla" milkshake="" class="photo"></img>
        <div class="item-info">
          <header>
            <h4>godzilla milkshake</h4>
            <h4 class="price">13.99</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
          </p>
        </div>
      </article>
    </div>
  </section>
  );
}
export default App;