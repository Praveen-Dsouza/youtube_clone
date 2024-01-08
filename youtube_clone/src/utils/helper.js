import { CHARACTERS, NAMES_LIST } from "./constants";

export function generateRandomNames() {
  return NAMES_LIST[Math.floor(Math.random() * NAMES_LIST.length)];
}

export function makeRandomMessage(length) {
  let result = "";
  const charactersLength = CHARACTERS.length;
  let counter = 0;
  while (counter < length) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function ViewsConverter({ views }) {
  const formattedViews = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(views);

  return <div>{formattedViews} </div>;
}

export function dateToViews(publishedAt) {
  const dateString = publishedAt;
  const dateObject = new Date(dateString);

  // Extract components
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
  const day = dateObject.getDate().toString().padStart(2, "0");

  // Create an array with date components
  const dateComponents = [
    year,
    month,
    day
  ];

  // Shuffle the array to create a random order
  const shuffledComponents = dateComponents.sort(() => Math.random() - 0.5);

  // Concatenate the shuffled components
  const formattedDate = shuffledComponents.join("");
  return parseInt(formattedDate);
}
