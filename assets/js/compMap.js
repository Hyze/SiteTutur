$(document).ready(init);

function init() {





    if($('title').attr('class') == 'P')
    {
        var map =  new GMaps({
            div: '#map',
            lat: 44.828637,
            lng:  -0.553561
        });

        map.addMarker({
            lat: 44.828637,
            lng:  -0.553561,
            title: 'La Plage le club',
            click: function(e) {
                alert('La Plage le Club');
            }
        });
        var max_width = $("#horizontal-scroll").css('max-width');
        $('#map').css('width : max_width');
    }

    if($('title').attr('class') == 'I')
    {
        var map =  new GMaps({
            div: '#map',
            lat:  44.864913,
            lng:  -0.557312
        });

        map.addMarker({
            lat: 44.864913,
            lng: -0.557312,
            title: 'IBOAT',
            click: function(e) {
                alert('IBOAT');
            }
        });
        var max_width = $("#horizontal-scroll").css('max-width');
        $('#map').css('width : max_width');
    }


    if($('title').attr('class') == 'M')
    {
        var map =  new GMaps({
            div: '#map',
            lat:  44.843726,
            lng:  -0.574151
        });

        map.addMarker({
            lat:44.843726,
            lng: -0.574151,
            title: 'Le Monseigneur',
            click: function(e) {
                alert('Le Monseigneur');
            }
        });
        var max_width = $("#horizontal-scroll").css('max-width');
        $('#map').css('width : max_width');
    }




}

