// LinkResolver.js file

exports.linkResolver = (doc) => {
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
  
    return '/'
  }