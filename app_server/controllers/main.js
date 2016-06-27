/* GET home page */
var index = function(req, res){
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 rating: 3',
      facilities: ['Hot drinks', 'Food', 'Premium'],
      distance: '100m',
      rating: 3
    },
    {
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 rating: 4',
      facilities: ['Hot drinks', 'Food', 'Premium'],
      distance: '200m',
      rating: 4
    },
    {
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 rating: 2',
      facilities: ['Food', 'Premium wifi'],
      distance: '250m',
      rating: 2
    }]

  });
};

module.exports.index = index;
