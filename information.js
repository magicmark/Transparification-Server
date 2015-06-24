'use strict';

var hosts = {
  'bbc.co.uk': 'bbc',
  'm.bbc.co.uk': 'bbc',
  'reddit.com': 'reddit',
  'www.reddit.com': 'reddit',
  'condenast.co.uk': 'condenast'
  'tumblr.com' : 'tumblr'
};

var organisations = {
  'bbc': {
    'owner': null,
    'info': 'British Broadcasting Corporation'
  },
  'reddit': {
    'owner': 'condenast',
    'info': 'Reddit'
  },
  'condenast': {
    'owner': 'advancepublications',
    'info': 'Condé Nast'
  },
  'advancepublications': {
    'owner': null,
    'info': 'Advance Publications'
  },
  'tumblr': {
    'owner': 'yahoo',
    'info': 'Tumblr'
  },
  'yahoo': {
    'owner': null,
    'info': 'Yahoo'
  }
};

function getInfoString (organisationKey) {
  var infoString = '';
  for (;;) {
    var organisation = organisations[organisationKey];
    console.log(organisation);
    if (!organisation) { return infoString; }
    if (infoString.length) {
      infoString += " -> ";
    }
    infoString += organisation.info;
    organisationKey = organisation.owner; 
  }
};

module.exports = {
  getInfo: function (host) {
    console.log(host);
    var siteKey = hosts[host];
    return getInfoString(siteKey);
  }
};
