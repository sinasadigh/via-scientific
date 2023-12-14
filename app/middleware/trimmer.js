function trimStringProperties(obj) {

    if (obj !== null && typeof obj === 'object') {

        for (const prop in obj) {

            // if the property is an object trim it too
            if (typeof obj[prop] === 'object') {
                return trimStringProperties(obj[prop]);
            }

            // if it's a string remove begin and end whitespaces
            if (typeof obj[prop] === 'string') {
                obj[prop] = obj[prop].trim();
            }

        }

    }

}


// trimRequest middleware: trim all request object: body, params, query
const all = function (req, res, next) {

    if (req.body) {
        trimStringProperties(req.body);
    }

    if (req.params) {
        trimStringProperties(req.params);
    }

    if (req.query) {
        trimStringProperties(req.query);
    }

    next();

};

// trimBody middleware: trim only the body object
const body = function (req, res, next) {
    if (req.body) {
        trimStringProperties(req.body);
    }
    next();
};

const param = function (req, res, next) {
    if (req.params) {
        trimStringProperties(req.params);
    }
    next();
};

const query = function (req, res, next) {
    if (req.query) {
        trimStringProperties(req.query);
    }
    next();
};

module.exports = {
    all: all,
    body: body,
    param: param,
    query: query
};
