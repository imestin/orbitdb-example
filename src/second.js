const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

async function main() {
    // Create the second peer
    const ipfs = await IPFS.create();

    // Open the first database for the second peer,
    // ie. replicate the database
    const orbitdb = await OrbitDB.createInstance(ipfs, { directory: './orbitdb2' });
    const db = await orbitdb.keyvalue("/orbitdb/zdpuAuPEkDuFxVMbzJQ5CnhzbXjNuiewUqMMmz38dCUcEmxLG/first-database");

    // When the second database replicated new heads, query the database
    db.events.on('replicated', () => {
        const value = db.get('name');
        console.log("Fetched data (name): ", value);
    })
}

main();