module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/get-in-touch/team-up',
            handler: 'get-in-touch.teamUp',
            config: {
                policies: [],
            },
        }
    ],
};
