const express = require('express');
const router = express.Router();
const Activity = require('../models/activity_schema');

router.post('/', async (req, res) => {
    try {
        const { name, description, localisation, type, price } = req.body;
        const activity = new Activity({ name, description, localisation, type, price });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'activité", error });
    }
});

router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des activités', error });
    }
});

router.get('/recherche', async (req, res) => {
    try {
        const { localisation, type, maxPrice } = req.query;
        const query = {};
        if (localisation) query.localisation = localisation;
        if (type) query.type = type;
        if(maxPrice) query.price = { $lte: Number(maxPrice) };
        const activities = await Activity.find(query);
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la recherche de l'activité", error});
    }
});

module.exports = router;