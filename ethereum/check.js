const Web3 = require('web3');
const compiledFactory = require('./build/NGOs.json');
const web3 = new Web3("http://localhost:8545");

test = async () => {
    const accounts = await web3.eth.getAccounts();
    const contract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface), "0xAa9b3dac996F849809ea9B9cAF0777fe44674cb0");
    //const bal = await new web3.eth.Contract("0xAa9b3dac996F849809ea9B9cAF0777fe44674cb0");
    const newBalance = await web3.eth.getBalance(contract.options.address);
    
    console.log(accounts[0]);
    console.log(newBalance);
}

test();
