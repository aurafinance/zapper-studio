import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { SturdyLendingTokenHelper } from '../helpers/sturdy.lending.token-helper';
import { STURDY_DEFINITION } from '../sturdy.definition';

const appId = STURDY_DEFINITION.id;
const groupId = STURDY_DEFINITION.groups.stableDebt.id;
const network = Network.FANTOM_OPERA_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class FantomSturdyStableDebtTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(@Inject(SturdyLendingTokenHelper) private readonly sturdyLendingTokenHelper: SturdyLendingTokenHelper) {}

  async getPositions() {
    return this.sturdyLendingTokenHelper.getPositions({
      appId,
      groupId,
      network,
      protocolDataProviderAddress: '0x7ff2520cd7b76e8c49b5db51505b842d665f3e9a',
      resolveTokenAddress: ({ reserveTokenAddressesData }) => reserveTokenAddressesData.stableDebtTokenAddress,
      resolveLendingRate: ({ reserveData }) => reserveData.stableBorrowRate,
      resolveLabel: ({ reserveToken }) => `Borrowed ${getLabelFromToken(reserveToken)}`,
      resolveApyLabel: ({ apy }) => `${(apy * 100).toFixed(3)}% APR (stable)`,
    });
  }
}
