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
