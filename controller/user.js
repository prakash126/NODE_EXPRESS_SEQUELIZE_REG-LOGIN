const user = require("../model/user");

exports.addUser = async (req, res) => {
  //console.log(req.body);
  let userObj = await user.build({
    emp_id: req.body.emp_id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  //console.log({ userObj });
  let userdata = await userObj.save();
  if (!userdata) {
    res.send({ err: "Data not inserted" });
  }
  res.send({ userdata: userdata, msg: "Data inserted successfully" });
};

exports.loginuser = async (req, res) => {
  let { email, password } = req.body;
  const data = await employeeTable.findAll(
    { where: { email: email } },
    { row: true }
  );
  if (!data) {
    return res.status(400).json({ err: "User not found" });
  }
  if (data[0].password === password) {
    return res
      .status(200)
      .json({ userData: data, msg: "user loggedin successfully" });
  }
  return res
    .status(401)
    .json({ msg: "Login failed ! Email or password not matched" });
};
