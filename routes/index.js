// GET request for homepage

export.index = function(req, res) {
    res.render('index');
};

// view profile or some shit idk
exports.redirectOrSomething = function(req, res) {
    var name = req.params.name;
    res.render('views1/' + name);
};
