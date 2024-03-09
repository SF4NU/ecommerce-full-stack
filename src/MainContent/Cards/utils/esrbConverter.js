export const esrbConverter = (rating) => {
  return rating === "Mature" ? ratingsURL.mature : false;
};

const ratingsURL = {
  mature: "",
};
