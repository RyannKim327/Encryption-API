const express = require("express")
const app = express()

let encrypt = (str, b) => {
	let res = ""
	try{
		for(let i = 0; i < str.length; i++){
			let data = str.charCodeAt(i)
			res += ((b == 2) ? "0" : "") + data.toString(b) + ((i < str.length - 1) ? " " : "")
		}
	}catch(e){
		res = "Error"
	}
	return res
}

let decrypt = (str, b) => {
	let data = str.split(" ")
	let res = ""
	for(let i = 0; i < data.length; i++){
		let s = parseInt(data[i], b)
		res += String.fromCharCode(s)
	}
	if(res.startsWith("\u0000")){
		return "Unknown error, please check your method."
	}else{
		return res
	}
}

app.get("/binary", (req, res) => {
	let data = req.query.data
	if(data == undefined){
		let json = {
			input: "undefined",
			method: "null",
			output: "We can't generate encrypted data."
		}
		res.send(JSON.stringify(json))
	}else{
		let method = req.query.method.toLowerCase()
		if(method == "encrypt"){
			let output = encrypt(data, 2)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else if(method == "decrypt"){
			let output = decrypt(data, 2)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else{
			let json = {
				input: data,
				method,
				output: "Undefined Method"
			}
			res.send(JSON.stringify(json))
		}
	}
})

app.get("/hex", (req, res) => {
	let data = req.query.data
	if(data == undefined){
		let json = {
			input: "undefined",
			method: "null",
			output: "We can't generate encrypted data."
		}
		res.send(JSON.stringify(json))
	}else{
		let method = req.query.method.toLowerCase()
		if(method == "encrypt"){
			let output = encrypt(data, 16)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else if(method == "decrypt"){
			let output = decrypt(data, 16)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else{
			let json = {
				input: data,
				method,
				output: "Undefined Method"
			}
			res.send(JSON.stringify(json))
		}
	}
})

app.get("/decimal", (req, res) => {
	let data = req.query.data
	if(data == undefined){
		let json = {
			input: "undefined",
			method,
			output: "We can't generate encrypted data."
		}
		res.send(JSON.stringify(json))
	}else{
		let method = req.query.method.toLowerCase()
		if(method == "encrypt"){
			let output = encrypt(data, 10)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else if(method == "decrypt"){
			let output = decrypt(data, 10)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else{
			let json = {
				input: data,
				method,
				output: "Undefined Method"
			}
			res.send(JSON.stringify(json))
		}
	}
})

app.get("/octa", (req, res) => {
	let data = req.query.data
	if(data == undefined){
		let json = {
			input: "undefined",
			method: "null",
			output: "We can't generate encrypted data."
		}
		res.send(JSON.stringify(json))
	}else{
		let method = req.query.method.toLowerCase()
		if(method == "encrypt"){
			let output = encrypt(data, 8)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else if(method == "decrypt"){
			let output = decrypt(data, 8)
			let json = {
				input: data,
				method,
				output
			}
			res.send(JSON.stringify(json))
		}else{
			let json = {
				input: data,
				method,
				output: "Undefined Method"
			}
			res.send(JSON.stringify(json))
		}
	}
})

app.listen(3000, () => {
	console.log("Running...")
})

module.exports = app