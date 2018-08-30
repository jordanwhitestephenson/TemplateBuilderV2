// data[e.target.name] = $(e.target).val();




var collapseID

var modules = {
  css: `
  <style>
  .preview_container .module_container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%
  }
  .preview_container .module2_mock {
    margin-top: 2em;
  }
  .preview_container h2,   .preview_container .cta_text {
    margin-bottom: 5px;
  }
  .preview_container .crocs_story_headline {
    font-size: 2em;
    margin-bottom: 10px;
  }
  .module_container .padding-crocs-stories {
    padding:20px 10px 5px 10px;
    margin-top: 10px;
    margin-bottom: 1.5em;
  }
  .preview_container .fancy-headline {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    margin-top: 2em;
    line-height: 1.0;
    width: 100%;
  }
  .preview_container .social_media_container {
    min-height: 150px;
    margin: 10px 5px 10px 5px;
  }

  .preview_container .fancy-headline:before,
  .preview_container .fancy-headline:after {
    background-color: #444;
    content: '';
    flex-grow: 1;
    height: 1px;
    position: relative;
    top: 0.5em;
  }

  .preview_container .fancy-headline:before {
    margin-right: 10px;
  }

  .preview_container .fancy-headline:after {
    margin-left: 10px;
  }

  .preview_container .flex_box_column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .preview_container .flex_box_row {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }


  .preview_container .module_two_text_container {
    background: #fff;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 7%;
    padding-bottom: 7%;
  }

  .preview_container a:hover, .preview_container a:active, .preview_container a:focus {
    text-decoration: none;
  }

  .preview_container #a_href_hover:hover, .preview_container #story2_hover:hover,  .preview_container #story1_hover:hover{
    text-decoration: underline;
  }
  .preview_container .story_text {
    padding: 25px;
  }
  .preview_container .icon {
    margin: 10px;
  }


  .preview_container .text_container {
    width: 100%;
  }

  .preview_container .hero_story_container {
    padding: 25px 15px 25px 15px;
    background-color: #fff;
    margin: 20px;
  }

  .preview_container .background_colored_div {
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    .preview_container .cs_container-fluid, .preview_container .background_colored_div.cs_container-crocs,   .preview_container #mobile_image_full_screen {
      padding-left: 0px;
      padding-right: 0px;
    }
    .preview_container #story2_hover, .preview_container #a_href_hover, .preview_container #story1_hover, .preview_container #story2_hover {
      text-decoration: underline;
    }
    .preview_container .story1, .preview_container .story2, .preview_container .moduleSocial_mock {
      padding-left: 0px;
      padding-right: 0px;
    }
    .preview_container .story_text {
    padding: 20px 10px 20px 10px;
    }

  }

  @media(min-width: 481px) {
    .preview_container .background_colored_div {
      padding: 35px;
    }
  }

  </style>`,
  Social_Module: {
    data: {
      r_SocialMediaHeadline : 'Stay Connected',
      r_NewsletterHeadline: 'So many Stories!',
      r_NewsletterPara: 'Sign up for more original stories and the hottest content from Crocs.',
      r_SocialBackgroundColor: '#e1e1e1',
      r_SocialTwitterAHREF: 'https://twitter.com/Crocs',
      r_SocialFacebookAHREF: 'https://www.facebook.com/Crocs/',
      r_SocialInstagramAHREF: 'https://www.instagram.com/crocs/?hl=en'
    },
    html: `<div class="socialModule preview_container">
      <section class="form_container">
        <h2 class="text-center module_headline"> Social Module </h2>
        <form class="module_social_form needs-validation" novalidate>
          <div class="bottom_form_container flex_box_row">
            <div class="cta_form_container flex_box_column col-xs-12 col-sm-6">
              <div class="margin-right-auto">
                <section class = "social_media_input">
                  <label for="ctaText">Social Media Section Healine</label>
                  <input type="text" class="js-getText" name="r_SocialMediaHeadline" value="Stay Connected"><br>
                  <label for="ctaText">Facebook Link</label>
                  <input type="text" class="js-getText" name="r_SocialFacebookAHREF" value="https://www.facebook.com/Crocs/"><br>
                  <label for="ctaText">Instagram Link</label>
                  <input type="text" class="js-getText" name="r_SocialInstagramAHREF" value="https://www.instagram.com/crocs/?hl=en"><br>
                  <label for="ctaText">Twitter Link</label>
                  <input type="text" class="js-getText" name="r_SocialTwitterAHREF" value="https://twitter.com/Crocs"><br>

                </section>

                <label for="ctaLink">Newsletter Headline</label>
                <input type="text" class="js-getText" name="r_NewsletterHeadline" value="So many Stories!"><br>
                <label for="ctaLink">Newsletter Text-Copy</label>
                <input type="text" class="js-getText" name="r_NewsletterPara" value="Sign up for more original stories and the hottest content from Crocs."><br>
                <label for="ctaLink">Text Box Background Color</label>
                <input type="color" class="js-getText" name="r_SocialBackgroundColor" value="#e1e1e1"><br>
              </div>
            </div>
          </div>
        </form>

        <div class="button_container">
          <button type="button" data-toggle="modal" data-target="#exampleModalModule1" onClick="exampleModule1()" class="btn btn-link">EXAMPLE</button>
          <a class="btn btn-link collapse_ahref" data-toggle="collapse" type="submit" role="button" aria-expanded="false" aria-controls="collapseExample">
      PREVIEW MODULE
      </a>
        </div>

      </section>

      <div class="module_preview">
        <div class="collapse">
          <div class="card card-body template">
            <section class="moduleSocial_mock cs_container-crocs  module_container flex_box_row" >
              <div class = "social_media_container flex_box_column col-xs-12 col-md-5 padding-0" style="background-color: r_SocialBackgroundColor">
                <h4 class = "text-center text-uppercase cx-heavy-brand-font">r_SocialMediaHeadline</h4>
                <div class = "icons flex_box_row">
                <a href = "r_SocialFacebookAHREF" class = "icon">
                  <img src = "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Facebook_Crocs.png" class = "img-responsive" alt= "Crocs Facebook"  />
                </a>
                <a href = "r_SocialInstagramAHREF" class = "icon">
                  <img src = "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Instagram_Crocs.png" class = "img-responsive " alt= "Crocs Instagram"  />
                </a>
                <a href = "r_SocialTwitterAHREF" class ="icon">
                  <img src = "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Twitter_Crocs.png" class = "img-responsive" alt= "Crocs Twitter"  />
                </a>
                </div>
              </div>
              <div class = "social_media_container flex_box_row col-xs-12 col-md-5 padding-0" style="background-color: r_SocialBackgroundColor">
                <h4 class = "text-center text-uppercase cx-heavy-brand-font">r_NewsletterHeadline</h4>
                <p class = "text-center cx-brand-font">r_NewsletterPara</p>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
                <div class="footer-email-signup-template">
                		<div id="newsletterFooter" class="">
                			<input class="email" type="text" value="Enter your email address" title="Enter your email address" autocomplete="off">
                			<button class="submitBtn cx-brand-font bold" type="submit">Submit</button>
                		</div>
                </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>`
  },
  USG_Module: {
    data: {
      r_USGTextHealine: 'Tag @Crocs and #ComeAsYouAre',
      r_USGTextParagraph: 'Help others find comfort by sharing your selfie<br />shoefie or favorite Crocs photo!'
    },
    html: `<div class="usgModule preview_container">
      <section class="form_container">
        <h2 class="text-center module_headline"> USG Module </h2>
        <form class="module_USG_form needs-validation" novalidate>
          <div class="bottom_form_container flex_box_row">
            <div class="cta_form_container flex_box_column col-xs-12 col-sm-6">
              <div class="margin-right-auto">
                <label for="ctaText">Fancy USG Headline</label>
                <input type="text" class="js-getText" name="r_USGTextHealine" value="Tag @Crocs and #ComeAsYouAre"><br>
                <label for="ctaLink">USG Copy</label>
                <input type="text" class="js-getText" name="r_USGTextParagraph" value="Help others find comfort by sharing your selfie shoefie or favorite Crocs photo!"><br>
              </div>
            </div>
          </div>
        </form>

        <div class="button_container">
          <button type="button" data-toggle="modal" data-target="#exampleModalModule1" onClick="exampleModule1()" class="btn btn-link">EXAMPLE</button>
          <a class="btn btn-link collapse_ahref" data-toggle="collapse" type="submit" role="button" aria-expanded="false" aria-controls="collapseExample">
      PREVIEW MODULE
      </a>
        </div>

      </section>

      <div class="module_preview">
        <div class="collapse">
          <div class="card card-body template">
            <section class="moduleUSG_mock cs_container-crocs  module_container flex_box_column">
              <div class="text-center fancy-headline">
              <p>r_USGTextHealine</p></div>
              <div class=" widget_container">
                <div class="olapic-header">
                  <div class="olapic-carousel-subtitle">r_USGTextParagraph</div>
                  <button aria-disabled="false" type="button" class="olapic-upload-link cx-button cx-button-cta">Upload a Photo</button>
                </div>
                <div class="js-olapic olapic-carousel" data-source="signal" data-location="pdp-top" data-useproduct="true" data-useproductcategory="true" data-widgets="Homepage"></div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>`
},
  module1: {
    data: {
      r_headerColor: '#444',
      r_backgroundModuleColor: '#e1e2e1',
      r_headerSize: '30',
      r_myText: 'Hero Story Title',
      r_paragraphText: 'Lorem ipsum dolor sit amet, tortor consectetur adipiscing elit. Donec et dui erat. Nam ut augue vitae tortor eleifend viverra. Donec vitae erat sem.',
      r_paragraphColor: '#444',
      r_paragraphSize: '15',
      r_imageSRC: 'images/HeroImage_BLACK.jpg',
      r_imageALT: 'alt tag',
      r_imageTitle: 'image title',
      r_imageLink: 'www.image.com',
      r_CTAtext: 'Read More',
      r_CTALink: 'www.google.com',
      r_CTAcolorDefaultText: '#444',
      r_CTATextSize: '15',
      r_backgroundModuleColor: '#e1e1e1',

      r_CTAcolorHover: 'red'
    },
    html: `
    <div class="module1 preview_container">
      <section class="form_container">
      <h2 class="text-center module_headline"> MODULE 1 </h2>

        <form class = "module_1_form needs-validation" novalidate >
          <div>
            <label for="InputH">Page Background Color</label>
            <input type="color" name="r_backgroundModuleColor" class="js-getText" value="#e1e2e1"><br>
          </div>

          <div class="top_form_container flex_box_row">
            <div class="col-xs-12 col-sm-6 header_form_container flex_box_column">
              <h3 class="margin-right-auto cx-brand-font form_headers"> Header </h3>

              <div class="margin-right-auto form-group">
                <label for="InputH">Header Text</label>
                <input type="text" name="r_myText" required class="form-control js-getText"required value=""><br>
              </div>
              <div class="margin-right-auto">
                <label id="HeaderSize" for="InputheaderSize">Header Size</label>
                <input type="number" class="js-getText" name="r_headerSize" value = "30"><br>
              </div>
              <div class="margin-right-auto">
                <label id="HeaderColor" for="headerColor">Header Color</label>
                <input type="color" name="r_headerColor" class="js-getText" value="#444"><br>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 image_form_container flex_box_column">
              <h3 class="margin-right-auto cx-brand-font form_headers"> Hero Image</h3>
              <div class="margin-right-auto">
                <label id="img" for="img_SRC">Large Image SRC</label>
                <input type="text" name="r_imageSRC" class="js-getText" value=""><br>
              </div>
              <div class="margin-right-auto">
                <label id="img" for="img_alt">Img Alt Tag</label>
                <input type="text" name="r_imageALT" class="js-getText" value=""><br>
              </div>
              <div class="margin-right-auto">
                <label id="img" for="img_title">Image Title</label>
                <input type="text" class="js-getText" name="r_imageTitle" value=""><br>
              </div>
              <div class="margin-right-auto">
                <label id="img" for="img_title">Image Link</label>
                <input type="text" class="js-getText" name="r_imageLink" value=""><br>
              </div>
            </div>
          </div>
          <div class="bottom_form_container flex_box_row">

            <div class="para_form_container flex_box_column col-xs-12 col-sm-6">
              <h3 class="margin-right-auto cx-brand-font form_headers">Paragraph</h3>
              <div class="margin-right-auto flex_box_column">
                <label class="margin-right-auto" for="paragraphText">Paragraph Text</label>
                <textarea type="text" name="r_paragraphText" class="js-getText" value=""></textarea><br>
              </div>
              <div class="margin-right-auto">
                <label for="paragraphColor">Paragraph Color</label>
                <input type="color" class="js-getText" name="r_paragraphColor" value="#444"><br>
              </div>
              <div class="margin-right-auto">
                <label for="paragraphSize">Paragraph Size</label>
                <input type="number" class="js-getText" name="r_paragraphSize" value="15"><br>
              </div>
            </div>

            <div class="cta_form_container flex_box_column col-xs-12 col-sm-6">
              <h3 class="margin-right-auto cx-brand-font form_headers">CTA</h3>
              <div class="margin-right-auto">
                <label for="ctaText">CTA TEXT</label>
                <input type="text" class="js-getText" name="r_CTAtext" value=""><br>
                <label for="ctaLink">CTA LINK</label>
                <input type="text" class="js-getText" name="r_CTALink" value=""><br>
              </div>

              <div class="margin-right-auto">
                <label for="ctaColor">CTA Default Text Color</label>
                <input type="color" class="js-getText" name="r_CTAcolorDefaultText" value=""><br>
                <label for="ctaColor">CTA Text Size</label>
                <input type="number" class="js-getText" name="r_CTATextSize" value="15"><br>
              </div>

            </div>
          </div>
        </form>

        <div class="button_container">
          <button type="button" data-toggle="modal" data-target="#exampleModalModule1" onClick="exampleModule1()" class="btn btn-link">EXAMPLE</button>
          <a class="btn btn-link collapse_ahref" data-toggle="collapse" type="submit" role="button" aria-expanded="false" aria-controls="collapseExample">
      PREVIEW MODULE
      </a>
        </div>

      </section>

      <div class="module_preview">
        <div class="collapse">
          <div class="card card-body template">

            <section class="module1_mock   module_container">
            <div class="cs_container-fluid">
              <div class="padding-crocs-stories">
                <h2 class="cx-heavy-brand-font text-center text-uppercase crocs_story_headline">Crocs Stories</h2>
                <p class="cx-brand-font text-center">
                  The place for recent news, events and what we’re doing to<br class ="hidden-xs"/> help everyone be comfortable in their own shoes.
                </p>
              </div>
            </div>
              <div class = "cs_container-fluid"  style="background-color: r_backgroundModuleColor; width: 100%">
                <div class="background_colored_div cs_container-crocs flex_box_row" >
                  <a href="r_imageLink" id="mobile_image_full_screen" class="product_container col-xs-12 col-md-7">
                  <img src="r_imageSRC" alt = "r_imageALT" title = "r_imageTitle" class="imageSRC_DemandwareOG img-responsive large_hero_image" />
                </a>

                  <a href="r_CTALink" class="col-xs-12 col-md-5 flex_box_column">
                    <div class="text_container hero_story_container text-left">
                      <h2 class="cx-heavy-brand-font" style="font-size: r_headerSizepx; color: r_headerColor;  ">r_myText</h2>
                      <p class="cx-brand-font " style="color: r_paragraphColor; font-size: r_paragraphSizepx">r_paragraphText</p>

                      <div id="a_href_hover" href="r_CTALink" class="cx-brand-font text-left cta_text" style="color: r_CTAcolorDefaultText; font-size: r_CTATextSizepx; background-color: r_CTAcolorDefault_Background">r_CTAtext</div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>

`
  },
  module2: {
    data: {
      r_storyHeadlineSize: "20px",
      r_storyHeadlineColor: "#444",
      r_storyTitle1: "Secondary Story Title 1",
      r_storyTitle2: "Secondary Story Title 2",
      r_storyParaText1: "1st Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
      r_storyParaText2: "2nd Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
      r_storyCTAText1: "Read More",
      r_storyCTAText2: "Read More",
      r_stroyCTALink1: 'www.first.com',
      r_stroyCTALink2: 'www.second.com',
      r_storyPhotoSRC1: 'images/ExampleStoryImage_Secondary.jpg',
      r_storyPhotoSRC2: 'images/ExampleStoryImage_Secondary.jpg',
      r_storyPhotoLink1: "www.crocs.com",
      r_storyPhotoLink2: "www.crocs.com",
      r_storiesImageBorderColor: "#e1e1e1"
    },
    html: `<div class="module2 preview_container">
      <section class="form_container">
        <h2 class="module_2_form toggle">MODULE 2</h2>

        <div class="header_form_container flex_box_column">
          <h3 class="cx-brand-font margin-right-auto">Secondary Story 1</h3>

          <div class="secondary_story_overall margin-right-auto">
            <div class="margin-right-auto">
              <label for="headerText">Story Headline Size</label>
              <input type="number" class="js-getText" name="r_storyHeadlineSize" placeholder="30px" value=""><br>
            </div>
            <div class="margin-right-auto">
              <label for="headerText">Story Headline Color</label>
              <input type="color" class="js-getText" name="r_storyHeadlineColor" value=""><br>
            </div>
            <div class="margin-right-auto">
              <label for="headerText">Story Image Border</label>
              <input type="color" class="js-getText" name="r_storiesImageBorderColor" value=""><br>
            </div>
          </div>


          <div class="stories">
            <div class="story1 col-xs-12 col-md-6">
              <h4>Story 1</h4>
              <section class="story_text_form">
                <div class="margin-right-auto">
                  <label for="headerText">Story1 Title Text</label>
                  <input type="text" class="js-getText" name="r_storyTitle1" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story1 Paragraph Text</label>
                  <input type="text" class="js-getText" name="r_storyParaText1" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story1 CTA Text</label>
                  <input type="text" class="js-getText" name="r_storyCTAText1" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story1 CTA Link</label>
                  <input type="text" class="js-getText" name="r_stroyCTALink1" value=""><br>
                </div>
              </section>
              <section class="story_image_form">
                <div class="margin-right-auto">
                  <label for="headerText">Story1 Image SRC</label>
                  <input type="text" class="js-getText" name="r_storyPhotoSRC1" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story1 Image Link</label>
                  <input type="text" class="js-getText" name="r_storyPhotoLink1" value=""><br>
                </div>
              </section>
            </div>

            <div class = "story2 col-xs-12 col-md-6">
              <h4>Story 2</h4>
              <section class="story_text_form">
                <div class="margin-right-auto">
                  <label for="headerText">Story2 Title Text</label>
                  <input type="text" class="js-getText" name="r_storyTitle2" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story2 Paragraph Text</label>
                  <input type="text" class="js-getText" name="r_storyParaText2" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story2 CTA Text</label>
                  <input type="text" class="js-getText" name="r_storyCTAText2" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story2 CTA Link</label>
                  <input type="text" class="js-getText" name="r_stroyCTALink2" value=""><br>
                </div>
              </section>
              <section class="story_image_form">
                <div class="margin-right-auto">
                  <label for="headerText">Story2 Image SRC</label>
                  <input type="text" class="js-getText" name="r_storyPhotoSRC2" value=""><br>
                </div>
                <div class="margin-right-auto">
                  <label for="headerText">Story2 Image Link</label>
                  <input type="text" class="js-getText" name="r_storyPhotoLink2" value=""><br>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="button_container">
          <button type="button" data-toggle="modal" data-target="#exampleModalModule2" onClick="exampleModule2()" class="btn btn-link">EXAMPLE</button>
          <a class="btn btn-link collapse_ahref" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              PREVIEW MODULE
              </a>
        </div>
      </section>

      <div class="collapse" id="collapseExample2">
        <div class="card card-body template">
          <section class="module2_mock module_container">
            <div class="cs_container-crocs" style="background-color: r_backgroundModuleColor; width: 100%">
              <div class="">
                <section class="story1 col-xs-12 col-md-6 padding-0 flex_box_column">
                  <a href="r_storyPhotoLink1">
                    <img class = "img-responsive imageSRC_Demandware1 secondary_hero_image" style = "border: 5px solid r_storiesImageBorderColor" src = "r_storyPhotoSRC1" />
                  </a>
                  <div class="story_text">
                    <h3 class="cx-heavy-brand-font text-left mar" style="font-size: r_storyHeadlineSize; color: r_storyHeadlineColor ">r_storyTitle1</h3>
                    <p class="cx-brand-font text-left" style="font-size: ">r_storyParaText1</p>
                    <div id="story1_hover" href="r_stroyCTALink1" class="cx-brand-font text-left" style="color: r_CTAcolorDefaultText; font-size: r_CTATextSizepx; background-color: r_CTAcolorDefault_Background">r_storyCTAText1</div>
                  </div>
                </section>

                <section class="story2 col-xs-12 col-md-6 padding-0 flex_box_column">
                  <a href="r_storyPhotoLink2">
                      <img class = "img-responsive imageSRC_Demandware2 secondary_hero_image" style = "border: 5px solid r_storiesImageBorderColor" src = "r_storyPhotoSRC2" />
                    </a>
                  <div class="story_text">
                    <h3 class="cx-heavy-brand-font text-left mar" style="font-size: r_storyHeadlineSize; color: r_storyHeadlineColor ">r_storyTitle2</h3>
                    <p class="cx-brand-font text-left" style="font-size: ">r_storyParaText2</p>
                    <div id="story2_hover" href="r_stroyCTALink2" class="cta_text cx-brand-font text-left" style="color: r_CTAcolorDefaultText; font-size: r_CTATextSizepx; background-color: r_CTAcolorDefault_Background">r_storyCTAText2</div>
                  </div>
                </section>

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

`

  }
};

