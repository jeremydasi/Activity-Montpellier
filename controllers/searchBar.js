export const searchBar = async (req, res) => {
  try {
    const { query } = req.query;
    const searchCriteria = {};

    if (query) {
      searchCriteria.$or = [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { localisation: { $regex: query, $options: "i" } },
      ];
      const maxPrice = Number(query);
      if (!isNaN(maxPrice)) {
        searchCriteria.$or.push({ price: { $lte: maxPrice } });
      }
    }

    const activities = await Activity.find(searchCriteria);
    res.status(200).json(activities);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la recherche de l'activité", error });
  }
};
