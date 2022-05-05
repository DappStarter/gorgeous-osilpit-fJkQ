require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember unveil harvest glory bottom truck'; 
let testAccounts = [
"0xa6cf10f7fa510582340050bc1bdd18f1b72ee6662808e8fed0c0c4b76a135e43",
"0x433382246814e74f2165d1099b39acac08f17b602a99fbd0c2f7d0a7c3889458",
"0xae0ba463ca24af352deab1b986279fe01fa243d607ca2dc9a26e351c7e3a4195",
"0xd99ae2ce7b55f9fdd703ccf5deaf494a370fce031ab284b4b69b73b826907a5a",
"0xa375d1974f9c02b5de406cc09a4fce1255d347176ff3c3497245b7ea97416131",
"0x24542166c1d330955d278e134b3ee032ce1676b90d14fcc706563cd2e928b91a",
"0x12b91997e41c76d10b1e2f95d6f56572d9ca431bed4da30210dbf859d9e4e883",
"0x50fb0eb32c863fc705981d49e275a0d719e22aae475e1fcc4c63580c427de772",
"0xd31fa08157ac7a9fefd449b577d2c93cb92f4a5de469e1c2feb0af45f742b3e3",
"0xa34a643fe97868c611f20c6fbdccf32748a3752a7c3e2f5f599c053ddddc9459"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

