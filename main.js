var time;
var listImg = [];
var i=0;
listImg[0] = "images/img_1.jpg";
listImg[1] = "images/img_2.jpg";
listImg[2] = "images/img_3.jpg";
listImg[3] = "images/img_4.jpg";
listImg[4] = "images/img_5.jpg";

function Start(){
          i++;
          if(i>listImg.length-1){
                    i=0;
          }
          document.getElementById("img").src = listImg[i];
          time = setTimeout(Start,1500);
}
window.onload = function(){
         time = setTimeout(Start(),1000)
}
function Pause(){
          clearTimeout(time);
}
 
//check validate
var input = document.getElementsByClassName("input");
var notice = document.getElementsByClassName("notice");
var cost = document.get
//check to not empty
function CheckInput(){
          for(let i =0 ; i<input.length; i++){
                    if(input[i].value == ''){
                              notice[i].innerHTML = 'Không được để trống';
                    }else{
                              notice[i].innerHTML = '';
                    }
          }
}
//Lấy đơn hàng với loại giá
function ChangeCost(){
          var type = document.getElementById("kind-mechandise").value;
          var cost = document.getElementById("cost");

          if(type ==='Loại 1'){
                    cost.value = 20000;
          }
          if(type ==='Loại 2'){
                    cost.value = 40000;
          }
          if(type ==='Loại 3'){
                    cost.value = 60000;
          }

}
//Tính Tiền
function TotalCost(){
          var quantity = document.getElementById("quantity").value;
          var cost = document.getElementById('cost').value;
          var sum = document.getElementById("total");

          sum.value = cost *quantity;
}
//gia ship
function FeeShip(){
          var location = document.querySelectorAll('.location');
          var shipCost =0;
          for(let i =0; i<location.length; i++){
                              if(location[i].checked){
                                        if(location[i].value ==='Ngoại Thành'){
                                                  shipCost = 20000;
                                        }else{
                                                  shipCost = 0;
                                        }
                              }
          }
          document.getElementById('feeship').value = shipCost;

}