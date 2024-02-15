let nature=[];
$(".add").click(function() {
 var more=$(".picture-url").val();   
 nature.push(more);   
 $(".gallery").append("<img src='"+more+"'>");
 $(".picture-url").val("");
});