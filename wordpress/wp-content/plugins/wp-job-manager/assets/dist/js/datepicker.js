jQuery(document).ready((function(){var e={altFormat:"yy-mm-dd"};"undefined"!=typeof job_manager_datepicker&&(e.dateFormat=job_manager_datepicker.date_format);var a=function(a){var t=jQuery(a),n=jQuery("<input />",{type:"hidden",name:t.attr("name")}).insertAfter(t);if(t.attr("name",t.attr("name")+"-datepicker"),t.on("keyup",(function(){""===t.val()&&n.val("")})),t.datepicker(jQuery.extend({},e,{altField:n})),t.val()){var r=t.val().split("-");if(3===r.length){var i=new Date(parseInt(r[0],10),parseInt(r[1],10)-1,parseInt(r[2],10));t.datepicker("setDate",i)}}};jQuery("input.job-manager-datepicker, input#_job_expires").each((function(){a(this)})),jQuery(document).on("wpJobManagerFieldAdded",(function(e){a(e.target)}))}));