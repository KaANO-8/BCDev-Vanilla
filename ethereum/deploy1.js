//provider to unlock accounts and connect to network
const Web3 = require('web3');
const compiledFactory = require('./build/NGOs.json');
//const ganache = require('ganache-cli');

//const provider = ganache.provider();
const web3 = new Web3("http://localhost:8545");
//new Web3(Web3.providers.HTTPProvider("http://127.0.0.1:8545"));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account',accounts[0]);
    const factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:'0x' + compiledFactory.bytecode})
        .send({from:accounts[0],gas:'2000000'});
    console.log('Address',factory.options.address);

}

deploy();