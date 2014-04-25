function initialise_document_ready_functions()
{
var section_wrappers = get_all_section_wrappers_in_page();
var amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height());
update_active_sections_on_scroll(section_wrappers, amount_of_pixels_as_buffer_between_sections);
sections_content_vertical_position();
initialise_general_links_click_events();
initialise_main_menu_click_events();
effect_fade_out_inactive_grid_items(); 
set_height_of_parent_content_wrappers();
$('#features-carousel').carousel({
interval: 6000
})
validate_and_submit_forms();
$(window).resize(function()
{
amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height());
if (!jQuery.browser.mobile) sections_content_vertical_position();
main_menu_visiblity_on_resize();
set_equal_height_to_all_carousel_slides_on_small_displays();
position_modal_at_centre();
});
$(window).scroll(function()
{ 
if (!$("#main-content").hasClass("same_page_link_in_action") && !jQuery.browser.mobile )
{
update_active_sections_on_scroll(section_wrappers, amount_of_pixels_as_buffer_between_sections);
}
go_to_top_visibility();
});
}
$(document).ready(function()
{
initialise_document_ready_functions();
});
function initialise_window_load_functions()
{
amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height());
set_equal_height_to_all_carousel_slides_on_small_displays();
if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) sections_content_vertical_position();
if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) preload_section_backgrounds();
if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) add_clear_items_to_fix_grid_items_different_heights_issue();
load_images("lazy", true, true);
}
$(window).load(function()
{
initialise_window_load_functions();
});