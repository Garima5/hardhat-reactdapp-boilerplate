# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
###################

Prerequisites that need to be installed on the system:
Node
React
Metamask

### To work with the boiler plate code:
1. Clone the repository mentioned above
	```
	git clone https://github.com/Garima5/hardhat-reactdapp-boilerplate

	```
2. I have already created the React App. You should ``` cd ``` into the cloned repository.
3. We need to install the node modules in this project. 
	```
	npm install
	```
4. Now Install all dependencies:
	```
	Npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
	```
5. We will be using ethers library to connect to front end using Web3
6. I have already created a sample hardhat project for you. All the smart contracts go into the contracts folder. Greeter.sol is present in the contracts folder. When you add new smart contracts to the folder, make sure to update the scripts/deploy.js file. The new smart contract needs to be deployed in the same way as greeter has been called.
7. Also, note that after compiling, all artifacts go into the src/artifacts folder. I have added the configuration for that in the hardhat.config.js file. The network has also been configured already. For now, we will be working on localhost.
8. Make sure that you have metamask installed and signed in.
9. Now back to code, Open the terminal. To compile the smart contracts
```
Npx hardhat compile
```
10. Hardhat provides us with a local node which can be accessed as:
```
Npx harhat node
```

11. The contract can be deployed using:
```
npx hardhat run scripts/deploy.js --network localhost
```
12. You will get a message saying that your smart contract has been deployed to <address>. Copy that address and in src/App.js, update the value of the variable greeterAddress
13. Testing that the Greeter app is working:
  a. Go to Metamask extension on chrom
  b. Choose localhost
  c. Import accounts using private keys displayed in step 9
14. Connecting the Front End:
  a. All the code to be rendered on the front end goes into the App.js file
  b. Run the command : ‘npm start’
  c. Browser should have our app
15. Now in the browser’s console, you should see the greeting when the respective button is clicked.
16. To set a new greeting,import a new account in Metamask. Make sure that the account is connected. Now set the greeting in the input field. Metamask will ask us to confirm the transaction.
Now if you check the greeting again, it should show you the updated value.

