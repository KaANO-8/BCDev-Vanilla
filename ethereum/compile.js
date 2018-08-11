const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

//save the compiled contracts in buils folder everytime we compile and delete the previous compiled contracts from build
const buildPath = path.resolve(__dirname,'build');
//remove the previous bcompiled contracts
fs.removeSync(buildPath);
const meraNGOPath = path.resolve(__dirname,'contracts','meraNGO.sol');
const source = fs.readFileSync(meraNGOPath,'utf8');
const output = solc.compile(source,1).contracts;
//create the build path to store compiled contracts
fs.ensureDirSync(buildPath);
//store all compiled contracts in the build folder
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath,contract.replace(':','') + '.json'),
        output[contract]
        );
}