const router = require('express').Router();
const knex = require('knex');

const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// POST REQUEST
router.post('/cohorts', (req, res) => {
    db('cohorts')
        .insert(req.body)
        .then(cohortId => {
            const [id] = cohortId;

            db('cohorts')
                .where({ id })
                .then(cohort => {
                    res.status(201).json(cohort)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// GET REQUEST
router.get('/cohorts', (req, res) => {
    db('cohorts')
        .then(cohorts => {
            res.status(200).json(cohorts)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/cohorts/:id', (req, res) => {
    const id = req.params.id;

    db('cohorts')
        .where({ id: id })
        .then(cohort => {
            res.status(200).json(cohort)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/cohorts/:id/students', (req, res) => {
    const id = req.params.id;

    db('students')
        // const cohortId = req.params.id
        .where({ 'cohort_id': id })
        .then(student => {
            console.log(student)
            if (student.length > 0) {
                res.status(200).json(student)
            } else {
                res.status(404).json({
                    message: 'Can not find student.'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// UPDATE REQUEST
router.put('/cohorts/:id', (req, res) => {
    const id = req.params.id;

    db('cohorts')
        .where({ id: id })
        .update(req.body)
        .then(cohort => {
            if (cohort > 0) {
                db('cohorts')
                    .where({ id: id })
                    .then(cohort => {
                        res.status(202).json(cohort)
                    })
            } else {
                res.status(404).json({
                    message: 'The update was not able to be accepted.'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// DELETE REQUEST
router.delete('/cohorts/:id', (req, res) => {
    const id = req.params.id;

    db('cohorts')
        .where({ id })
        .del()
        .then(cohort => {
            if (cohort > 0) {
                res.status(204).json({
                    message: 'The cohort was deleted.'
                })
            } else {
                res.status(404).json({
                    message: 'The cohort was not found.'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;