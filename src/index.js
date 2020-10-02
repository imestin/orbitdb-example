const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');
const Identities = require('orbit-db-identity-provider');

async function main() {
    // Create IPFS instance
    const ipfs = await IPFS.create();
    
    // Create OrbitDB instance
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const db = await orbitdb.keyvalue('first-database');
    console.log(db.address.toString());

    // Identity
    const identity = db.identity;
    console.log(identity.toJSON());

/*
    // Create new identity
    const options = { id: 'local-id' };
    const newIdentity = await Identities.createIdentity(options);
    // Create DB with identity
    const newDB = await OrbitDB.createInstance(ipfs, { identity: newIdentity });
    console.log("Public key: ", newDB.identity.publicKey)

*/
    console.log("orbitdb: ". orbitdb)
}

main();