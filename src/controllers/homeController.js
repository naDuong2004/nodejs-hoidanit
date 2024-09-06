export const getHomePage = (req, res) => {
  res.send("Hello World! My name is Duong");
};

export const getAboutPage = (req, res) => {
  res.render("sample.ejs");
};
// module.exports = {
//   getHomePage,
//   getAboutPage,
// };
