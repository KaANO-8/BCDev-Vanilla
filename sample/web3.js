import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    // either we don't have metamask or we are on server
    const provider = new Web3.providers.HttpProvider (
        'https://rinkeby.infura.io/v3/f9cdef76f9cc4a568ba708ce504ee3dd'
    );
    web3 = new Web3(provider);
}

export default web3;    