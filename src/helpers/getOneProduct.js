const oneProduct = [
  {
    id: "1",
    name: "Mesa Plegable",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 25,
    price: 1500,
    image: "http://placehold.it/500x480",
  },
];
export const getOneProduct = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(oneProduct);
  }, 1000);
});
