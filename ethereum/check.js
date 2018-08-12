const Web3 = require('web3');
const ganache = require('ganache-cli');
const provider = ganache.provider();
const web3 = new Web3(provider);
test = async () => {
    const  = await web3.eth.Contract("0xAa9b3dac996F849809ea9B9cAF0777fe44674cb0"); 
    console.log(bal);
}

test();
