export const DerolasAuctionAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_minDonation",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_balancerRouter",
        type: "address",
        internalType: "address",
      },
      {
        name: "_balancerVaultAdmin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_poolId",
        type: "address",
        internalType: "address",
      },
      {
        name: "_assetsInPool",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_incentiveTokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_incentiveTokenIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_wethIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_availableRewards",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_roundLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "MINIMUM_BALANCE_DONATION_AMOUNT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "assetsInPool",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balancerRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balancerVaultAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "changeOwner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "changeParams",
    inputs: [
      {
        name: "newRoundRewards",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newRoundLength",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minDonation",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claim",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimable",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "currentRound",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "donate",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "endRound",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "epochDonationActivities",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "estimateTicketPercentage",
    inputs: [
      {
        name: "donation",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllocatedIncentives",
    inputs: [],
    outputs: [
      {
        name: "allocatedRewards",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBlocksSinceRoundEnd",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentShare",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGameState",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "state",
        type: "tuple",
        internalType: "struct GameState",
        components: [
          {
            name: "roundLength",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "currentRound",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "roundEndBlock",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "minimumDonation",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "blocksRemaining",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "roundRewards",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalDonated",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalClaimed",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "incentiveBalance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userCurrentDonation",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userCurrentShare",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userClaimable",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasClaimed",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "canPlayGame",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMultisigNonces",
    inputs: [
      {
        name: "multisig",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "nonces",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRemainingRoundLength",
    inputs: [],
    outputs: [
      {
        name: "remainingRoundLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoundProgress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "incentiveTokenAddress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "incentiveTokenIndex",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isRatioPass",
    inputs: [
      {
        name: "curNonces",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "lastNonces",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "ratioPass",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "paramsUpdateRequested",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "permit2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolId",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "roundPoints",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "availableRewards",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "totalDonated",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "totalClaimed",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "length",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minDonation",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "endBlock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "roundToClaimed",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "roundToDonations",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "topUpIncentiveBalance",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "wethIndex",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawIncentiveTokenBalance",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuctionEnded",
    inputs: [
      {
        name: "roundCounter",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "totalRoundDonations",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "totalRoundClaimed",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "availableRewards",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DonationReceived",
    inputs: [
      {
        name: "donatorAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EthDonatedToBalancer",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerUpdated",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ParamsUpdated",
    inputs: [
      {
        name: "nextRound",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "availableRewards",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "roundLength",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "minDonation",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RewardsClaimed",
    inputs: [
      {
        name: "donatorAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TopUpIncentiveReceived",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TopUpIncentiveWithdrawn",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UnclaimedIncentiveTokensDonated",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "NoAvailableIncentiveBalance",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenTransferFailed",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;
