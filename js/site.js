let footerList = document.querySelector(".nav-footer-list"),
    markTag = document.querySelector(".marketing-tag"),
    markTextMain = document.querySelector(".marketing-text"),
    img = document.querySelector('.town-img'),
    nav = document.getElementsByTagName('nav');

footerList.remove();

markText = '';

markText.innerHTML = "<h2>YOur app congratilation</h2>";

markTag.replaceWith(markText);

const div = document.createElement('div');

div.classList.add('marketing-tag');

div.innerHTML = "<h2>YOur app congratilation</h2>";

div.classList.add('marketing-tag');

markTextMain.append(div);

const imgBack = document.createElement('img');

imgBack.src = "/img/check-mark.png";

img.replaceWith(imgBack);

const movieDB = {
      movies: [
            "Logan",
            "alelads",
            'leage of justice',
      ]
};

for (let key in movieDB) {
      for (let i in movieDB[key]) {
            console.log(`${i[0]} ${movieDB[key][0]}`);
      }
}

// nav.replaceWith(movieDB);

