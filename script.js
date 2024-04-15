function updateAveragePrice() {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  // Calculate the sum of all prices
  let sum = 0;
  prices.forEach((priceCell) => {
    // Remove the dollar sign and convert to number
    let price = Number(priceCell.textContent.replace("$", ""));
    sum += price;
  });

  // Calculate the average price
  let average = sum / prices.length;

  // Update the average price paragraph
  const averagePriceParagraph = document.querySelector("#averagePrice");
  averagePriceParagraph.textContent =
    "The average starting price is $" + average.toFixed(2);
}

// Set a delay before inserting the new freelancer
setTimeout(() => {
  insertFreelancer(newFreelancers);
}, 3000);

const newFreelancers = [
  {
    Name: "Carol",
    Occupation: "Programmer",
    StartingPrice: "$70",
  },
  {
    Name: "Steve",
    Occupation: "Fork Lift Operator",
    StartingPrice: "$100",
  },
  {
    Name: "Rosie",
    Occupation: "Pastry Cook",
    StartingPrice: "$49",
  },
  {
    Name: "Joe",
    Occupation: "Butcher",
    StartingPrice: "$87",
  },
  {
    Name: "Jessica",
    Occupation: "Singer",
    StartingPrice: "$60",
  },
  {
    Name: "Ryan",
    Occupation: "Accountant",
    StartingPrice: "$150",
  },
];

function stopTime(timer) {
  if (newFreelancers.length > 0) {
    clearInterval(timer);
  }
}

function insertFreelancer(newFreelancers) {
  const tableSelect = document.querySelector("table");
  const insertFreelancer = newFreelancers.shift();
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${insertFreelancer.Name}</td>
                       <td>${insertFreelancer.Occupation}</td>
                       <td class="price">${insertFreelancer.StartingPrice}</td>`
                       ;

  tableSelect.appendChild(newRow);
  updateAveragePrice();
}
const newTimer = setInterval(() => insertFreelancer(newFreelancers), 3000);

// Add a new freelancer to the array

/* insertFreelancer(newFreelancers);

function getRandomPrice() {
  return "$" + Math.floor(Math.random() * (300 - 30 + 1) + 30);
}

for (let i = 0; i < 20; i++) {
  newFreelancers.push({
    Name: "New Freelancer",
    Occupation: "Occupation",
    Starting_Price: getRandomPrice(), // Random price between $30 and $300
  });
}

 */
