import Activity from "../models/activity_schema.js";

export const createActivity = async (req, res) => {
  try {
    const { name, description, localisation, category, price } = req.body;
    const activity = new Activity({
      name,
      description,
      localisation,
      category,
      price,
    });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'activité", error });
  }
};

export const fetchActivity = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des activités", error });
  }
};
