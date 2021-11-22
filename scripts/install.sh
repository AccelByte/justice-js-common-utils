npm install \
  flat@"^4.1.0" \
  i18next@"^17.0.7" \
  react@"^16.8.6" \
  react-i18next@"^10.11.4" \
  validator@"^11.1.0" \
  @types/flat@"^0.0.28" \
  @types/jest@"^24.0.15" \
  @types/node@"^12.6.8" \
  @types/react@"^16.8.24" \
  @types/validator@"^10.11.2" \
  tslint@"^5.18.0" \
  tslint-config-prettier@"^1.18.0" \
  typescript@"^3.5.3" \
  i18next-scanner@"^2.10.2" \
  json5@"^2.1.0" \
  && node scripts/i18nbuilder \
  && ./node_modules/typescript/bin/tsc -p tsconfig.json \
  && ./node_modules/typescript/bin/tsc -p tsconfig.module.json \
  && rm -rf node_modules src scripts tsconfig.json tsconfig.module.json tslint.json package-lock.json
