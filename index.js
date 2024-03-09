// 获取以太坊网络中的所有链 ID
async function getAllChainIds(web3) {
  return web3.eth.getChainIdList();
}

// 使用链 ID 对交易进行签名
async function signTransactionWithChainId(web3, transactionObject, privateKey, chainId) {
  const signedTx = await web3.eth.accounts.signTransaction(transactionObject, privateKey);
  return signedTx.rawTransaction;
}

// 通过链 ID 验证签名
async function verifySignatureWithChainId(web3, data, signature, address, chainId) {
  return web3.eth.accounts.recover(data, signature, true, chainId) === address;
}
