/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const EcommerceErrorTranslationMap: { [key: string]: React.ReactNode } = {
  38171: <Trans i18nKey="serviceError.38171">Sorry, you already own this item</Trans>,
  30121: (
    <Trans i18nKey="serviceError.30121">Failed to import store. Imported file is invalid. Please try again.</Trans>
  ),
  30122: (
    <Trans i18nKey="serviceError.30122">
      Failed to import store. Language, Region, or Namespace does not match. Please try again.
    </Trans>
  ),
  30171: (
    <Trans i18nKey="serviceError.30171">
      Failed to update store. Language/Region does not match. Please try again.
    </Trans>
  ),
  30172: (
    <Trans i18nKey="serviceError.30172">
      Failed to update store. Language/Region does not match. Please try again.
    </Trans>
  ),
  35121: <Trans i18nKey="serviceError.35121">The maximum amount per day has been exceeded.</Trans>,
  35122: <Trans i18nKey="serviceError.35122">The maximum amount per transaction has been exceeded.</Trans>,
  35125: <Trans i18nKey="serviceError.35125">The maximum balance amount has been exceeded.</Trans>,
  31177: (
    <Trans i18nKey="serviceError.31177">
      You cannot make this purchase because it includes one or more items you already own.
    </Trans>
  ),
  38121: <Trans i18nKey="serviceError.38121">You can only purchase 1 copy of this item.</Trans>,
};
