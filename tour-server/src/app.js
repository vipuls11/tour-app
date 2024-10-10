const express = require("express");
const cors = require('cors');
const app = express()

const Port = process.env.PORT || 5000
// Use CORS middleware
app.use(cors());
app.use(express.json())

app.get('/api/tours',(req, res)=>{
    try {
        res.send(
            [
            {
                id:1,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "1,995"
            },
            {
                id:2,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "2000"
            },
            {
                id:3,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "3,999"
            },
            {
                id:4,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "5,999"
            },
            {
                id:5,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "9,999"
            },
            {
                id:6,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "2,990"
            },
            {
                id:7,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "1,900"
            },
            {
                id:8,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "1,995"
            },
            {
                id:9,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "3,600"
            },
            {
                id:10,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "2,500"
            },
            {
                id:11,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "999"
            }, {
                id:12,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "6,700"
            }, {
                id:13,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "6,999"
            }, {
                id:14,
                name:"Best of Paris in 7 Days Tour",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: "https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: "4,555"
            }
        ]
    )

    } catch (error) {
        console.log(error)
        res.send(`This is a server error ${error}`)
    }
})

app.listen(Port, ()=>{
    console.log(`This Server is listening on Port ${Port}`)
})