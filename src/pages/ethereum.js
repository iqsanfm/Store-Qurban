import { ethers, Contract } from 'ethers';
import PaymentProcessor from '../contracts/PaymentProcessor.json';
import Qbn from '../contracts/Qbn.json';

const getBlockchain = () => 
    new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
            if(window.ethereum) {
                await window.ethereum.enable();
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                // eslint-disable-next-line no-unused-vars
                const signerAddress = await signer.getAddress();

                const paymentProcessor = new Contract(
                    PaymentProcessor.networks[window.ethereum.networkVersion].address,
                    PaymentProcessor.abi,
                    signer
                );

                const qbn = new Contract(
                    Qbn.networks[window.ethereum.networkVersion].address,
                    Qbn.abi,
                    signer
                );

                resolve({provider, paymentProcessor, qbn});
            }
            reject(false);
           
        });
    });

    export default getBlockchain;