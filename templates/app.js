const accept = document.getElementById("yes");
const reject = document.getElementById("no");
const display = document.querySelector(".container");

accept.addEventListener("click", (e) => {
  e.preventDefault();
  display.innerHTML = `<div class="hapi">
    <h1>Hapi Hapi Hapi, UwU</h1>
    <form action="/add/wish" method="post">
        <textarea name="wish" placeholder="Leave a wish for me.."></textarea>
        <input type="submit" value="Wish!" id="submit">
    </form>
</div>`;
});

const words = [
  "Really?",
  "Sure?",
  "Humm, I guess u touch wrong option",
  "Ohh no plz",
  "don't T^T",
  "Pleaseeeeee",
];
let word = 0;
reject.addEventListener("click", () => {
  let last = words.length;
  if (word === last) {
    word = 0;
  } else {
    reject.innerText = words[word];
    word++;
  }
});
