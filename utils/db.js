const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/why", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Buat Schema

//menambah 1 data
// const contact1 = new Contact({
//   nama: "Reza Hakim",
//   nim: "1910312310007",
// });

// contact1.save().then((contact) => console.log(contact));
