function initializeDialogs () {
	//Define the dialog for Import XDI
    $('#import-dialog').dialog({
        autoOpen: false,
        height: 600,
        width: 600,
        modal: true,
        buttons: {
            "Graph it!": function() {
                var importedXDI = $('#XDIsource').val();
                var willClearGraph = $('#clearGraphCheckBox').prop('checked');
                var willJoinGraph = $('#joinGraphCheckBox').prop('checked');
                $(this).dialog('close')
                isDialogVisible = false;
                if(!_.isEmpty(importedXDI))
                    initializeGraphWithXDI(importedXDI,willClearGraph,willJoinGraph);
            },
            Cancel: function() {
                $(this).dialog('close')
                isDialogVisible = false; 
            }
        },
    });

    $( "#error-dialog" ).dialog({
      resizable: false,
      autoOpen: false,
      height:340,
      width:600,
      modal: true,
      buttons: {
        "Go to XDI Converter": function() {
          $( this ).dialog( "close" );
          window.open('http://xdi2.projectdanube.org/XDIConverter', '_blank');
          isDialogVisible = false;
        },
        Cancel: function() {
          $( this ).dialog( "close" );
          isDialogVisible = false;
        }
      }
    });
}

function openImportDialog () {
	isDialogVisible = true;
    $('#import-dialog').dialog("open");
}

function openErrorDialog (content, linenum) {
	isDialogVisible = true;
  $('#error-dialog #error-line-num').text(linenum+1);
  $('#error-dialog #error-line-content').text(content);
  $('#error-dialog').dialog("open");	
}