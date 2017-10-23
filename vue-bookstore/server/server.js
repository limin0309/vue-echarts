//主要是提供接口的
// /book?id=1 get post delete put

let http = require('http');
let url = require('url');
let fs = require('fs');
//我们对书的增删改查 操作的都是books.json文件
function readBooks(callback) {
  fs.readFile('./books.json','utf8',function (err,data) {
    if(err || data.length === 0) data = '[]';
    callback(JSON.parse(data));
  })
}
function writeBooks(data,callback) {
  fs.writeFile('./books.json',JSON.stringify(data),callback)
}
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname,query);
    if(pathname === '/book'){
        let id = query.id;
        switch (req.method){
          case 'GET':
            if(id){
              readBooks(function (data) {
                var book = data.find(item=>item.id == id);
                res.end(JSON.stringify(book));
              });
            }else{
              readBooks(function (data) { //data代表所有图书
                res.end(JSON.stringify(data));
              });
            }
            break;
          case 'POST':
            var str = '';
            req.on('data',function (data) {
                str+=data;
            });
            req.on('end',function () {
                var book = JSON.parse(str);
                readBooks(function (books) {
                  book.id = books.length?books[books.length-1].id+1:1;
                  books.push(book);
                  writeBooks(books,function () {
                    //一般 添加成功后 返回添加的那一项
                    res.end(JSON.stringify(book));
                  })
                })
            });
            break;
          case 'PUT':
            var str = '';
            req.on('data',function (data) {
              str+=data;
            });
            req.on('end',function () {
              //book代表前台要我们改成这个结果
              var book = JSON.parse(str);
              readBooks(function (books) {
                books=books.map(item=>{
                  if(item.id==id){
                    return book;
                  }
                  return item;
                });
                writeBooks(books,function () {
                  //RESTFUL风格规定的
                  //修改成功后，返回修改的那一项
                  res.end(JSON.stringify(book));
                })
              });
            });

            break;
          case 'DELETE':
            readBooks(function (books) {
              books = books.filter(item=>item.id!=id);
              writeBooks(books,function () {
                //删除成功后返回 空对象
                res.end(JSON.stringify({}))
              })
            });
            break;
        }
    }else{
       res.statusCode = 404;
       res.end()
    }

}).listen(4000,function () {
  console.log('111111');
});
