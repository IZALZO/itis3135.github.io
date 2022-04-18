$(document).ready(function() {
	$("#nav_list li").click(function(){
        $.ajax({
            url:"json_files/" + $(this).children("a").attr("title") + ".json",
            dataType:"json",
            beforeSend: function() 
            {
                $("#speakers").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) 
            {
                alert("Error: " + xhr.status + " - " + error);
            },
            success: function(data)
            {
                $.each(data, function()
                {
                    $.each(this, function(key, value)
                    {
                        $("main h2").html(value.month),
                        $("main h1").html(value.title),
                        $("main h3").html(value.speaker),
                        $("main img").attr("src", value.image),
                        $("main p").html(value.text)
                    })
                })
            }
        });
    });
}); // end ready
