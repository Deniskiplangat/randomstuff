const mongoose = require("mongoose");
const mongoDBErrors = require("mongoose-mongodb-errors")
mongoose.promise = global.promise;
mongoose.plugin(mongoDBErrors);

mongoose.connect("mongodb+srv://admin:0791040114@cluster0.gla4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");