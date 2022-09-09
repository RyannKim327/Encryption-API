### Encryption API
##### By: MPOP Reverse II

---
> A simple encryption api with ascii based program. Just read the documentation to lessen your questions.
---

#### Binary
```NodeJS
let axios = require("axios");
let encrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/binary?data=" + str + "&method=encrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

let decrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/binary?data=" + str + "&method=decrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

module.exports = async (data) => {
	let enc = await encrypt("a");
	let dec = await decrypt("01100001");
	console.log(enc);
	console.log(dec);
}
```
###### Output [Encrypt]:
```JSON
{
	input: "a",
	method: "encrypt",
	output: "01100001"
}
```
###### Output [Decrypt]:
```JSON
{
	input: "01100001",
	method: "decrypt",
	output: "a"
}
```

---
#### Decimal
```NodeJS
let axios = require("axios");
let encrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/decimal?data=" + str + "&method=encrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

let decrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/decimal?data=" + str + "&method=decrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

module.exports = async (data) => {
	let enc = await encrypt("a");
	let dec = await decrypt("97");
	console.log(enc);
	console.log(dec);
}
```
###### Output [Encrypt]:
```JSON
{
	input: "a",
	method: "encrypt",
	output: "97"
}
```
###### Output [Decrypt]:
```JSON
{
	input: "97",
	method: "decrypt",
	output: "a"
}
```
---
#### Hex
```NodeJS
let axios = require("axios");
let encrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/hex?data=" + str + "&method=encrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

let decrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/hex?data=" + str + "&method=decrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

module.exports = async (data) => {
	let enc = await encrypt("a");
	let dec = await decrypt("61");
	console.log(enc);
	console.log(dec);
}
```
###### Output [Encrypt]:
```JSON
{
	input: "a",
	method: "encrypt",
	output: "61"
}
```
###### Output [Decrypt]:
```JSON
{
	input: "61",
	method: "decrypt",
	output: "a"
}
```
---
#### Octa
```NodeJS
let axios = require("axios");
let encrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/octa?data=" + str + "&method=encrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

let decrypt = async (str) => {
	let data = await axios.get("https://api-encryption.vercel.app/octa?data=" + str + "&method=decrypt").then(response => {
		return response.data;
	}).catch(error => {
		console.error("Error: " + error);
		return null;
	});
	return data;
}

module.exports = async (data) => {
	let enc = await encrypt("a");
	let dec = await decrypt("141");
	console.log(enc);
	console.log(dec);
}
```
###### Output [Encrypt]:
```JSON
{
	input: "a",
	method: "encrypt",
	output: "141"
}
```
###### Output [Decrypt]:
```JSON
{
	input: "141",
	method: "decrypt",
	output: "a"
}
```
---
#### Conclusion
> You may insert string data as many as you want, but I still don't know if this api has bugs or none. If you found something, bugs or error, kindly report and email us @ weryses19@gmail.com