express = require('express');
router = express.Router();
async = require('async');
_ = require('underscore');
var productmodel = require('../models/product');

router.get('/admincrud',function(req,res,next){
    res.render('admin/product/crud',{title:'Product'})
})
        
router.get('/getall',  function(req, res, next) {
    var fullurl = req.protocol + '://' + req.get('host') + '/';
    var start = req.query.start;
    var limit = req.query.length;
    var searchvalue = req.query.search.value;
    if (searchvalue !== '') {
        searchvalue = req.query.search.value;
        var q = {
            user_id: req.user.id,
            name: {
            $regex : searchvalue,

            }

        }
    } else {
        var q = {
            
        }
    }
    //console.log(q);
    productmodel.paginate(q, {
        offset: start,
        limit: limit,
        sort: {
            columnname: -1,
        }
    }, function(err, result) {
        if (err) {
            res.send(err)
        }

        var res_arr = [];
        var outer_arr = [];
        async.each(result.docs,function(resulti,callback){
            var d = resulti;
            res_arr.push([
                        '<input type="checkbox">',
                        resulti.name,
                        resulti.description,
                        resulti.status,
                        '<a href="" class="btn btn-primary btn-xs" title="" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i class="fa fa-pencil-square-o"></i></a> <a href="" class="btn btn-primary btn-xs" title="" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i class="fa fa-trash-o"></i></a>'

                    ])
            callback();
        },function(){
            
            var ra = {};
            ra["recordsTotal"] = result.total;
            ra["recordsFiltered"] = result.total;
            ra['data'] = res_arr;
            res.format({
                'application/json': function() {
                    res.send(ra);
                }
            })
        });
     
    });
});




 module.exports = router;