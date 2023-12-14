module.exports = {
  DATA_SUBMITTED_SUCCESSFULLY: (noun) => {
    return {
      type: "success",
      text: `${noun} submitted successfully`,
    };
  },
  DATA_EDITED_SUCCESSFULLY: (noun) => {
    return {
      type: "success",
      text: `${noun} updated successfully`,
    };
  },
};
