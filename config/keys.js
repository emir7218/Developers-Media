// module.exports = {
//   mongoURI:
//     "mongodb://devconnector:abc123@ds217310.mlab.com:17310/devconnector",
//   secretOrKey: "secret"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
