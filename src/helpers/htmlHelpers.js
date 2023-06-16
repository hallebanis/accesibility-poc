/**
 *
 * @param {string} tag  HTML tag name
 * @param {Object<any>} attributes
 * @returns {HTMLElement}
 */
const createElementAndSetAttributes = (tag, attributes) => {
  const element = document.createElement(tag);
  if (attributes)
    for (let key in attributes) element.setAttribute(key, attributes[key]);
  return element;
};

export { createElementAndSetAttributes };
