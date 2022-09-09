const expressAsyncHandler = require("express-async-handler");
const { CustomerModel } = require("../models/Customer");

const createCustomerController = expressAsyncHandler(async (req, res) => {
  const { name, address, instagram, companies, email, mobile_number } =
    req.body;

  const existingCustomer = await CustomerModel.find({
    email,
  });
  let customer;
  if (existingCustomer.length > 0) {
    customer = await CustomerModel.findOneAndUpdate(
      {
        email,
      },
      {
        $push: {
          companies,
        },
      }
    );
  } else {
    customer = await CustomerModel.create({
      name,
      address,
      instagram,
      companies,
      email,
      mobile_number,
    });
  }

  res.send({ status: "Ok", message: customer });
});

const getCustomerController = expressAsyncHandler(async (req, res) => {
  const { mobile_number, email, instagram, company } = req.query;
  let customer = await CustomerModel.find({
    $or: [
      { email },
      { mobile_number },
      { instagram },
      {
        companies: { $in: [...[company]] },
      },
    ],
  });
  res.send({ message: "Ok", customer });
});
const updateCustomerController = expressAsyncHandler(async (req, res) => {
  const { new_mobile_number, new_email, new_instagram } = req.body;

  let customer = await CustomerModel.findOneAndUpdate(req.query, req.body, {
    returnDocument: "after", // this is new !
  });
  if (customer) {
    res.send({ message: "Ok", customer });
  } else {
    res.send({ message: "Ok", message: "Cannot find custoemr" });
  }
});

module.exports = {
  createCustomerController,
  getCustomerController,
  updateCustomerController,
};
