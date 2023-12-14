const mongoose = require("mongoose");

const GeneSchema = mongoose.Schema(
  {
    geneID: String,
    transcript: String,
    experRep: [Number],
    controlRep: [Number],
  },
  { id: false }
);

GeneSchema.set("toJSON", {
  virtuals: true,
});

GeneSchema.index({});

module.exports = mongoose.model("Gene", GeneSchema);
