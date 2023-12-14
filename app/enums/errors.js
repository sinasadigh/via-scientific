module.exports = {
  REQUIRED: "Required",

  INVALID_INPUT: "Invalid input",

  INTERNAL_SERVER_ERROR: "Internal server error",

  FORBIDDEN: "Unauthorized access",

  INVALID_JSON: "Invalid Json",
  LARGE_IMAGE: "Image size is too large",

  TOO_FAST: (reqTime, timeUnit) => {
    return `It is not possible to resend the activation code until ${reqTime} ${timeUnit}.`;
  },
  NOT_VALID: (noun) => {
    return `${noun} entered not valid`;
  },
  EXIST: (noun) => {
    return `${noun} exists.`;
  },
  NOT_FOUND: (noun = "") => {
    return `${noun + (noun ? " " : "")}not found`;
  },
  LEAST_X_CHARACTERS_AND_MAX_Y_CHARACTERS(noun, x, y) {
    return `${noun} must be a minimum of ${x} and a maximum of ${y} Characters`;
  },
  MAX_X_CHARACTERS(noun, x) {
    return `${noun} must be at most ${x} characters`;
  },
  MIN_X_CHARACTERS(noun, x) {
    return `${noun} must be at least ${x} characters`;
  },
  MAX_X_ITEMS(noun, x) {
    return `${noun} must be at most ${x} items`;
  },
  MIN_X_ITEMS(noun, x) {
    return `${noun} must be at least ${x} items`;
  },
  X_ITEMS(noun, x) {
    return `${noun} must be ${x} items`;
  },

  EXPIRED(x) {
    return `${x} has expired`;
  },
  INVALID(x) {
    return `${x} is invalid`;
  },

  SHOULD_BE_INTEGER(noun) {
    return `${noun} should be integer`;
  },
  SHOULD_BE_STRING(noun) {
    return `${noun} should be string`;
  },
  SHOULD_BE_BOOLEAN(noun) {
    return `${noun} should be boolean`;
  },
  SHOULD_BE_ARRAY(noun) {
    return `${noun} should be array`;
  },

  FILL_X_FIELDS(noun) {
    return `Please fill the ${noun} field`;
  },

  SHOULD_BE_IN_X_ARRAY(noun, x) {
    return `${noun} should be in [${x.toString()}] values.`;
  },
  FILL_REQUIRED_FIELD(noun) {
    return `${noun} is required`;
  },

  DUPLICATED_IN_LOCAL_ARRAY(noun, ids) {
    return `Duplicate ${noun} found in the local array: ${ids}`;
  },

  DUPLICATED_IN_DATABASE(noun, ids) {
    return `Duplicate ${noun} found in the database: ${ids}`;
  },
  CAST_ERROR: "Cast Error - Probably wrong query",
  MULTER_FILE_UPLOAD_ERROR: "Error uploading file",
};
