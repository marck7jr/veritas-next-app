module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/downloads' : {page: '/downloads'},
        '/privacy' : {page: '/privacy'},
      };
    }
  };