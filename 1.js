
var MyXMLHttpRequest = function(){

    var xmlHttpRequest;

    

    if(window.XMLHttpRequest){

        xmlHttpRequest = new XMLHttpRequest();

        if(xmlHttpRequest.overrideMimeType){

           xmlHttpRequest.overrideMimeType("text/xml"); 

        }

    }else if(window.ActiveXObject){

        var activeXName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"]

        for(var i = 0; activeXName.length > i ; i++){

            try{

                xmlHttpRequest = new ActiveXObject(activeXName[i]);

                break;

            }catch(e){

                

            }      

        }

    }

    if(xmlHttpRequest == null || xmlHttpRequest ==undefined){

        alert("xmlHttpRequest fail to craete object!");

   }else{

       this.xmlhttp = xmlHttpRequest;

   }

    

}


MyXMLHttpRequest.prototype.send = function(method,url,data,callback,failback){

  

    if(this.xmlhttp != null && this.xmlhttp != undefined){

    
       method = method.toUpperCase();

       if(method != "POST" && method != "GET"){

           alert("way to interviwe,must POST or GET");

       }

       
       if(url == null || url == undefined){

           alert("must give url");

       }

       
       var tempXMLHttp = this.xmlhttp;

       
       this.xmlhttp.onreadystatechange = function(){

          

           if(tempXMLHttp.readyState == 4){  

               if(tempXMLHttp.status == 200){

                   var responseText = tempXMLHttp.responseText;

                   var responseXML = tempXMLHttp.responseXML;

                  

                   if(callback == null || callback == undefined){

                       alert("false way to callback");

                       alert("返回的数据:" + responseText);

                   }else{

                       callback(responseText,responseXML);

                   }

                   

               }else{

                   
                   if(failback == null || failback == undefined){

                       alert("false way to callback");

                       alert("http的响应码:" + tempXMLHttp.status + "file massage：" + tempXMLHttp.statusText);

                   }else{

                       failback(tempXMLHttp.status,tempXMLHttp.statusText);

                   }

               }

           }

       }

 

       this.xmlhttp.open(method,url,true)

      

       if(method == "POST"){

           this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

       }

       

       this.xmlhttp.send(data);

    }else{

        alert("XMLHttpRequest fail to create object!");

    }

        

}



MyXMLHttpRequest.prototype.abort= function(){

    this.xmlhttp.abort();
}
