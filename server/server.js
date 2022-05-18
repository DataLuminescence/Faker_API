// import all dependencies
const express = require("express")
const {faker} = require("@faker-js/faker")
const app = express()

// config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName() 
        this.lastName = faker.name.lastName() 
        this.phoneNumber = faker.phone.phoneNumber() 
        this.email = faker.internet.email()
        this.password = faker.internet.password(20)
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName() 
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/user/new", (req, res) => {

    const newUser = new User()
    res.json(newUser)
})

app.get("/api/company/new", (req, res) => {

    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    
    const newUser = new User()
    const newCompany = new Company()
    res.json({newUser, newCompany})
})

app.listen(8000, ()=>console.log('Listening to port : 8000'))
