function exampleModule1() {
  var model = `<div class="modal" id="exampleModalModule1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog template" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">MODULE 1</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src = "images/module1.png" class = "img-responsive">
      </div>
    </div>
  </div>
</div>
`
  $('#modelContainer').append(model)
}

function exampleModule2() {
  var model = `<div class="modal" id="exampleModalModule2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog template" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">MODULE 2</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src = "images/module2.png" class = "img-responsive">
    </div>
  </div>
</div>
</div>
`
  $('#modelContainer').append(model)
}
function saveModulePopup() {
  var nullDivs = document.getElementsByClassName('delete_button')
  var model = `<div class="modal fade" id="savePopupCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`

  $('#modelContainer').append(model)
}

var toggleMenu = function() {
  $('.mousetrap').toggleClass('toggle');
  $('.main').toggleClass('push');
  $('.overlay').toggleClass('block');
  $('#social, .logo').toggleClass('reveal');
};

//Nav
$('#navSidebutton').click(function() {
  toggleMenu();
  console.log('mousetrap_overlay')
});

Mousetrap.bind('esc', function() {
  toggleMenu();
});
