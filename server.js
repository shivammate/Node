const express = require('express');
const hbs= require('hbs');

var app = express();
app.use(express.static(__dirname+'/Public'));

app.set('view enigine','hbs');
app.get('/',(req,res)=>{
	//res.send("<h1>Hello People</h1>");
	res.send({
		name: "Shivam",
		class: "BE",
		Age : 25,
		likes: ["basketball","Football","Cricket"]

	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle : "About",
		currentYear : new Date().getFullYear()
	});
})

app.listen(3000,()=>{
	console.log("Server Running ");
});