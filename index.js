import express from "express"
import cors from "cors"
import { mongoose, Schema } from "mongoose"
const mongodb = "mongodb://127.0.0.1:27017/lsData";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect(mongodb)
    .then(() => {
        console.log("DB connected")
    }).catch((error) => {
        console.log(`error : ${error}`);
    })


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = new mongoose.model("User", userSchema)

// Routes
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Succesfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "User not registered" });
        }
    } catch (err) {
        res.send({ message: `Error occurred during Login ${err}` });
    }
    // res.send("my Api")
})
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.send({ message: 'User already registered' });
        } else {
            const newUser = new User({
                name,
                email,
                password,
            });
            await newUser.save();
            res.send({ message: 'Successfully registered. Please login now.' });
        }
    } catch (err) {
        res.send({ message: `Error occurred during registration ${err}` });
    }
})
// res.send("my Api register")
// console.log(req.body);

// app.get('/', (req, res) => {
//     res.send("my Api")
// })
app.listen(9002, () => {
    console.log(`BE started at port 9000`);
})
