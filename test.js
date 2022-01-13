<head>
    <script src="jquery-3.5.1.min.js"></script>
</head>
$(document).ready(function(){
    $("#newButton").mouseover(function(){
        $("#newButton").css("background-color", "#737373");
    })
    $("#newButton").mouseout(function(){
        $("#newButton").css("background-color", "#595959");
    })
})
