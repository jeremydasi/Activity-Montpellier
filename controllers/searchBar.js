export const searchBar = async (req, res) => {
    try {
      const { localisation, category, maxPrice } = req.query;
      const query = {};
      if (localisation) query.localisation = localisation;
      if (category) query.category = category;
      if (maxPrice) query.price = { $lte: Number(maxPrice) };
      const activities = await Activity.find(query);
      res.status(200).json(activities);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la recherche de l'activité", error });
    }
  };