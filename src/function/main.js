export const parseString = str => {
  return Function('return ' + str)();
}

export const buttonDel = () => {
  let text = document.querySelector('.computation').innerText;
  let result = text.slice(0, - 1);
  return result;
}

export const percent = num => {
  let text = document.querySelector('.computation').innerText;
  let z = parseInt(text) / 100;
  return text = parseString(z);
}