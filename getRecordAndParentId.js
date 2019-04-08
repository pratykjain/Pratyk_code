== Get Ids for record and parent ===


<lightning:workspaceAPI aura:id=“workspace” />


==ON controller==

var workspaceAPI = component.find(“workspace”);

  var workspaceAPI = component.find("workspace");
  workspaceAPI.getAllTabInfo()
              .then(function(tabs){
                    let topTab;
                    tabs.forEach( function( thisTab ) {
                        let subTabs = thisTab.subtabs;
                        if ( subTabs[1] != undefined ) {
                            // current cmp

                            recordId = subTabs[1].pageReference.attributes.recordId;
                        }
                        if ( thisTab.focused ) {
                            // Parent
                            topTab = thisTab;
                        }
                    });