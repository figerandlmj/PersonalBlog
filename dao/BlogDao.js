var dbutil = require("./DBUtil.js");

function insertBlog(title, content, tags, views, ctime, utime, success) {
	var insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?);";
	var params = [title, content, tags, views, ctime, utime];

	var connection = dbutil.createConnection();
	connection.connect();

	connection.query(insertSql, params, function(error, result) {
		if(error == null) {
			success(result);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

function queryBlogByPage(page, pageSize, success) {
	var querySql = "select * from blog order by id desc limit ?, ?;";
	var params = [page * pageSize, pageSize];

	var connection = dbutil.createConnection();
	connection.connect();

	connection.query(querySql, params, function(error, result) {
		if(error == null) {
			success(result);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

function queryBlogCount(success) {
    var querySql = "select count(1) as count from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();

    connection.query(querySql, params, function(error, result) {
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function queryBlogById(id, success) {
    var querySql = "select * from blog where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();

    connection.query(querySql, params, function(error, result) {
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function queryAllBlog(success) {
    var querySql = "select * from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();

    connection.query(querySql, params, function(error, result) {
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function addViews(blogId, success) {
    var updateSql = "update blog set views = views + 1 where id = ?;";
    var params = [blogId];

    var connection = dbutil.createConnection();
    connection.connect();

    connection.query(updateSql, params, function(error, result) {
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function queryHotBlog(size, success) {
    var querySql = "select * from blog order by views desc limit ?;";
    var params = [size];

    var connection = dbutil.createConnection();
    connection.connect();

    connection.query(querySql, params, function(error, result) {
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

module.exports = {
	insertBlog: insertBlog,
    queryBlogByPage: queryBlogByPage,
    queryBlogCount: queryBlogCount,
    queryBlogById: queryBlogById,
    queryAllBlog: queryAllBlog,
    addViews: addViews,
    queryHotBlog: queryHotBlog
}