module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/newsletters/subscribe',
            handler: 'newsletter.subscribe',
            config: {
                policies: [],
            },
        }
    ],
};
