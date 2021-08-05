var request=new XMLHttpRequest();
request.open('GET','https://api.covid19api.com/countries',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<10;i++){
        console.log(data[i].global);
        
    }
}
    
    
