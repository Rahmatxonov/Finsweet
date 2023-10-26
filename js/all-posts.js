let pap = document.querySelector("#input-box");
const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=00a85aa72f0943a883339a0f92adb6c8";
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
      let doc = document.createElement("img");
      doc.src = element.urlToImage;
      pap.appendChild(doc);
    });
  } catch (error) {
    console.error(error);
  }
}
getData(url);
