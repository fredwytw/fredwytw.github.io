// var Web3 = require('web3');
// set the provider of web3
if (typeof web3 !== 'undefined') {
    console.debug(web3.currentProvider);
    console.log("web3 provider setup ok");
    window.alert("web3 provider setup ok");
    web3 = new Web3(web3.currentProvider);
} else {
    window.alert("No currentProvider for web3");
}
