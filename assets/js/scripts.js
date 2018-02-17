$( document ).ready(function() {


/* Sidebar Menu
------------------------------------------------ */

    $('.sidebar .nav > .has-sub > a').click(function() {
        var target = $(this).next('.sub-menu');
        var otherMenu = '.sidebar .nav > li.has-sub > .sub-menu';
    
        if ($('.page-sidebar-minified').length === 0) {
            $(otherMenu).not(target).slideUp(250, function() {
                $(this).closest('li').removeClass('expand');
            });
            $(target).slideToggle(250, function() {
                var targetLi = $(this).closest('li');
                if ($(targetLi).hasClass('expand')) {
                    $(targetLi).removeClass('expand');
                } else {
                    $(targetLi).addClass('expand');
                }
            });
        }
    });
    $('.sidebar .nav > .has-sub .sub-menu li.has-sub > a').click(function() {
        if ($('.page-sidebar-minified').length === 0) {
            var target = $(this).next('.sub-menu');
            $(target).slideToggle(250);
        }
    });



 /* Handle Sidebar - Minify / Expand
------------------------------------------------ */
$('[data-click=sidebar-minify]').click(function(e) {
        e.preventDefault();
        var sidebarClass = 'page-sidebar-minified';
        var targetContainer = '#page-container';
        
        if ($(targetContainer).hasClass(sidebarClass)) {
            $(targetContainer).removeClass(sidebarClass);
            
        } else {
            $(targetContainer).addClass(sidebarClass);
    
            
        }
        
    });



    /* Handle Sidebar - Mobile View Toggle
------------------------------------------------ */

    $('.sidebar').bind('click touchstart', function(e) {
        if ($(e.target).closest('.sidebar').length !== 0) {
            sidebarProgress = true;
        } else {
            sidebarProgress = false;
            e.stopPropagation();
        }
    });
    
    $(document).bind('click touchstart', function(e) {
        if ($(e.target).closest('.sidebar').length === 0) {
            sidebarProgress = false;
        }
        if (!e.isPropagationStopped() && sidebarProgress !== true) {
            if ($('#page-container').hasClass('page-sidebar-toggled')) {
                sidebarProgress = true;
                $('#page-container').removeClass('page-sidebar-toggled');
            }
            
        }
    });
    
        
    $('[data-click=sidebar-toggled]').click(function(e) {
        e.stopPropagation();
        var sidebarClass = 'page-sidebar-toggled';
        var targetContainer = '#page-container';

        if ($(targetContainer).hasClass(sidebarClass)) {
            $(targetContainer).removeClass(sidebarClass);
        } else if (sidebarProgress !== true) {
            $(targetContainer).addClass(sidebarClass);
        } else {
            sidebarProgress = false;
        }
        
    });

    $(function() {

            var start = moment().subtract(29, 'days');
            var end = moment();

            function cb(start, end) {
                $('#default-daterange input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }

            $('#default-daterange').daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);

            cb(start, end);
            
        });

        $(function() {

            $('#jobstart-date').datepicker({todayHighlight: true});
            $('#timerecord-date').datepicker({todayHighlight: true});
            $('#newtask-start-date').datepicker({todayHighlight: true});
            $('#newtask-due-date').datepicker({todayHighlight: true});
            $('#newsection-start-date').datepicker({todayHighlight: true});
            $('#newsection-due-date').datepicker({todayHighlight: true});
            $('#next-job-due-date').datepicker({todayHighlight: true});
            $('#daily-job-end-date').datepicker({todayHighlight: true});
            $('#weekly-job-end-date').datepicker({todayHighlight: true});
            $('#monthly-job-end-date').datepicker({todayHighlight: true});
            $('#yearly-job-end-date').datepicker({todayHighlight: true});
            
            


            
        });

        $(function() {

            $('#jobend-date').datepicker({
            todayHighlight: true
            });
            
        });

        $(function() {
            var $select = $('#select-billing-model'),
                $panels =  $('#billing .form-panel');
            
            $panels.hide();
          
            $select.on('change', function() {
              var value = '#' + $(this).val();
              $panels.show().not(value).hide();
            });
          });

          $(function() {
            var $select = $('#select-repeat-schedule'),
                $panels =  $('#scheduling .form-panel');
            
            $panels.hide();
          
            $select.on('change', function() {
              var value = '#' + $(this).val();
              $panels.show().not(value).hide();
            });
          });

          $(function() {
            var $select = $('#select-hourly-rate');
            $('#job-hourly-rate').hide();
          
            $select.on('change', function() {
              var value = '#' + $(this).val();
              $('#job-hourly-rate').show().not(value).hide();
            });
          });


        $('.pagelist-header-link').click(function() {

            if ($(this).hasClass("sorted")) {
                $(this).children('i').toggleClass('cpa-icon-downtriangle cpa-icon-uptriangle');
            } else {
               $('.pagelist-header-link').removeClass('sorted').children('i').removeClass('cpa-icon-uptriangle').addClass('cpa-icon-downtriangle');
                $(this).addClass('sorted');
            }

       });

       $('.btn-toggle-filter').click(function() {
            var icon = $(this).find("i");
            icon.toggleClass('cpa-icon-filtershow cpa-icon-filterhide');
            
            $(this).children('span').text(function(i, text){
            return text === "Show Filter" ? "Hide Filter" : "Show Filter";
            });
        });

        $('.btn-toggle-address-details').click(function() {
            $(this).children('span').text(function(i, text){
            return text === "+ Add Address" ? "- Hide Address" : "+ Add Address";
            });
        });

        $('.btn-toggle-activation').click(function() {
                        
            $(this).children('span').text(function(i, text){
            return text === "Activate" ? "Deactivate" : "Activate";
            });
        });

        $('.checklist .select-all input, .checklist a.select-all').click(function () {
            $(this).parents(".form-group").siblings().find(".checkbox:first-child input").prop('checked', $(this).prop('checked')).trigger('change');
        });

        $(".checklist .checkbox:first-child input").change(function(){
            if (!$(this).prop("checked")){
                $(this).parents(".form-group").siblings().find(".select-all input").prop("checked",false);
            }
        });



        $('.checklist .checkbox:first-child input').change(function() {
            $(this).parents('.form-group').toggleClass('selected');
        });

        $('.group-caption').click(function() {
            $(this).find("i").toggleClass('cpa-icon-downtriangle cpa-icon-uptriangle');
        });

        $('.checklist a.select-all').click(function () {
            $(this).parents(".checklist").children(".form-group").find(".checkbox input").prop("checked",true);
            $(this).parents(".checklist").children(".form-group").find(".checkbox input:disabled").prop("checked",false);
        });

        $('.checklist a.deselect-all').click(function () {
            $(this).parents(".checklist").children(".form-group").find(".checkbox input").prop("checked",false);
        });

        $('.tagit-actions span').click(function () {            
            var clickedRecepient = $(this).attr('class');
            $(this).parents("fieldset").addClass(clickedRecepient);
        });

        $('.dismiss-file').click(function () {            
            var clickedRecepient = $(this).parents(".progress");
            clickedRecepient.hide('middle');
        });

        $("#file-upload-progress").on("show.bs.collapse", function(){
            $(".dz-message.needsclick").html('Uploading files...');
          });

        $("#file-upload-progress").on("hide.bs.collapse", function(){
        $(".dz-message.needsclick").html('Drop files here or click to upload');
        });

    
   
    
});









