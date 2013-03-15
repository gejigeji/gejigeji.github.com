var trans = 1;

$(document).ready(function() {
    $(".one").mouseover(function() {
        $(".one").fadeTo(250,0);
    });
    $(".one").mouseleave(function() {
        $(".one").fadeTo(250,1);
    });

    $(".two").mouseover(function() {
        $(".two").fadeTo(250,0);
    });
    $(".two").mouseleave(function() {
        $(".two").fadeTo(250,1);
    });

    $(".three").mouseover(function() {
        $(".three").fadeTo(250,0);
    });
    $(".three").mouseleave(function() {
        $(".three").fadeTo(250,1);
    });

    $(".four").mouseover(function() {
        $(".four").fadeTo(250,1);
    });
    $(".four").mouseleave(function() {
        $(".four").fadeTo(250,1);
    });


    $(".white_one").fadeTo(1,0);
    $(".white_two").fadeTo(1,0);
    $(".white_three").fadeTo(1,0);
    $(".white_one").mouseover(function() {
        $(".white_one").fadeTo(200,1);
    });
    $(".white_one").mouseleave(function() {
        $(".white_one").fadeTo(200,0);
    });

    $(".white_two").mouseover(function() {
        $(".white_two").fadeTo(200,1);
    });
    $(".white_two").mouseleave(function() {
        $(".white_two").fadeTo(200,0);
    });

    $(".white_three").mouseover(function() {
        $(".white_three").fadeTo(200,1);
    });
    $(".white_three").mouseleave(function() {
        $(".white_three").fadeTo(200,0);
    });
});

