doInit : function(component, event, helper) {
		helper.getRecordType( component )
			  .then( function( data ) {
						helper.createRecord( component, event, data );
					 },
					 
					 function(error) {
			  		 	helper.raiseToast( event, error );
					});
	}