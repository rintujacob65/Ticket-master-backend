const Employee = require('../models/employee')

module.exports.list = (req,res) => {
    Employee.find().populate('department')
    .then((employees) => {
        res.json(employees)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const body = req.body
    const employee = new Employee(body)
    employee.save()
    .then((employee) => {
        res.json({
            notice : 'Successfully created an employee',
            employee
        })
    })
    .catch((err) => {
        res.json(err)
    })

}

module.exports.show = (req,res) => {
    const id = req.params.id
    Employee.findById(id).populate('department')
    .then((department) => {
        if(department){
            res.json(department)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id, body,{ new : true, runValidators : true})
    .then((employee) => {
        if(employee) {
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.destroy = ( req,res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
    .then((employee) => {
        if(employee){
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}