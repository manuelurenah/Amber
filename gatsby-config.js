module.exports = {
  siteMetadata: {
    title: 'Amber',
    description: 'Just another basic blog using GatsbyJS',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
