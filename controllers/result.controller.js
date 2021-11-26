const models = require ('../models');
const examr = models.examr;

const getResult = async (req, res) => {
    const id = req.query.id;
    const data = await examr.findAll({
        where: {
            sid: id
          }
    });
    res.json({data:data});
}

module.exports = {
    getResult
}