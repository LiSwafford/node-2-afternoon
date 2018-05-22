// module.exports = {
//   create: (req, res, next) => {
//     const dbInstance = req.app.get("db");
//     console.log(req.body);
//     const { name, description, price, imageurl } = req.body;
//     //-----------------------what does req.body stand for here?--------------------
//     dbInstance
//       .create_product([name, description, price, imageurl])
//       .then(resp => {
//         console.log(resp);
//         res.status(200).json();
//       })
//       .catch(() => res.status(500).json("err"));
//   },

//   getOne: (req, res, next) => {
//     const dbInstance = req.app.get("db");
//     const { params } = req;
//     dbInstance
//       .read_product([params.id])
//       .then(product => res.status(200).json(product))
//       .catch(() => res.status(500).json("err"));
//   },
//   getAll: (req, res, next) => {
//     const dbInstance = req.app.get("db");
//     dbInstance
//       .read_products()
//       .then(products => res.status(200).json(products))
//       .catch(() => res.status(500).json("err"));
//   },

//   update: (req, res, next) => {
//     const dbInstance = req.app.get("db");
//     console.log("update", req);
//     const { params, query } = req;
//     dbInstance
//       .update_product([params.id, query.desc])
//       // --------------------------------query.description?----------------
//       .then(() => res.status(200).json())
//       .catch(() => res.status(500).json("err"));
//   },
//   deleteProduct: (req, res, next) => {
//     const dbInstance = req.app.get("db");
//     const { params } = req;
//     console.log("params from delete: ", params);
//     dbInstance
//       .delete_product([params.id])
//       .then(() => res.status(200).json())
//       .catch(() => res.status(500).json("err"));
//   }
// };

const create = (req, res, next) => {
  const { name, description, price, imageurl } = req.body;
  req.app
    .get("db")
    .create_product([name, description, price, imageurl])
    .then(response => res.status(200).json())
    .catch(response => res.status(500).json("err"));
};

const getOne = (req, res, next) => {
  req.app
    .get("db")
    .read_product(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(response => res.status(500).json("err"));
};

const getAll = (req, res, next) => {
  req.app
    .get("db")
    .read_products()
    .then(response => res.status(200).json(response))
    .catch(response => res.status(500).json("err"));
};
const update = (req, res, next) => {
  req.app
    .get("db")
    .update_product([req.params.id, req.query.desc])
    .then(response => res.status(200).json(response))
    .catch(response => res.status(500).json("err"));
};
const deleteProduct = (req, res, next) => {
  req.app
    .get("db")
    .delete_product(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(response => res.status(500).json("err"));
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteProduct
};
