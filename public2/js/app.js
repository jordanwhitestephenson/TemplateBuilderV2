// data[e.target.name] = $(e.target).val();
var collapseID
var modules = {
  module1: {
    data: {
      r_headerColor: '#444',
      r_headerSize: '30px',
      r_myText: 'Hello World',
      r_paragraphText: 'Paragraph Text',
      r_paragraphColor: '#444',
      r_paragraphSize: '15',
      r_imageSRC: 'images/205438_0EC_Crocband_Timeless_Clash_Clog_main.jpg',
      r_imageALT: 'alt tag',
      r_imageTitle: 'image title',
      r_imageLink: 'www.image.com',
      r_CTAtext: 'CTA 20PT BOLD',
      r_CTALink: 'www.google.com',
      r_CTAcolor: 'black',
      r_CTAcolorHover: 'red'
    },
    html: `
  <div class="module1 preview_container">
  <h2 class = "text-center module_headline"> MODULE 1 </h2>
    <form action="" class="module_1_form" method="post">
    <div class="form-group col-xs-6 col-sm-3">
    <label for="exampleFormControlSelect1">Position On Page</label>
    <select class="form-control js-getText position-dropdown template">
    <option>Select Position</option>
    <option selected = "selected">1st</option>
    <option>2nd</option>
    <option>3rd</option>
    <option>4th</option>
    </select>
    </div>
    <div class = "col-xs-12 header_form_container">
      <label for="InputH">Header Text</label>
      <input type="text" name="r_myText"  class = "js-getText" value=""><br>

      <label id="HeaderSize" for="InputheaderSize">Header Size</label>
      <input type="number" class = "js-getText" name="r_headerSize"><br>

      <label id="HeaderColor" for="headerColor">Header Color</label>
      <input type="color" name="r_headerColor"  class = "js-getText" value = ""><br>
      </div>
      <div class = "col-xs-12 image_form_container">
      <div>
      <label id="img" for="img_SRC">Image SRC</label>
      <input type="text" name="r_imageSRC" class = "js-getText" value=""><br>
      </div>
      <div>
      <label id="img" for="img_alt">Img Alt Tag</label>
      <input type="text" name="r_imageALT" class = "js-getText" value=""><br>
      </div>
      <div>
      <label id="img" for="img_title">Image Title</label>
      <input type="text" class = "js-getText" name="r_imageTitle" value=""><br>
      </div>
      <div>
      <label id="img" for="img_title">Image Link</label>
      <input type="text" class = "js-getText" name="r_imageLink" value=""><br>
      </div>
</div>
<div class = "para_form_container col-xs-12">
      <div class = " flex_box_column">
      <label for="paragraphText">Paragraph Text</label>
      <textarea type="text" name="r_paragraphText" class = "js-getText" value=""></textarea><br>
      </div>
      <div class = "">
      <label for="paragraphColor">Paragraph Color</label>
      <input type="color" class = "js-getText" name="r_paragraphColor" value=""><br>
      </div>
      <div class= "">
      <label for="paragraphSize">Paragraph Size</label>
      <input type="number" class = "js-getText" name="r_paragraphSize" value=""><br>
      </div>
  </div>
      <div class = "cta_form_container col-xs-12">
      <div>
      <label for="ctaText">CTA TEXT</label>
      <input type="text" class = "js-getText" name="r_CTAtext" value=""><br>
      </div>
      <div>
      <label for="ctaLink">CTA LINK</label>
      <input type="text" class = "js-getText" name="r_CTALink" value=""><br>
      </div>
      <div>
      <label for="ctaColor">CTA Default Color</label>
      <input type="color" class = "js-getText" name="r_CTAcolor" value=""><br>
      </div>
      <div>
      <label for="ctaHover">CTA Hover Color</label>
      <input type="color" class = "js-getText" name="r_CTAcolorHover" value=""><br>
      </div>
      </div>
    </form>
    <div class = "button_container">
    <button type="button" data-toggle="modal"  data-target="#exampleModalModule1" onClick= "exampleModule1()" class="btn btn-link">EXAMPLE</button>
    <a class="btn btn-link collapse_ahref" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
    PREVIEW MODULE
    </a>
    <button class="btn btn-link save_button " type="button" aria-haspopup="true" aria-expanded="false">SAVE</button>
    </div>

    <div class = "module_preview">
    <div class="collapse" id="">
    <div class="card card-body template">
    <section class="module1_mock cs_container-fluid  module_container">
      <a href = "r_imageLink" class="product_container col-sm-6">
        <img src="r_imageSRC" alt = "r_imageALT" title = "r_imageTitle" class="mobile1IMG img-responsive" />
      </a>
      <div class="col-sm-6 flex_box_column">
        <div class="text_container">
          <h1 class="cx-heavy-brand-font text-center text-uppercase headerTextPreview" style = "text-size: r_headerSizepx; color: r_headerColor;  " >r_myText</h1>
          <p class="cx-brand-font text-center" style = "color: r_paragraphColor; font-size: r_paragraphSizepx">r_paragraphText</p>
          <div class="col-xs-12 flex_box_column " style="">
            <div class="col-xs-11 col-sm-12 col-md-12 col-lg-12 ">
              <a href="r_CTALink" class=" cx-button full-width cx-heavy-brand-font text-uppercase text-center">r_CTAtext</a></div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  </div>

  </div>`
  },
  module2: {
    data: {
      r_myClass: 'red',
      r_myStyle: '30px',
      r_myText: 'Hello World'
    },
    html: `<div class="module2">
            <h2 class="module_2_form toggle">MODULE 2</h2>
            <div class="form-group">
            <label for="exampleFormControlSelect1">Position On Page</label>
                <select  class="form-control template">
                <option>Select Position</option>
                <option>1st</option>
                <option selected = "selected">2nd</option>
                  <option>3rd</option>
                <option>4th</option>
                  </select>
              </div>
              <label for="headerText">Module 2 H3 Text</label>
              <input type="text" name="headerText" value=""><br>
              <label id="HeaderSize" for="headersize">Header Size (Default 35px)</label>
              <input type="number" name="headersize"  value="42px"><br>
              <label id="img" for="img">Upload Image</label>
              <input type="text" name="imgLink" value=""><br>
              <input type="file" name="img" id="img" value=""><br>
              <label id="HeaderSize" for="headersize">H4 Body Copy</label>
              <input type="text" name="h4BodyCopy" id="" value="42px"><br>
              <label for="paragraphText">Paragraph Text</label>
              <textarea type="text" name="paragraphText"value=""></textarea><br>
              <label for="ctaText">CTA TEXT</label>
              <input type="text" name="ctaText"  value=""><br>
              <label for="ctaLink">CTA LINK</label>
              <input type="text" name="ctaLink" value=""><br>
              <div class = "button_container">
              <button type="button" data-toggle="modal" data-target="#exampleModalModule2" onClick= "exampleModule2()" class="btn btn-link">EXAMPLE</button>
              <a class="btn btn-link collapse_ahref" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              PREVIEW MODULE
              </a>
              <div class =  "saved_button_class">
              <button class="btn btn-secondary save_button" type="button" aria-haspopup="true" aria-expanded="false">SAVE MODULE 2</button>
              </div>
            </div>
            <div class="collapse" id="collapseExample2">
            <div class="card card-body template">
            <section class="module2_mock module_container cs_container-crocs">
              <div class="header_subhead_container flex_box_column">
                <h2 class="text-center cx-heavy-brand-font text-uppercase">H2 - (35pt) EXTRABOLD</h2>
                <p class="text-center cx-brand-font subhead-text">
                  H6 - (18pt Regular) - Subhead
                </p>
              </div>
              <div class="flex_box_row">
                <div class="product_container col-sm-6">
                  <img src="images/diipakhosla_2018-04-10_2618590602.jpg" class="img-responsive" />
                </div>
                <div class="text_container module_two_text_container col-sm-6 col-md-pull-1">
                  <h4 class="cx-heavy-brand-font text-center">H4 - (20pt) Bold - Body Copy Header </h4>
                  <p class="cx-brand-font text-center"> Body copy 18pt/20pt Proxima Nova Regular. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore.</p>
                  <div class="col-xs-12 flex_box_column " style="">
                    <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10">
                      <a href="" class=" cx-button full-width cx-heavy-brand-font text-uppercase text-center">cta 20pt extrabold</a></div>
                  </div>
                </div>
              </div>
            </section>
              </div>
            </div>
            </div>`

  }
};

