/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Gatsby Demo`,
        description: `Example project for the Gatsby Head API`,
        twitterUsername: `@gatsbyjs`,
        image: `/gatsby-icon.png`,
        siteUrl: `https://www.yudiz.com`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
