// test/MyContract.test.js

const { accounts, contract } = require('@openzeppelin/test-environment');

const { expect } = require('chai');

const Qbn = contract.fromArtifact('Qbn');

describe('Qbn', function () {
  const [ owner ] = accounts;

  beforeEach(async function () {
    // eslint-disable-next-line no-undef
    this.Qbn = await Qbn.new({ from: owner });
  });

  it('the deployer is the owner', async function () {
    expect(await this.Qbn.owner()).to.equal(owner);
  });
});