module.exports = {
  siteMetadata: {
    title: `Graceth Chronicles`,
    siteUrl: 'https://gatsby-theme-replica.vercel.app',
    siteName: `Graceth Chronicles`,
    description: 'Graceth Chronicles',
    author: 'Author - Graceth',
    bio: 'This is bio',
    location: 'Earth',
    email: 'hi@hiitea.io',
    link: 'https://link.io',
    avatar:
      'https://avatars.githubusercontent.com/u/36163574?v=4',
    status: {
      emoji: '🍓',
      text: 'I may be slow to respond',
      isBusy: true,
    },
    gcse: '',
    footerList: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Github',
        link: 'https://github.com/Graceth1020',
      }
    ],
    flagCounter: {
      url: 'https://info.flagcounter.com/mx4Y',
      image:
        '//s01.flagcounter.com/count/mx4Y/bg_FFFFFF/txt_000000/border_FFFFFF/columns_3/maxflags_9/viewers_3/labels_0/pageviews_1/flags_0/percent_0/',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-52574938-2', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `Graceth-Chronicles`,
      },
    },
    {
      resolve: 'gatsby-theme-replica',
      options: {
        contentPath: 'content',
      },
    },
  ],
};