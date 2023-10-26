let newAppend = document.querySelector("#input-box");
const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=779f9c44a8e648c38d2eb91a095c85e8";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f19516e44msh290fdeacb0c0f5cp187332jsnd9ea8454424b",
    "X-RapidAPI-Host": "comparable-companies.p.rapidapi.com",
  },
};

async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    result.articles.forEach((element) => {
      let wrap = document.createElement("img");
      wrap.src = element.urlToImage;
      newAppend.appendChild(wrap);
    });
  } catch (error) {
    console.error(error);
  }
}
getData(url);
