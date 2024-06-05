module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/get-consultation/consultation',
            handler: 'get-consultation.consultation',
            config: {
                policies: [],
            },
        }
    ],
};
