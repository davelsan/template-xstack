import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  card: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    //
    flex: 1,
    justifyContent: 'center',
    width: '70%',
    height: '100%',
    padding: theme.spacing.md,
  },
  textSubtitle: {
    color: theme.colors.grayBase,
    fontSize: theme.fontSizes.h4,
  },
  textTitle: {
    color: theme.colors.accentLine,
  },
  scrollView: {
    gap: theme.spacing.md,
    padding: theme.spacing.md,
  },
}));

export default stylesheet;
