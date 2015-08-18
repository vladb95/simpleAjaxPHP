function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function sendResp() {
  var req = getXmlHttp();  
  req.onreadystatechange = function() {  
    if (req.readyState == 4) { 
      if(req.status == 200) { 
        alert("Ответ сервера: "+req.responseText);
      }
    }
  }
  req.open('POST', 'serverside.php', true);  
  req.send("ajax_data=123456");
}
