var ghpages = require('gh-pages');

ghpages.publish('dist', {
    repo: 'git@github.com:avil13/vue-sweetalert2.git'
}, function(err) {
    if (err) {
        console.log(err);
    }

    console.log(' https://avil13.github.io/vue-sweetalert2/ \n\n');
});
