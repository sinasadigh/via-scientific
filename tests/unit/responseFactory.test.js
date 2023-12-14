const statusList = require("../../app/enums/status");
const returnResponse = require("../../app/utils/responseFactory");

describe("Utils- Response provider", () => {
  let res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = (body) => {
    res.body = body;
  };

  let message = { type: "success", text: "Signed up successfully." };
  let error = "Username exist.";
  let data = { token: "123654", username: "sina" };

  it("should return message structure with the empty values if the message is null", () => {
    returnResponse(res, statusList.OK, null, null, null);

    expect(res.body).toBeDefined();
    expect(res.body.message).toBeDefined();
    expect(res.body.message.type).toBeDefined();
    expect(res.body.message.text).toBeDefined();
    expect(res.body.message.type).toEqual("");
    expect(res.body.message.text).toEqual("");
  });

  it("should return empty array for errors if error is null", () => {
    returnResponse(res, statusList.OK, null, null, null);

    expect(res.body).toBeDefined();
    expect(res.body.errors).toBeDefined();
    expect(res.body.errors).toEqual([]);
  });

  it("should return empty object for data if data is null", () => {
    returnResponse(res, statusList.OK, null, null, null);

    expect(res.body).toBeDefined();
    expect(res.body.data).toBeDefined();
    expect(res.body.data).toEqual({});
  });

  it("should return valid response", () => {
    returnResponse(res, statusList.OK, message, error, data);

    expect(res.body).toBeDefined();
    expect(res.body.message).toBeDefined();
    expect(res.body.message.type).toBeDefined();
    expect(res.body.message.text).toBeDefined();
    expect(res.body.message.text).toBe(message.text);
    expect(res.body.message.type).toBe(message.type);
    expect(res.body.errors).toBeDefined();
    expect(res.body.errors).toContain(error);
    expect(res.body.data).toBeDefined();
    expect(res.body.data.token).toBeDefined();
    expect(res.body.data.username).toBeDefined();
    expect(res.body.data.token).toBe(data.token);
    expect(res.body.data.username).toBe(data.username);
  });
});