function getAccordianHTML(accordianID, labelID) {

  return `

  <nav class="accordion arrows" data-id = "${labelID}">
  <input type="radio" id = "${labelID}" name="accordion"/>
  <section class="box"  id= "${accordionID}" data-toggle="popover"  title="Select Module and Drag!" data-content="Drag up or down to reorder!">
    <label class="box-title" for="${labelID}">
     <div class="dropdown" >
        <select class = "select" name="dropdown" >
          <option class="dropdown-item" value = "blank" >Choose Module</option>
          <option class="dropdown-item" value = "module1" >MODULE 1</option>
          <option class="dropdown-item" value = "module2" >MODULE 2</option>
          <option class="dropdown-item" value = "USG_Module" >USG_Module</option>
          <option class="dropdown-item" value = "Social_Module" >Social_Module</option>

          </select>
      </div>
      <div class = "delete_button_container">
      </div>
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
      $(".module_1_container").show()
      // $("#preview").hide()
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
        $("#preview").show()
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
        dropDownChange(thisDropDown)
        $('.box').mouseover().popover({
          trigger: 'hover',
          delay: {
            "show": 100,
            "hide": 100
          },
          placement: 'bottom'
        })
      })
    },
    setModuleForm: function(e) {
      var moduleNumParents = $(e.target).parentsUntil('nav').find('select')
      var moduleNum = moduleNumParents[0].value
      var $moduleChooser = $(e.target).parentsUntil('nav').find('.accordion_container')
      var html = app.modules[moduleNum].html;
      var data = app.modules[moduleNum].data;
      $moduleChooser.html(html)
      //creating new matching id for collapse container
      var collapseContainer = $(e.target).parentsUntil('nav')[2].id
      var collapseContainerID = collapseContainer + Math.random().toFixed(0)
      $(e.target).parentsUntil('nav').find('.collapse_ahref').attr("href", "#" + collapseContainerID)
      $(e.target).parentsUntil('nav').find('.collapse').attr("id", collapseContainerID)

      var $html = $(app.modules[moduleNum].html).find('.module_container');
      var htmlString = $html[0].innerHTML;
      var data = app.modules[moduleNum].data;
      data[moduleNum] = moduleNum;
      for (k in data) {
        var re = new RegExp(k, 'g');
        htmlString = htmlString.replace(re, data[k]);
      }
      var $module_container = $(e.target).parentsUntil('nav').find('.module_container')
      $module_container.html(htmlString)

    },
    moduleFormValues: function(moduleInputValues) {

      var selectedModule = $(moduleInputValues.target).parentsUntil('nav').find('select.select').val()
      var inputName = moduleInputValues.target.name
      var inputType = moduleInputValues.target.type
      var inputValue = moduleInputValues.target.value
      var data = app.modules[selectedModule].data;
      var $html = $(app.modules[selectedModule].html).find('.module_container');
      var htmlString = $html[0].innerHTML;
      var data = app.modules[selectedModule].data;
      data[inputName] = inputValue;
      for (k in data) {
        var re = new RegExp(k, 'g');
        htmlString = htmlString.replace(re, data[k]);
      }
      var $module_container = $(moduleInputValues.target).parentsUntil('nav').find('.module_container')
      $module_container.html(htmlString)
      var $collapseEvent = $(moduleInputValues.target).parentsUntil('nav').find('.collapse_ahref')[0]

      $collapseEvent.addEventListener("click", toggleSRC)
      $('.collapse_ahref').on("click", toggleSRC)
      function toggleSRC(e) {
        // $(e.target).parentsUntil('nav').find('.collapse').addClass('show')
        //CHANGING IMAGE'S SRC - CLEAN UP TO DO//
        if (inputName === 'r_imageSRC' && inputValue.includes('?$staticlink$') === true) {
          var collapseShow = $(e.target).parentsUntil('nav').find('.collapse')
          if ($(e.target).parentsUntil('nav').find('.collapse').css('display') === 'block') {
            $(e.target).parentsUntil('nav').find('.imageSRC_DemandwareOG').attr('src', `${inputValue}`)
          }
          if ($(e.target).parentsUntil('nav').find('.collapse:not(.show)').css('display') === 'none') {
            $(e.target).parentsUntil('nav').find('.imageSRC_DemandwareOG').attr('src', `http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/${inputValue}`)
          }
        }

        if (inputName === 'r_storyPhotoSRC1' && inputValue.includes('?$staticlink$') === true) {
          var collapseShow = $(e.target).parentsUntil('nav').find('.collapse')
          if ($(e.target).parentsUntil('nav').find('.collapse').css('display') === 'block') {
            $(e.target).parentsUntil('nav').find('.imageSRC_Demandware1').attr('src', `${inputValue}`)
          }
          if ($(e.target).parentsUntil('nav').find('.collapse').css('display') === 'none') {
            $(e.target).parentsUntil('nav').find('.imageSRC_Demandware1').attr('src', `http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/${inputValue}`)
          }
        }

        if (inputName === 'r_storyPhotoSRC2' && inputValue.includes('?$staticlink$') === true) {
          var collapseShow = $(e.target).parentsUntil('nav').find('.collapse')
          if ($(e.target).parentsUntil('nav').find('.collapse').css('display') === 'block') {
            $(e.target).parentsUntil('nav').find('.imageSRC_Demandware2').attr('src', `${inputValue}`)
          }
          if ($(e.target).parentsUntil('nav').find('.collapse').css('display') === 'none') {
            $(e.target).parentsUntil('nav').find('.imageSRC_Demandware2').attr('src', `http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/${inputValue}`)
          }
        } else {
          // $(e.target).parentsUntil('nav').find('.imageSRC_DemandwareOG').attr('src', `${inputValue}`)
          // $(e.target).parentsUntil('nav').find('.imageSRC_Demandware1').attr('src', `${inputValue}`)
          // $(e.target).parentsUntil('nav').find('.imageSRC_Demandware2').attr('src', `${inputValue}`)
        }
      }
      // }

    }
  };
  app.init();

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
    onTextChange(e)
    $(e.target).parentsUntil('nav').find('.delete_button_container').append('<button class="btn btn-secondary delete_button" type="button"  aria-haspopup="true" aria-expanded="false">DELETE</button>')
    $('.box').mouseover(function() {
      $('.box').popover('disable')
    })

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

    startSortable()

  }
  var moduleFormArray = []

  function getModuleText(ev) {
    $('.js-getText').off('change', app.moduleFormValues(ev));
    $('.js-getText').on('change', app.moduleFormValues(ev));

    $(ev.target).parentsUntil('nav').find('.collapse').removeClass('show')

    var formInputHTML = $(ev.target).parentsUntil('.create_container')
    var formInputHTMLValue = ($(formInputHTML[formInputHTML.length - 1])[0]).dataset.id
    moduleFormArray.push(formInputHTMLValue)
    //removing duplicates after change event//
    var unqArray = moduleFormArray.filter(function(item, pos, self) {
      return self.indexOf(item) == pos
    })
    configureHTML(unqArray)
  }

  function startSortable() {

    Sortable.create(createContainerID, {
      group: {
        type: String
      },
      filter: ".delete_button",
      onFilter: function(evt) {
        var item = evt.item,
          ctrl = evt.target;
        if (Sortable.utils.is(ctrl, ".delete_button")) {
          item.parentNode.removeChild(item);
          item.remove()
          var allDataIDs = $('.create_container').find('[data-id]').get().map(function(x) {
            return x.dataset.id
          })
          configureHTML(allDataIDs)
        }
      },
      store: {
        // Sorting acquisition (called during initialization)
        get: function(sortable) {
          var order = localStorage.getItem(sortable.options.group.name);
          configureHTML(
            order
            ? order.split('|')
            : [])

          return order
            ? order.split('|')
            : [];
        },
        // Saving the acquired sorting (called each time upon sorting modification)
        set: function(sortable) {
          var order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, order.join('|'));
          configureHTML(order)
          console.log(order, 'afterRearance')
        }
      },
      draggable: '.accordion'
    });
  }
  function configureHTML(order) {
    var htmlOrderArray = []
    if (order.length < 1) {
      $('#box').val(htmlOrderArray)
    }
    if (order && order.length > 1) {

      order.forEach(function(k) {
        if (k) {
          //checking to see if the element is there//
          if ($(`[data-id='${k}']`).find('.module_container')[0]) {
            var dataVal = $(`[data-id='${k}']`).find('.module_container')[0].outerHTML
            htmlOrderArray.push(dataVal)
            var joinedArray = htmlOrderArray.join(',')
            joinedArray = joinedArray.replace(/,/g, "")
            var CSS = modules.css
            $('#box').val(CSS + '<div class = "preview_container">' + joinedArray + '</div>')
          }
        }
      })
    } else {
      if ($(`[data-id='${order}']`).find('.module_container')[0]) {
        var dataVal = $(`[data-id='${order}']`).find('.module_container')[0].outerHTML
        htmlOrderArray.push(dataVal)
        var joinedArray = htmlOrderArray.join(',')
        joinedArray = joinedArray.replace(/,/g, "")
        var CSS = modules.css
        $('#box').val(CSS + '<div class = "preview_container">' + joinedArray + '</div>')

      }
    }
    sendHTML(htmlOrderArray)
  }
  function sendHTML(htmlOrderArray) {
    $('#saveButton').unbind('click').bind('click', function(e) {
      console.log(htmlOrderArray)
      var formData = {'name': htmlOrderArray}
      $.ajax({
        method: "POST",
        url: "/saveHTML",
        dataType: "json",
        data : JSON.stringify(formData),
        contentType: "application/json",
        success: function(){
          console.log('success')
        },
        error: function(e) {
          console.log(e)
        },

      })
    })
    console.log()
  }

  $('#saveHTMLButton').on("click", function() {
    var $preview = $('.replace_html_here');
    $preview.html($('#box').val());
    $preview.find("img").each(function() {
      if ($(this).is('img[src*="?$staticlink$"]')) {
        $(this).attr("src", "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/" + $(this).attr("src").replace("?$staticlink$", ""));
      }
    });
    $(".html_container").hide()
    $(".view_container").show()
  })
  $('#goBackToEditHTMLButton').on("click", function() {
    $(".html_container").show()
    $(".view_container").hide()
  })
  $('#goBackToCreateButton').on("click", function() {
    console.log('click')
    $(".html_container").hide()
    $(".view_container").hide()
    $('.create_container').show()
  })
});
