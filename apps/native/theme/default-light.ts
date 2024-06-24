import { amber, cyan, jade, mauve, purple, ruby } from '@radix-ui/colors';
import { baseTheme } from './base-theme';

const lightColors = {
  ...mauve, // gray
  ...purple, // accent
  ...ruby, // error
  ...jade, // success
  ...amber, // warning
  ...cyan, // info
};

const lightTokens = {
  accentBase: lightColors.purple1,
  accentBgSubtle: lightColors.purple2,
  accentBg: lightColors.purple3,
  accentBgHover: lightColors.purple4,
  accentBgActive: lightColors.purple5,
  accentLine: lightColors.purple6,
  accentBorder: lightColors.purple7,
  accentBorderHover: lightColors.purple8,
  accentSolid: lightColors.purple9,
  accentSolidHover: lightColors.purple10,
  accentText: lightColors.purple11,
  accentTextContrast: lightColors.purple12,
  //
  grayBase: lightColors.mauve1,
  grayBgOverlay: `${lightColors.mauve1}CC`, // 80% alpha
  grayBgSubtle: lightColors.mauve2,
  grayBg: lightColors.mauve3,
  grayBgHover: lightColors.mauve4,
  grayBgActive: lightColors.mauve5,
  grayLine: lightColors.mauve6,
  grayBorder: lightColors.mauve7,
  grayBorderHover: lightColors.mauve8,
  graySolid: lightColors.mauve9,
  graySolidHover: lightColors.mauve10,
  grayText: lightColors.mauve11,
  grayTextContrast: lightColors.mauve12,
  //
  errorBase: lightColors.ruby1,
  errorBgSubtle: lightColors.ruby2,
  errorBg: lightColors.ruby3,
  errorBgHover: lightColors.ruby4,
  errorBgActive: lightColors.ruby5,
  errorLine: lightColors.ruby6,
  errorBorder: lightColors.ruby7,
  errorBorderHover: lightColors.ruby8,
  errorSolid: lightColors.ruby9,
  errorSolidHover: lightColors.ruby10,
  errorText: lightColors.ruby11,
  errorTextContrast: lightColors.ruby12,
  //
  successBase: lightColors.jade1,
  successBgSubtle: lightColors.jade2,
  successBg: lightColors.jade3,
  successBgHover: lightColors.jade4,
  successBgActive: lightColors.jade5,
  successLine: lightColors.jade6,
  successBorder: lightColors.jade7,
  successBorderHover: lightColors.jade8,
  successSolid: lightColors.jade9,
  successSolidHover: lightColors.jade10,
  successText: lightColors.jade11,
  successTextContrast: lightColors.jade12,
  //
  warningBase: lightColors.amber1,
  warningBgSubtle: lightColors.amber2,
  warningBg: lightColors.amber3,
  warningBgHover: lightColors.amber4,
  warningBgActive: lightColors.amber5,
  warningLine: lightColors.amber6,
  warningBorder: lightColors.amber7,
  warningBorderHover: lightColors.amber8,
  warningSolid: lightColors.amber9,
  warningSolidHover: lightColors.amber10,
  warningText: lightColors.amber11,
  warningTextContrast: lightColors.amber12,
  //
  infoBase: lightColors.cyan1,
  infoBgSubtle: lightColors.cyan2,
  infoBg: lightColors.cyan3,
  infoBgHover: lightColors.cyan4,
  infoBgActive: lightColors.cyan5,
  infoLine: lightColors.cyan6,
  infoBorder: lightColors.cyan7,
  infoBorderHover: lightColors.cyan8,
  infoSolid: lightColors.cyan9,
  infoSolidHover: lightColors.cyan10,
  infoText: lightColors.cyan11,
  infoTextContrast: lightColors.cyan12,
};

export const lightTheme = {
  ...baseTheme,
  colors: lightTokens,
} as const;
