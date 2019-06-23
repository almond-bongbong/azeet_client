export const createElement = (id) => {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  return element;
};

export const addRootElement = (rootElem) => {
  document.body.appendChild(rootElem);
};
