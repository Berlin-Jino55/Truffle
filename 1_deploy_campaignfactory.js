// SPDX-License-Identifier: MIT
const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");

module.exports = async function (deployer) {
  await deployer.deploy(CampaignFactory);
  const campaignFactory = await CampaignFactory.deployed();
  await deployer.deploy(Campaign, 100, campaignFactory.address);
};
