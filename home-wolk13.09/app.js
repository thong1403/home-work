const productDOM = document.querySelector(".products-center");
const input = document.getElementById("myinput");

class Product {
  async getData() {
    try {
      const search = input.value;
     
      const data = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=97f1bd616b51e07825e04a855aaeed30&query=${search}`
      );
      const finalData = await data.json();
      let moveis = finalData.results;
      moveis.map((item) => {
        const { title, poster_path } = item;
        return { title, poster_path };
      });
      return moveis;
    } catch (error) {
      console.log(error);
    }
  }
}


class UI {
  getFinalData(moveis) {
    let result = "";
    moveis.forEach((movie) => {
      result += `
          <article class="product">
          <div class="img-container">
            <img src= https://image.tmdb.org/t/p/w500/${movie.poster_path} class="product-img"/>
          </div>
          <h3>${movie.title}</h3>
        </article>
       `;
    });
    productDOM.innerHTML = result;
  }
}
const loader = () => {
  const spinner = `
        <div class="loader">
            <i class="fas fa-sync-alt"></i>
        </div>
    `;
  productDOM.innerHTML = spinner;
};

const btn = document.getElementById("mybtn");

btn.addEventListener("click", () => {
  const ui = new UI();
  const x = new Product();
  x.getData().then((moveis) => {
    input.value = "";
    loader();
    setTimeout(() => {
      ui.getFinalData(moveis);
    }, 2000);
  });
});

const number = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;
document.getElementById("demo").innerHTML = fruits.length