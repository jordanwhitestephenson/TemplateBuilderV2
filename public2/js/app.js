function getModule1() {
  return `<div class="module1">
  <h2 class = "text-center module_headline"> MODULE 1 </h2>
    <form action="" class="module_1_form" method="post">
    <div class="form-group col-xs-6 col-sm-3">
    <label for="exampleFormControlSelect1">Position On Page</label>
    <select class="form-control template">
    <option>Select Position</option>
    <option selected = "selected">1st</option>
    <option>2nd</option>
    <option>3rd</option>
    <option>4th</option>
    </select>
    </div>
    <div class = "col-xs-12 header_form_container">
      <label for="headerText">Header Text</label>
      <input type="text" name="headerText"  onChange = "retrieveText(this)" class = "headerText" value=""><br>
      <label id="HeaderSize" for="headersize">Header Size</label>
      <input type="number" name="headersize" onChange = "retrieveText(this)"  value="42px"><br>
      <label id="HeaderColor" for="headercolor">Header Color</label>
      <input type="color" name="headercolor" onChange = "retrieveText(this)" value = ""><br>
      </div>
<div class = "col-xs-12 image_form_container">
<div>
      <label id="img" for="img_SRC">Image SRC</label>
      <input type="text" name="img_SRC" onChange = "retrieveText(this)" value=""><br>
      </div>
      <div>
      <input type="file" name="img" id="img" value=""><br>
      </div>
      <div>
      <label id="img" for="img_alt">Img Alt Tag</label>
      <input type="text" name="img_alt" onChange = "retrieveText(this)" value=""><br>
      </div>
      <div>
      <label id="img" for="img_title">Image Title</label>
      <input type="text" onChange = "retrieveText(this)" name="img_title" value=""><br>
      </div>
</div>
<div class = "para_form_container col-xs-12">
      <label for="paragraphText">Paragraph Text</label>
      <textarea type="text" name="paragraphT" value=""></textarea><br>
  </div>
      <div class = "cta_form_container col-xs-12">
      <label for="ctaText">CTA TEXT</label>
      <input type="text" name="cta" value=""><br>
      <label for="ctaLink">CTA LINK</label>
      <input type="text" name="ct" value=""><br>
      <label for="ctaColor">CTA Default Color</label>
      <input type="color" name="ctaColor" value=""><br>
      <label for="ctaHover">CTA Hover Color</label>
      <input type="color" name="ctaHover" value=""><br>
      </div>
    </form>
    <div class = "button_container">
    <button type="button" data-toggle="modal"  data-target="#exampleModalModule1" onClick= "exampleModule1()" class="btn btn-link">EXAMPLE</button>
    <a class="btn btn-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    PREVIEW MODULE
    </a>
    <button class="btn btn-link save_button" type="button" aria-haspopup="true" aria-expanded="false">SAVE MODULE 1</button>
    </div>


    <div class="collapse" id="collapseExample">
    <div class="card card-body template">
    <section class="module1_mock cs_container-fluid  module_container">
      <div class="product_container col-sm-6">
        <img src="images/205438_0EC_Crocband_Timeless_Clash_Clog_main.jpg" alt = "" title = "" class="mobile1IMG img-responsive" />
      </div>
      <div class="col-sm-6 flex_box_column">
        <div class="text_container col-lg-10">
          <h1 class="cx-heavy-brand-font text-center text-uppercase headerTextPreview">H1 - (42pt) extrabold</h1>
          <p class="cx-brand-font text-center"> Body copy 18pt/20pt Proxima Nova Regular. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore.</p>
          <div class="col-xs-12 flex_box_column " style="">
            <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 ">
              <a href="" class=" cx-button full-width  cx-heavy-brand-font text-uppercase text-center">cta 20pt extrabold</a></div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  </div>`

}

