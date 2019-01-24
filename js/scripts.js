$(document).ready(function () {
	$('.nav-btn').click(function(){
		$('.nav-btn').toggleClass('close');
		$('.main-nav').toggleClass('open');
		
	});
});
window.onload = function() {
    window.dima = baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar'
    }).autoUpdate();

    $("#add_section").on("click", function(){
        $(".container .load").before($("#sample_template").text());
        // window.dima.update(); //You gonna need this for IE < 11
    })
    $("#remove_section").on("click", function(){
        $(".container .header:last").add(".container .header:last ~ .text").remove();
        // window.dima.update(); //You gonna need this for IE < 11
    });

    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom',
        clickable: true
    }).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        track: '.baron__track',
        forward: '.baron__down',
        backward: '.baron__up'
    })
}
audiojs.events.ready(function() {
    audiojs.createAll();
});