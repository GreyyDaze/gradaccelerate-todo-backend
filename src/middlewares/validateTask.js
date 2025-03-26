const validateTask = (req, res, next) => {
  const { description } = req.body;
  const { id } = req.params;
  const method = req.method; // Identify HTTP method

  let errors = [];

  // 🔹 Validate ID in params (for PUT request)
  if (method === "PUT" || method === "DELETE") {
    if (id && (!/^\d+$/.test(id) || parseInt(id) <= 0)) {
      errors.push("Invalid task ID. Must be a positive integer.");
    }
  }

  // 🔹 For both POST & PUT: Required field, Type and length validations
  if (!description) errors.push("Description is required.");
  if (typeof description !== "string")
    errors.push("Description must be a string.");
  if (description.length < 10 || description.length > 500) {
    errors.push("Description must be between 10 and 500 characters.");
  }

  // If there are validation errors, return a response
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next(); // If validation passes, proceed to the next middleware/controller
};

export default validateTask;