function getModule2() {
  return `<div class="module2">
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
          <a class="btn btn-link" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
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

function getAccordianHTML(accordianID, labelID) {
  return `<nav class="accordion arrows">
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

function retrieveText(e) {
  var text = e.name
  var inputValue = e.value
  switch (text) {
    case "headerText":
      $('.headerTextPreview').text(inputValue)
      break;
    case "headersize":
      $('.headerTextPreview').css({
        "font-size": inputValue + 'px'
      })
      break;
    case "headercolor":
      $('.headerTextPreview').css({"color": inputValue});
      break;
    case "img_SRC":
      $('.mobile1IMG').attr("src", inputValue)
      break;
    case "img_alt":
      $('.mobile1IMG').attr("alt", inputValue)
      break;
  }

}

$(document).ready(function() {
  var labelID
  var thisAccordian

  var app = {
    modules: [],
    utils: {
      allCaps: function() {}
    },
    init: function() {
      app.addModule();
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
        var saveButton = document.getElementsByClassName('save_button')
        dropDownChange(thisDropDown)
        deleteThisModule(deleteButton)
        saveModule(saveButton)
      })
    }
  };

  app.init();

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
    for (var i = 0; i < saveButton.length; i++) {
      saveButton[i].addEventListener("click", saveClick, false)
    }

  }
  function saveClick(e) {
        console.log('saveButton')
    var saveTarget = $(e.target).parentsUntil('nav').htmlButton
    console.log(saveTarget)
  }

  function dropDownChange(thisDropDown) {
    for (var i = 0; i < thisDropDown.length; i++) {
      thisDropDown[i].addEventListener("change", dropDownChangeEvent, false)
    }
  }


  function dropDownChangeEvent(e) {
    var selectedValue = e.target.value
    var moduleBarTarget = $(e.target).parentsUntil('nav')
    var moduleBarID = moduleBarTarget[2].id
    var $moduleChooser = null;
    var moduleHTML = '';
    switch (selectedValue) {
      case "module1":
        $moduleChooser = $(document.getElementById(moduleBarID)).find('.accordion_container')
        moduleHTML = getModule1();
        break;
      case "module2":
        $moduleChooser = $(document.getElementById(moduleBarID)).find('.accordion_container')
        moduleHTML = getModule2();
        break;
      default:
        $moduleChooser = $(document.getElementById(moduleBarID)).find('.accordion_container')
        moduleHML = ''
    }
    $moduleChooser.html(moduleHTML);
    // retrieveText()
  }

});

// div.addEventListener("click", function() {
//   var editHTML = $('textarea#box:input').val();
//   if (this.innerText == curText) {
//     div.innerText = "SAVED";
//     $('.replace_html_here').html('<div>' + editHTML + '</div>')
//   } else {
//     div.innerText = curText;
//     $(".replace_html_here").replaceWith(divClone.clone());
//   }
// }, false);

//
// function test({sku : 1,size : 'lg'}){
//   if(arguments.sku){
//
//   }
// }

// function test(one, two){
//   arguments.one
// }

// function dropDownChange(selectedModule) {
// var dropDownID = selectedModule.target.id
// var dropdown = document.getElementById(dropDownID.toString())
// var module1
// var module2
// if (dropdown) {
//   saveButtonID = `saveButton${i}`
//   headerSizeID = `headerTextSize${i}`
//   imageSRCid = `imgLink${i}`
//   paraText = `paraText${i}`
//   ctaText = `ctaText${i}`
//   ctaLink = `ctaText${i}`
//    dropdown.addEventListener('change', dropDownChange, false)
//   $(this).off(event)
//   var selectedValue = $("#" + dropDownID).val()

// switch (selectedValue) {
//   case "module1":
//     var $moduleChooser = $(document.getElementById(dropDownID.toString()));
//     var $chooserContainer = $moduleChooser.find('.accordion_container');
//     $chooserContainer.html('');
//     $chooserContainer.append(module1);
//     break;
//
//   case "module2":
//     $(".module1").remove();
//      $(".module2").remove();
//
//   default:
// }
//
// var selectedPostion
//
// $("[id^='positionID']").on("change", dropDownPositionChange);

