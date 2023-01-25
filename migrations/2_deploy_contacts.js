// eslint-disable-next-line no-undef
const Qbn = artifacts.require('../contracts/Qbn.sol');
// eslint-disable-next-line no-undef
const PaymentProcessor = artifacts.require('../contracts/PaymentProcessor.sol');


module.exports = async function (deployer, network, addresses) {
  const [admin, payer, ] = addresses;

  if(network === 'sepolia' || network === 'sepolia') {
      await deployer.deploy(Qbn);
      const qbn = await Qbn.deployed();
      // eslint-disable-next-line no-undef
      await qbn.faucet(payer, web3.utils.toWei('10000'));

      await deployer.deploy(PaymentProcessor, admin, qbn.address);
  } else {
      const ADMIN_ADDRESS = '';
      const QBN_ADDRESS = '';
      await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, QBN_ADDRESS);
  
  }
};