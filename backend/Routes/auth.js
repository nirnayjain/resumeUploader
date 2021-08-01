import express from 'express'
import User from '../Model/User.js'
import dotenv from 'dotenv'
const router = express.Router()

router.post('/register', async (req, res) => {

    //  const emailExist=await User.findOne({email:req.body.email})
    //      if(emailExist) return res.status(400).send("Email already registered")

    //   const token=jwt.sign({email:req.body.email,password:req.body.password},process.env.SECRET_KEY)

    const user = new User({

        userName: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        resume: req.body.resume
    })
    try {
        const savedUser = await user.save()
        res.send({ status: "ok" })

    }

    catch (err) {
        res.json({ message: err })
        console.log(err)
    }


}


)



router.post('/userDetails', async (req, res) => {
    try {
        const totalRecords = await User.countDocuments()
        const users = await User.find().sort({ _id: -1 }).skip((req.body.page - 1) * req.body.pageSize).limit(req.body.pageSize)
        res.json(
            {
                total: totalRecords,
                users
            })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})


export default router
