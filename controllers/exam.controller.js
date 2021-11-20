const models = require ('../models');
const Exam = models.Exam;

const register = async (req, res) => {
    const data = req.body;
    await Exam.create(data);
    res.json("Registration successful");
}

const getExams = async (req, res) => {
    const data = await Exam.findAll({
        attributes: ['eid', 'ename','edate']
    });
    res.json({data:data});
}

const getExamsName = async (req, res) => {
    const data = await Exam.findAll({
        attributes: ['eid','ename']
    });
    res.json({data:data});
}

module.exports = {
    register,getExams,getExamsName
}