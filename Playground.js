// Initialize Nfts array with an empty array
const Nfts = [];

function mint_NFT(name, hairstyle, dressColor, bling) {
    const nft = {
        "name": name,
        "hairstyle": hairstyle,
        "dressColor": dressColor,
        "bling": bling
    };
    Nfts.push(nft);
    console.log("Minted: " + name);
}

function list_NFTs() {
    for (let i = 0; i < Nfts.length; i++) {
        console.log("\nID: " + (i + 1));
        console.log("Name: " + Nfts[i].name);
        console.log("Hairstyle: " + Nfts[i].hairstyle);
        console.log("Dress Color: " + Nfts[i].dressColor); // Include dress color
        console.log("Bling: " + Nfts[i].bling); // Include bling
    }
}

function getTotalSupply() {
    console.log("\nTotal Supply: " + Nfts.length);
}

// Example usage
mint_NFT("Vishnu", "straight", "Black", "Gold");
mint_NFT("Sam", "Straight", "Purple", "Shiny");
mint_NFT("Prince", "Curly", "White", "silver");
mint_NFT("Ansh", "Bald", "Red", "Copper");

list_NFTs();
getTotalSupply();
