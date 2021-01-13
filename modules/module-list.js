(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        "management":{
            url:$H+"/panels/management.html",
            description:"panel"
        },
        "volunteer-data":{
            title:'Volunteer records',
            url:$H+"/volunteers/record/data.html",
            Table:"volunteer",
            form_module:"volunteer-form", 
            description:"Volunteer data",
            
            notes_module:prefix+'volunteer-notes-data',
            notes_table:"volunteer-notes",
        },
        "volunteer-view-project-1":{
            title:'Volunteer for project 1',
            url:$H+"/volunteers/record/view-project-1.html",
            Table:"volunteer-project-1",
            form_module:"volunteer-form", 
            description:"Volunteer data",
            
            notes_module:prefix+'volunteer-notes-data',
            notes_table:"volunteer-notes",
        },
        "volunteer-form":{
            title:'Volunteer form',
            url:$H+"/volunteers/record/form.html",
            Table:"volunteer",
            description:"Volunteer form",
            router:1,
        },
        "volunteer-notes-data":{
            url:$H+"/volunteers/notes/data.html",
            Table:"volunteer-notes",
            form_module:"volunteer-notes-form", 
            parent_table:"volunteer",
            description:"Communal ordering data"
        },
        "volunteer-notes-form":{
            url:$H+"/volunteers/notes/form.html",
            Table:"volunteer-notes",
            parent_table:"volunteer",
            description:"Communal ordering form",
        },
        "volunteer-diagram":{
            title:'Volunteer diagram',
            url:$H+"/volunteers/diagram/diagram.html",
            description:"Volunteer diagram",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