// function dropDownPositionChange(selectedObject) {
//   var select = document.getElementById(`${positionID.toString()}`);
//   if (select) {
//     select.addEventListener('change', dropDownPositionChange, false)
//     $("[id^='positionID'] option:selected").each(function(input) {
//       selectedPostion = $(this).val();
//     });
//   }
// }
// $('.saveButton').on("click", function(e) {
//   e.target
//
//   $("[id^='positionID'] option:selected").each(function(i) {
//     var $this = $(this);
//     selectedPostion = $this.text()
//   });
//   console.log(selectedPostion)
//   var innerButtonText
//   var headerText = $('#' + headerTextID).val()
//   var imgUploadSRC = $("input[type=file][name=img]").val()
//   var imgSRC = $('#' + imageSRCid).val()
//   var paraTextSRC = $('#' + paraText).val()
//   var ctaTextSRC = $('#' + ctaText).val()
//   var ctaLinkSRC = $('#' + ctaLink).val()
//   var headerTextSizeSRC = `${$('#' + headerSizeID).val()}px`
var resultingBody

// switch (selectedValue) {
//   case "module1":
//     resultingBODY = `<div class="module1 col-sm-6 ">
//     <img class = "img-responsive" id="viewImg" src="${imgSRC}" />
//     </div>
//     <div class="col-sm-6 flex_box_column">
//       <h1 id="viewh1_1st" style = "font-size: ${headerTextSizeSRC}" class="view1 text-center text-uppercase cx-heavy-brand-font">  ${headerText}  </h1>
//       <p class="cx-brand-font text-center" id="viewPara"></p>
//       <div class="col-xs-12 flex_box_column " style="">
//         <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 cx-heavy-brand-font">
//           <a id="cta_href" href="" class=" cx-button full-width  text-uppercase text-center">${ctaTextSRC}</a></div>
//       </div>
//     </div>`
//     switch (selectedPostion) {
//       case "1st":
//         $(".FIRST_VIEW_CONTAINER").append(resultingBODY)
//         positionArray[0] = resultingBODY
//         break;
//
//       case "2nd":
//         $(".SECOND_VIEW_CONTAINER").append(resultingBODY)
//         positionArray[1] = resultingBODY
//         break;
//     }
//     break
//
//   case "module2":
//     resultingBODY = `<div class="module2 col-sm-6">
//       <img class = "img-responsive" id="viewImg" src="${imgSRC}" />
//       </div>
//       <div class="col-sm-6 flex_box_column">
//         <h1 id="viewh1_1st" style = "font-size: ${headerTextSizeSRC}" class="view1 text-center text-uppercase cx-heavy-brand-font">${headerText}  </h1>
//         <p class="cx-brand-font text-center" id="viewPara"> ${paraTextSRC}</p>
//         <div class="col-xs-12 flex_box_column " style="">
//           <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 cx-heavy-brand-font">
//             <a id="cta_href" href="${ctaLinkSRC}" class=" cx-button full-width  text-uppercase text-center">${ctaTextSRC}</a></div>
//         </div>
//       </div>`
//     switch (selectedPostion) {
//       case "1st":
//         $(".FIRST_VIEW_CONTAINER").append(resultingBODY)
//         positionArray[0] = resultingBODY
//         break;
//
//       case "2nd":
//         $(".SECOND_VIEW_CONTAINER").append(resultingBODY)
//         positionArray[1] = resultingBODY
//         break;
//     }
//     break;
//     console.log(positionArray)
// }
// $("[id^='saveButton']").html("SAVED")
// var saved = document.getElementById("[id^='saveButton']");
// console.log(saved)

// if ($("[id^='saveButton']").text = "SAVED") {
//   var joinedArray = positionArray.join('')
//   $(".boxclass").val(joinedArray)
//   $('#htmlButton').on("click", function() {
//     $(".create_container").hide()
//     $(".html_container").show()
//     $(".view_container").hide()
//     $("#create").removeClass('active')
//     $("#preview").removeClass('active')
//     $("#html").addClass('active')
//   })
// }
// })

//
// $("[id^='ddlViewBy']").one("change", dropDownChange);
//
// $('body').on("click", '#' + deleteButtonID, function() {
//   var div = document.getElementById(navID)
//   var filtered = $("[id=navID]").has("[id=deleteButtonID]")
//   if (div) {
//     div.parentNode.removeChild(div)
//   }
// })
