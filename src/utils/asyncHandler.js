const asyncHandler = (requestFunction) => {
  return async (req, res, next) => {
    try {
      await requestFunction(req, res, next);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  };
};

export default asyncHandler;
