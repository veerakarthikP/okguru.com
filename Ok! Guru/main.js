//'.....Open Video.........
viewVideo=function(path){
    document.getElementById('videoDiv').innerHTML='<video id="videoTag" width="320" height="240" controls autoplay> <source src="'+path+'" type="video/mp4"> Your browser does not support the video tag. </video>';
    document.getElementById('openModalBtn').click();
    document.getElementById('videoDiv').value;
} 

//'.....Close Video.........
pauseVideo= function(){
  document.getElementById('videoDiv').innerHTML="";
}