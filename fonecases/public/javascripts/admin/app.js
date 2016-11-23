$(function(argument) {
	$('#table_product').DataTable({
		"processing": true,
        "serverSide": true,
        "ajax": "/product/getall"
	})
});