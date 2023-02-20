const metaTagsAdder = (queryProperty, value) => {
  let element = document.querySelector(`meta[${queryProperty}]`);
  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta ${queryProperty} content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

export default metaTagsAdder;
