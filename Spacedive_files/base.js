
function head(){
    $('head').append
    (
        `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="Space, Planets, Solar System">
        <meta name="description" content="A website about space" >
        <meta name="copyright" content="Polina Kuzmenok">
        <meta name="author" content="Polina Kuzmenok">
        <meta http-equiv="Content-language" CONTENT="en-GB">
        <link rel="icon" type="image/x-icon" href="Pictures/icons/icon_rocket.png">
        <noscript>
		    <style>.body_hide{opacity: 1 !important;}</style>
	    </noscript>`   
    )
}
setTimeout(function()
{
    $('body').addClass('body_visible');
}, 10);

$(window).on('load',head);
