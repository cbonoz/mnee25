import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("OpenQuoteProductionModule", (m) => {
  // For production deployments, use the MNEE token address from environment
  // This module deploys OpenQuoteContract with real MNEE token for mainnet
  
  const MNEE_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_MNEE_TOKEN_ADDRESS || "0x8ccedbAe4916b79da7F3F612EfB2EB93A2bFD6cF";

  // Deploy the OpenQuoteContract with production parameters
  const offer = m.contract("OpenQuoteContract", [
    "Logo Design Service", // title
    "Professional logo design with 3 revisions", // description
    "Design", // serviceType
    "1 logo file in 5 formats (PNG, SVG, AI, PDF, JPG)", // deliverables
    BigInt("5000000000000000000"), // amount (5 MNEE with 6 decimals)
    Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // deadline (30 days from now)
    MNEE_TOKEN_ADDRESS, // payment token address (real MNEE)
    BigInt("2500000000000000000") // depositAmount (2.5 MNEE with 6 decimals - 50% deposit)
  ]);

  return { offer };
});
