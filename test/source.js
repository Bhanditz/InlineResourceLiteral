var css_resource = RESOURCE_TEST_CSS;
var html_resource = RESOURCE_TEST_HTML;
var js_resource = RESOURCE_TEST_JS;
var json_resource = RESOURCE_TEST_JSON;

var css_computed_resource = RESOURCE_ARGS("TEST_PRECOMPUTED_CSS", "WIDTH", window.innerWidth, "HEIGHT", window.innerHeight);
var html_computed_resource = RESOURCE_ARGS("TEST_PRECOMPUTED_HTML", "TITLE", "title", "VALUE", Math.random());
var js_computed_resource = RESOURCE_ARGS("TEST_PRECOMPUTED_JS", "OBJECT", initial_settings);

var non_existing_resource = RESOURCE_NONEXISTENT;

var js_resource_buffer = RESOURCE_TEST_JS_BUFFER;
var js_computed_resource_buffer = RESOURCE_ARGS("TEST_PRECOMPUTED_JS_BUFFER", "KEY", "1");
