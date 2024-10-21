// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shoppd.net',
                pathname: '/**', // Allow all paths from this domain
            },
            {
                protocol: 'https',
                hostname: 'www.cryptoblogs.io',
                pathname: '/**', // Allow all paths from this domain
            },
            {
                protocol: 'https',
                hostname: 'imagesnew.crypto3blog.com',
                pathname: '/**', // Allow all paths from this domain
            },
            {
                protocol: 'https',
                hostname: 'dubly.gumlet.io',
                pathname: '/**', // Allow all paths from this domain
            },
        ],
    },
};

