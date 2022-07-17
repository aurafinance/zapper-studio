/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { BaseRewardPool, BaseRewardPoolInterface } from '../BaseRewardPool';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pid_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'stakingToken_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'rewardToken_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'rewardManager_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'RewardAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'RewardPaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Staked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_reward',
        type: 'address',
      },
    ],
    name: 'addExtraReward',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clearExtraRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'donate',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'duration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'earned',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'extraRewards',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extraRewardsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getReward',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_claimExtras',
        type: 'bool',
      },
    ],
    name: 'getReward',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'historicalRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastTimeRewardApplicable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastUpdateTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'newRewardRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'operator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'periodFinish',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pid',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'processIdleRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_rewards',
        type: 'uint256',
      },
    ],
    name: 'queueNewRewards',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'queuedRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardPerToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardPerTokenStored',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'rewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakeAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_for',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'stakeFor',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userRewardPerTokenPaid',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'claim',
        type: 'bool',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'claim',
        type: 'bool',
      },
    ],
    name: 'withdrawAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'claim',
        type: 'bool',
      },
    ],
    name: 'withdrawAllAndUnwrap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'claim',
        type: 'bool',
      },
    ],
    name: 'withdrawAndUnwrap',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x61012060405260008055600060015560006004556000600555600060065534801561002957600080fd5b50604051611d09380380611d09833981810160405260a081101561004c57600080fd5b50805160208201516040830151606080850151608095860151610100959095526001600160601b031993821b841660a05291811b8316909452831b811660c052911b1660e05260805160601c60a05160601c60c05160601c60e05160601c61010051611beb61011e60003980610cd4528061106d528061175e5250806105ae52806106305280610acd52508061099c52806109cb5280610ca5528061179552508061069d52806108975280610e595280610eab5280610f75525080610c7c528061109e52806110dd5250611beb6000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80636c8bcee811610130578063a694fc3a116100b8578063df136d651161007c578063df136d65146104f6578063ebe2b12b146104fe578063f106845414610506578063f14faf6f1461050e578063f7c618c11461052b57610226565b8063a694fc3a1461049c578063c32e7202146104b9578063c8f33c91146104de578063cd3daf9d146104e6578063d55a23f4146104ee57610226565b80637b0a47ee116100ff5780637b0a47ee1461045657806380faa57d1461045e5780638b876347146104665780638dcb40611461048c578063901a7d531461049457610226565b80636c8bcee8146103f25780637050ccd9146103fa57806370a082311461042857806372f702f31461044e57610226565b806338d07436116101b357806349f039a21161018257806349f039a214610380578063570ca7351461039f578063590a41f5146103a75780635e43c47b146103c457806363d38c3b146103ea57610226565b806338d074361461032e5780633d18b912146103535780633e8b83e31461035b57806340c354461461036357610226565b80630fb5a6b4116101fa5780630fb5a6b4146102b757806318160ddd146102bf5780631c1c6fe5146102c7578063262d3d6d146102e65780632ee40908146102ee57610226565b80628cc2621461022b5780630569d388146102635780630700037d1461026d5780630f4ef8a614610293575b600080fd5b6102516004803603602081101561024157600080fd5b50356001600160a01b0316610533565b60408051918252519081900360200190f35b61026b6105a3565b005b6102516004803603602081101561028357600080fd5b50356001600160a01b031661061c565b61029b61062e565b604080516001600160a01b039092168252519081900360200190f35b610251610652565b610251610659565b61026b600480360360208110156102dd57600080fd5b50351515610660565b61025161067e565b61031a6004803603604081101561030457600080fd5b506001600160a01b038135169060200135610684565b604080519115158252519081900360200190f35b61031a6004803603604081101561034457600080fd5b5080359060200135151561070e565b61031a610919565b61026b61092e565b61029b6004803603602081101561037957600080fd5b5035610959565b61026b6004803603602081101561039657600080fd5b50351515610980565b61029b61099a565b61031a600480360360208110156103bd57600080fd5b50356109be565b61031a600480360360208110156103da57600080fd5b50356001600160a01b0316610ac0565b610251610be0565b610251610be6565b61031a6004803603604081101561041057600080fd5b506001600160a01b0381351690602001351515610bec565b6102516004803603602081101561043e57600080fd5b50356001600160a01b0316610e3c565b61029b610e57565b610251610e7b565b610251610e81565b6102516004803603602081101561047c57600080fd5b50356001600160a01b0316610e94565b61031a610ea6565b610251610f56565b61031a600480360360208110156104b257600080fd5b5035610f5c565b61031a600480360360408110156104cf57600080fd5b50803590602001351515610fdb565b610251611005565b61025161100b565b610251611059565b61025161105f565b610251611065565b61025161106b565b61031a6004803603602081101561052457600080fd5b503561108f565b61029b6110db565b6001600160a01b038116600090815260096020908152604080832054600890925282205461059b919061059590670de0b6b3a76400009061058f906105809061057a61100b565b906110ff565b61058988610e3c565b9061115c565b906111bc565b90611223565b90505b919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461060e576040805162461bcd60e51b815260206004820152600b60248201526a08585d5d1a1bdc9a5e995960aa1b604482015290519081900360640190fd5b61061a600b6000611b0a565b565b60096020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b62093a8081565b6007545b90565b336000908152600a602052604090205461067a908261070e565b5050565b60065481565b6000610690828461127d565b6106c56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611419565b6040805183815290516001600160a01b038516917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a25060015b92915050565b60003361071961100b565b600355610724610e81565b6002556001600160a01b0381161561076b5761073f81610533565b6001600160a01b0382166000908152600960209081526040808320939093556003546008909152919020555b600084116107c0576040805162461bcd60e51b815260206004820152601e60248201527f526577617264506f6f6c203a2043616e6e6f7420776974686472617720300000604482015290519081900360640190fd5b60005b600b5481101561085357600b81815481106107da57fe5b60009182526020822001546040805163f3fef3a360e01b81523360048201526024810189905290516001600160a01b039092169263f3fef3a39260448084019382900301818387803b15801561082f57600080fd5b505af1158015610843573d6000803e3d6000fd5b5050600190920191506107c39050565b5060075461086190856110ff565b600755336000908152600a602052604090205461087e90856110ff565b336000818152600a60205260409020919091556108c6907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169086611479565b60408051858152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a2821561090f5761090d336001610bec565b505b5060019392505050565b6000610926336001610bec565b506001905090565b600054421015801561094257506000600454115b1561061a576109526004546114d0565b6000600455565b600b818154811061096657fe5b6000918252602090912001546001600160a01b0316905081565b336000908152600a602052604090205461067a9082610fdb565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a2b576040805162461bcd60e51b815260206004820152600b60248201526a08585d5d1a1bdc9a5e995960aa1b604482015290519081900360640190fd5b600454610a39908390611223565b91506000544210610a5a57610a4d826114d0565b506000600455600161059e565b60008054610a7690610a6f9062093a806110ff565b42906110ff565b60015490915081026000610a908561058f846103e861115c565b905061033e811015610aaf57610aa5856114d0565b6000600455610ab5565b60048590555b506001949350505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b2d576040805162461bcd60e51b815260206004820152600b60248201526a08585d5d1a1bdc9a5e995960aa1b604482015290519081900360640190fd5b6001600160a01b038216610b7a576040805162461bcd60e51b815260206004820152600f60248201526e217265776172642073657474696e6760881b604482015290519081900360640190fd5b600b54600c11610b8c5750600061059e565b50600b8054600181810183556000929092527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180546001600160a01b0384166001600160a01b0319909116179055919050565b60045481565b61033e81565b600082610bf761100b565b600355610c02610e81565b6002556001600160a01b03811615610c4957610c1d81610533565b6001600160a01b0382166000908152600960209081526040808320939093556003546008909152919020555b6000610c5485610533565b90508015610d9a576001600160a01b03808616600090815260096020526040812055610ca3907f0000000000000000000000000000000000000000000000000000000000000000168683611479565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166371192b177f000000000000000000000000000000000000000000000000000000000000000087846040518463ffffffff1660e01b815260040180848152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b158015610d4257600080fd5b505af1158015610d56573d6000803e3d6000fd5b50506040805184815290516001600160a01b03891693507fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e048692509081900360200190a25b8315610ab55760005b600b54811015610e3057600b8181548110610dba57fe5b600091825260208220015460408051630c00007b60e41b81526001600160a01b038a811660048301529151919092169263c00007b0926024808201939182900301818387803b158015610e0c57600080fd5b505af1158015610e20573d6000803e3d6000fd5b505060019092019150610da39050565b50506001949350505050565b6001600160a01b03166000908152600a602052604090205490565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b6000610e8f426000546115f4565b905090565b60086020526000908152604090205481565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610f1657600080fd5b505afa158015610f2a573d6000803e3d6000fd5b505050506040513d6020811015610f4057600080fd5b50519050610f4d81610f5c565b50600191505090565b60055481565b6000610f68823361127d565b610f9d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611419565b60408051838152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a2506001919050565b6000610fe883333361160a565b508115610ffc57610ffa336001610bec565b505b50600192915050565b60025481565b6000611015610659565b611022575060035461065d565b610e8f611050611030610659565b61058f670de0b6b3a764000061058960015461058960025461057a610e81565b60035490611223565b600b5490565b60035481565b60005481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006110c66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611419565b6004546110d39083611223565b600455919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600082821115611156576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008261116b57506000610708565b8282028284828161117857fe5b04146111b55760405162461bcd60e51b8152600401808060200182810382526021815260200180611b6b6021913960400191505060405180910390fd5b9392505050565b6000808211611212576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161121b57fe5b049392505050565b6000828201838110156111b5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b8061128661100b565b600355611291610e81565b6002556001600160a01b038116156112d8576112ac81610533565b6001600160a01b0382166000908152600960209081526040808320939093556003546008909152919020555b6000831161132d576040805162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c203a2043616e6e6f74207374616b6520300000000000604482015290519081900360640190fd5b60005b600b548110156113c457600b818154811061134757fe5b6000918252602082200154604080516356e4bb9760e11b81526001600160a01b038781166004830152602482018990529151919092169263adc9772e926044808201939182900301818387803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b5050600190920191506113309050565b506007546113d29084611223565b6007556001600160a01b0382166000908152600a60205260409020546113f89084611223565b6001600160a01b039092166000908152600a60205260409020919091555050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261147390859061183c565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526114cb90849061183c565b505050565b60006114da61100b565b6003556114e5610e81565b6002556001600160a01b0381161561152c5761150081610533565b6001600160a01b0382166000908152600960209081526040808320939093556003546008909152919020555b6006546115399083611223565b600655600054421061155a576115528262093a806111bc565b6001556115a2565b6000805461156890426110ff565b905060006115816001548361115c90919063ffffffff16565b905061158d8482611223565b935061159c8462093a806111bc565b60015550505b60058290554260028190556115ba9062093a80611223565b6000556040805183815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a15050565b600081831061160357816111b5565b5090919050565b60008261161561100b565b600355611620610e81565b6002556001600160a01b038116156116675761163b81610533565b6001600160a01b0382166000908152600960209081526040808320939093556003546008909152919020555b60005b600b548110156116fe57600b818154811061168157fe5b60009182526020822001546040805163f3fef3a360e01b81526001600160a01b038981166004830152602482018b90529151919092169263f3fef3a3926044808201939182900301818387803b1580156116da57600080fd5b505af11580156116ee573d6000803e3d6000fd5b50506001909201915061166a9050565b5060075461170c90866110ff565b6007556001600160a01b0384166000908152600a602052604090205461173290866110ff565b6001600160a01b038086166000908152600a60205260408082209390935582516305335c3960e21b81527f0000000000000000000000000000000000000000000000000000000000000000600482015260248101899052868316604482015292517f0000000000000000000000000000000000000000000000000000000000000000909216926314cd70e4926064808301939282900301818387803b1580156117da57600080fd5b505af11580156117ee573d6000803e3d6000fd5b50506040805188815290516001600160a01b03881693507f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d592509081900360200190a2506001949350505050565b6060611891826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118ed9092919063ffffffff16565b8051909150156114cb578080602001905160208110156118b057600080fd5b50516114cb5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b8c602a913960400191505060405180910390fd5b60606118fc8484600085611904565b949350505050565b6060824710156119455760405162461bcd60e51b8152600401808060200182810382526026815260200180611b456026913960400191505060405180910390fd5b61194e85611a60565b61199f576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106119de5780518252601f1990920191602091820191016119bf565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611a40576040519150601f19603f3d011682016040523d82523d6000602084013e611a45565b606091505b5091509150611a55828286611a66565b979650505050505050565b3b151590565b60608315611a755750816111b5565b825115611a855782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611acf578181015183820152602001611ab7565b50505050905090810190601f168015611afc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5080546000825590600052602060002090810190611b289190611b2b565b50565b5b80821115611b405760008155600101611b2c565b509056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220d0d4834e546c839bf06d5243f76bcbd47043cf984843f141cd50e7972377895864736f6c634300060c0033';

type BaseRewardPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BaseRewardPoolConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class BaseRewardPool__factory extends ContractFactory {
  constructor(...args: BaseRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    pid_: BigNumberish,
    stakingToken_: string,
    rewardToken_: string,
    operator_: string,
    rewardManager_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<BaseRewardPool> {
    return super.deploy(
      pid_,
      stakingToken_,
      rewardToken_,
      operator_,
      rewardManager_,
      overrides || {},
    ) as Promise<BaseRewardPool>;
  }
  override getDeployTransaction(
    pid_: BigNumberish,
    stakingToken_: string,
    rewardToken_: string,
    operator_: string,
    rewardManager_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(pid_, stakingToken_, rewardToken_, operator_, rewardManager_, overrides || {});
  }
  override attach(address: string): BaseRewardPool {
    return super.attach(address) as BaseRewardPool;
  }
  override connect(signer: Signer): BaseRewardPool__factory {
    return super.connect(signer) as BaseRewardPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRewardPoolInterface {
    return new utils.Interface(_abi) as BaseRewardPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BaseRewardPool {
    return new Contract(address, _abi, signerOrProvider) as BaseRewardPool;
  }
}
