(function($) {
    $.fn.accordion = function(){
        var $this = $(this).find('._accordion');
        $this.find('>dt>a').click(function(e) {
            e.preventDefault();
            var $target =  $(this).parent().next();
            if(!$target.hasClass('current')){
                $this.find('>dd').removeClass('current');
                $target.addClass('current');
            }
            return false;
        });
    };
    $.fn.tabs = function(){
        var $this = $(this);
        $this.find("._tabs-menu a").on('click', function(e) {
            e.preventDefault();
            $this.find("._tabs-menu a").removeClass("current");
            $(this).addClass("current");
            var tab = $(this).attr("href");
            $this.find("._tab").removeClass('current');
            $(tab).addClass('current');
        });
    }
})(jQuery);
$(document).ready(function() {;
    $('.ipWidget-AccordionAndTabs.ipSkin-tabs').tabs();
    $('.ipWidget-AccordionAndTabs.ipSkin-default').accordion();
});