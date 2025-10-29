export const getTest = async (_, res) => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    res.status(500).json(error);
  }
};
