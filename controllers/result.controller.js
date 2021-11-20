const models = require ('../models');
const ExamResult = models.ExamResult;

const getResult = async (req, res) => {
    const id = req.query.id;
    const data = await ExamResult.findAll({
        where: {
            sname: id
          }
    });
    res.json({data:data});
}

module.exports = {
    getResult
}