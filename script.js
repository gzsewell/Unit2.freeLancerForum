const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const names = ["Mr. John", "Ms. Jane", "Mr. James"];
const occupations = ["Plumber", "Doctor", "Security"];
const prices = [35, 52, 37];

//Create a function that displays the average starting price.
function addAveragePrice(items) {
  const total = items.reduce((item, items) => item + items.price, 0);
  return total / items.length;
}
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  freelancers.push({ name, occupation, price });
}

function render() {
  const tableBody = document.querySelector("#table");
  const mappedElements = freelancers.map((item) => {
    const newRow = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = item.name;
    const occupation = document.createElement("td");
    occupation.textContent = item.occupation;
    const price = document.createElement("td");
    price.textContent = item.price;

    newRow.append(name, occupation, price);

    return newRow;
  });
  tableBody.replaceChildren(...mappedElements);
}

const avgPrice = addAveragePrice(freelancers);
console.log(`average price ${avgPrice}`);

const p = document.querySelector("p");
p.textContent = `The average freelance price is: ${avgPrice}`;

const addAll = setInterval(() => {
  addFreelancer();
  render();
}, 1000);

render();
