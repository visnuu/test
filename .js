const Nfts = [];

function mintNFT(name, hairstyle, dressColor, bling) {
    const nft = {
        name,
        hairstyle,
        dressColor,
        bling
    };
    Nfts.push(nft);
    console.log(`Minted: ${name}`);
}


function listNFTs() {
    Nfts.forEach((nft, index) => {
        console.log(`\nID: ${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Hairstyle: ${nft.hairstyle}`);
        console.log(`Dress Color: ${nft.dressColor}`);
        console.log(`Bling: ${nft.bling}`);
    });
}


function getTotalSupply() {
    console.log(`\nTotal Supply: ${Nfts.length}`);
}


mintNFT("vishnu Sharma", "straight", "Black", "Gold");
mintNFT("Sam", "Straight", "Purple", "Shiny");
mintNFT("Prince", "Curly", "White", "silver");
mintNFT("Ansh", "Bald", "Red", "Copper");


listNFTs();


getTotalSupply();
