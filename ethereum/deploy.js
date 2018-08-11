//provider to unlock accounts and connect to network
const HDWalletprovider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/NGOs.json');
//const compiledCampaign = require('./build/Campaign.json');

const provider = new HDWalletprovider(
    //mnemonic for accounts on metamask
    'tuition dog half myth slam foster change pear charge hour addict lizard',
    //network location
    'https://rinkeby.infura.io/v3/f9cdef76f9cc4a568ba708ce504ee3dd'
    );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account',accounts[0]);
    const factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:'0x' + compiledFactory.bytecode})
        .send({from:accounts[0],gas:'6000000'});
    console.log('Address',factory.options.address);

}

deploy();


