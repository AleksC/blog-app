let moment = require("moment");

export const dateMixin = {
    filters: {
        formatDate(str) {
            return moment(str).format('YYYY-MM-DD HH:mm:ss');
        },
        diffForHumans(str) {
            return moment(str).fromNow();
        }

    }
};
