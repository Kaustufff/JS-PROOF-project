/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(sportName, Players, medalsWon) {
    const nft = {
       "Sport_Name": sportName,
       "Number_of_Players": Players,
       "Medals_Won": medalsWon
    };
    NFTs.push(nft);
 } 

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + (i + 1));
        console.log("Sport Name: " + NFTs[i].Sport_Name);
        console.log("Number of Players: " + NFTs[i].Number_of_Players);
        console.log("Medals Won: " + NFTs[i].Medals_Won);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs: " + NFTs.length);
 }

// call your functions below this line
mintNFT("Basketball", 12, 5);
mintNFT("Football", 22, 3);
mintNFT("Tennis", 2, 7);
mintNFT("Cricket", 15, 4);

listNFTs();
getTotalSupply();
