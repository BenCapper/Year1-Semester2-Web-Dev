function toggleArrow('className', 'id1', 'id2', 'click') {
$(className).hide();
$(id1).hide();
$(id1).on(click,function(){
$(className).toggle();
$(id1).hide();
$(id2).show();
});
$(id2).on(click,function(){
$(className).toggle();
$(id2').hide();
$(id1).show();
});
}