function getAccordianHTML(accordianID, labelID) {

  return `<nav class="accordion arrows" data-id = "${labelID}">
  <input type="radio" id = "${labelID}" name="accordion"/>
  <section class="box"  id= "${accordionID}">
    <label class="box-title" for="${labelID}">
     <div class="dropdown" >
        <select class = "select" name="dropdown" >
          <option class="dropdown-item" value = "blank" >Choose Module</option>
          <option class="dropdown-item" value = "module1" >MODULE 1</option>
          <option class="dropdown-item" value = "module2" >MODULE 2</option>
          <option class="dropdown-item" value = "module3" >MODULE 3</option>
          </select>
      </div>
      <button class="btn btn-secondary delete_button" type="button"  aria-haspopup="true" aria-expanded="false">DELETE</button>
      </label>
    <label class="box-close" for="acc-close"></label>
    <div class="box-content accordion_container"></div>
  </section>
  <input type="radio" class="radio" name="accordion" id="acc-close" />
</nav>`;
}

$(document).ready(function() {
  var labelID

  var app = {
    modules: modules,
    utils: {
      allCaps: function() {}
    },
    init: function() {
      app.addModule();
      app.getTabs();
    },

    getTabs: function() {
      $(".html_container").hide()
      $(".view_container").hide()
      $(".create_container").show()
      $('#create').on('click', function() {
        $("#preview").removeClass('active')
        $("#html").removeClass('active')
        $("#create").addClass('active')
        $(".html_container").hide()
        $(".view_container").hide()
        $(".create_container").show()
      })
      $('#html').on('click', function() {
        $(".create_container").hide()
        $(".html_container").show()
        $(".view_container").hide()
        $("#create").removeClass('active')
        $("#preview").removeClass('active')
        $("#html").addClass('active')

      })
      $('#preview').on('click', function() {
        $(".create_container").hide()
        $(".html_container").hide()
        $(".view_container").show()
        $("#create").removeClass('active')
        $("#html").removeClass('active')
        $("#preview").addClass('active')
      })
    },
    addModule: function() {
      var i = 0;
      $('#addButton').on('click', function() {
        i = i + 1
        accordionID = `cb${i}`
        labelID = `label${i}`
        // is labelID necessary?
        $(".create_container").append(getAccordianHTML(accordionID, labelID));
        var thisDropDown = document.getElementsByClassName("box-title");
        var deleteButton = document.getElementsByClassName('delete_button')
        dropDownChange(thisDropDown)
        deleteThisModule(deleteButton)
      })
    },
    setModuleForm: function(e) {
      var moduleNumParents = $(e.target).parentsUntil('nav').find('select')
      var moduleNum = moduleNumParents[0].value
      var $moduleChooser = $(e.target).parentsUntil('nav').find('.accordion_container')
      var html = app.modules[moduleNum].html;
      var data = app.modules[moduleNum].data;
      $moduleChooser.html(html);

      //creating new matching id for collapse container
      var collapseContainer = $(e.target).parentsUntil('nav')[2].id
      var collapseContainerID = collapseContainer + Math.random().toFixed(0)
      $(e.target).parentsUntil('nav').find('.collapse_ahref').attr("href", "#" + collapseContainerID)
      $(e.target).parentsUntil('nav').find('.collapse').attr("id", collapseContainerID)
    },
    moduleFormValues: function(moduleInputValues) {
      var saveButton = document.getElementsByClassName('save_button')
      saveModule(saveButton)
      var selectedModule = $(moduleInputValues.target).parentsUntil('nav').find('select.select').val()
      var inputName = moduleInputValues.target.name
      var inputType = moduleInputValues.target.type
      var inputValue = moduleInputValues.target.value
      var data = app.modules[selectedModule].data;
      var $html = $(app.modules[selectedModule].html).find('.module_container');
      var htmlString = $html[0].outerHTML;
      // console.log(htmlString)
      var data = app.modules[selectedModule].data;
      data[inputName] = inputValue;
      for (k in data) {
        var re = new RegExp(k, 'g');
        htmlString = htmlString.replace(re, data[k]);
      }
      var $module_container = $(moduleInputValues.target).parentsUntil('nav').find('.template')
      $module_container.html(htmlString)
      retrieveHTML()
    }
  };

  Sortable.create(createContainerID, {
    group: {
      type: String,
      value: 'testing'
    },
    store: {
      // Sorting acquisition (called during initialization)
      get: function(sortable) {
        var order = localStorage.getItem(sortable.options.group.name);

        return order
          ? order.split('|')
          : [];

      },
      // Saving the acquired sorting (called each time upon sorting modification)
      set: function(sortable) {
        var order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, order.join('|'));
        console.log(order)

      }
    },
    draggable: '.accordion'
  });

  app.init();

  function retrieveHTML() {
    var allHTML = $('.module_container')[0].outerHTML
    console.log($('.module_container'))
     $('#box').val(allHTML)
  }

  function deleteThisModule(deleteButton) {
    for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener("click", deleteClick, false)
    }
  }

  function deleteClick(e) {
    var deleteTarget = $(e.target).parentsUntil('nav')
    deleteTarget.remove()
  }
  function saveModule(saveButton) {
    for (var k = 0; k < saveButton.length; k++) {
      saveButton[k].addEventListener("click", saveClick, false)
    }
  }


  function saveClick(e) {
    var saveHTML = $(e.target).parentsUntil('nav').find('.module_container').html()
    $(e.target).html("SAVED - EDIT HTML")

    $('#saveHTMLButton').on("click", function() {
      var htmlMarkUp = $('#box').val()
      $('.replace_html_here').html(htmlMarkUp)
    })
  }

  function dropDownChange(thisDropDown) {
    for (var i = 0; i < thisDropDown.length; i++) {
      thisDropDown[i].addEventListener("change", dropDownChangeEvent, false)
    }

  }

  function dropDownChangeEvent(e) {
    //deleting other options on dropdown//
    var dropDownModuleText = $(e.target).parentsUntil('nav').find('select')[0].value
    $(e.target).parentsUntil('nav').find('option').not(':selected').remove()
    app.setModuleForm(e);
    onTextChange(e) // e.target == module selector
  }

  function onTextChange(e) {
    var $formInputs = $(e.target).parentsUntil('nav').find('input')
    var $textInputs = $(e.target).parentsUntil('nav').find('textarea')
    for (var i = 0; i < $formInputs.length; i++) {
      $formInputs[i].addEventListener("change", getModuleText, false)
    }
    for (var i = 0; i < $textInputs.length; i++) {
      $textInputs[i].addEventListener("change", getModuleText, false)
    }
  }
  function getModuleText(ev) {
    $('.js-getText').off('change', app.moduleFormValues(ev));
    $('.js-getText').on('change', app.moduleFormValues(ev));
    // $('.js-getText').off('change', app.moduleFormValues());
    // app.moduleFormValues(moduleInputValues)
  }
});
