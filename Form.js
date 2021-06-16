let http = require('http');
let fs = require('fs');
let formidable = require('formidable');

http.createServer((req,res) =>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action = "biodata" method ="post" enctype= "multipart/form-data">');
        res.write('<h1>User Details</h1>');
        res.write('Name <input type ="text" name "username"> <br>');
        res.write('D.O.B <input type ="date" name "dob"> <br>');
        res.write('Qualification <input type ="text" name "qualifi" <br>');
        res.write('Email id <input type ="email" name "gm"> <br>');
        res.write('Phone Number <input type ="text" name "pno"> <br>');
        res.write('Upload Your Resume <input type ="file" name "uploadfile"> <br>');
        res.write('<input type = "submit">')
        res.end();
    }
    else if(req.url=='/biodata'){ 
        let form = formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name:'+ fields.username + '</h1>');
            res.write('<h1>D.O.B:'+ fields.dob + '</h1>');
            res.write('<h1>Qualification:'+ fields.qualifi + '</h1>');
            res.write('<h1>Email id:'+ fields.gm + '</h1>');
            res.write('<h1>Phone Number:'+ fields.pno + '</h1>');
             
             let newpath = 'F:/Web Dev/Practice/NodeJs Practice/P-6 (Form Submit)' + "FormData";
             fs.rename(oldpath,newpath,(err) => {
                if(err) throw err;
                res.write('<h1>Your File Location</h1><br>')
                res.write('<h1>Old path:' + oldpath + '</h1><br>')
                res.write('<h1>New path:' + newpath + '</h1><br>')
                res.end("<h1>Thanks You Friend Your Form Submitted</h1>")
            })
        })
    }
    else{
        res.end("<h1>404 Page Not</h1>")
    }
}).listen(3000);