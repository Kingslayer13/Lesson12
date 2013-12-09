/**
 * Created by оо on 09.12.13.
 */
require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: "http://code.jquery.com/jquery-1.10.1.min"
    }
});

require(['jquery'], function( jq ) {
    console.log( jq ) // OK
});