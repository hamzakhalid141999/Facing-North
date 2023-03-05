import React from "react";
import classes from "./faqContent.module.css";
import Faq from "react-faq-component";

function FaqContent() {
  const AnswerSection = ({ content }) => {
    return (
      <>
        <div className={classes.answer_section}>
          <div className={classes.para_section}>
            <p>{content}</p>
          </div>
        </div>
      </>
    );
  };

  const data = {
    rows: [
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "Immersive technologies create a distinct experience by merging the physical world with a digital environment. Augmented Reality (AR) and Virtual Reality (VR) are the two principal types of immersive technologies. They enable the user to interact with objects that may or may not exist physically through their digital counterparts. Thus, objects and environments are mapped and created digitally which appears to mimic reality."
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "Simply click/select the “Login” button and then select the “New Account” option. You will be required to fill in some personal details and create a username and password. You will also have an option to choose if you’re an Agent or a Developer. After filling in the required details you will receive a confirmation email. Upon clicking on the link, you will be directed to Auqta, and your account will be created."
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "Yes! You will have the option of changing your personal details through your user dashboard. Once your account is created you can simply visit your user profile and change your personal details and password. Note: User type and username cannot be changed once an account is created. Kindly contact us for further details."
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "You will be able to add a property through your user dashboard. Once you create an account and visit your dashboard, you will have an option to add a property. Simply fill in the property details, upload some nice resolution images, select appropriate features, and submit. It's that simple!"
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "The search bar on the homepage is designed for you to select the most appropriate property in line with your preferences and budget. Simply select your aim i.e., Invest, Buy or Rent, select the city and the location you’re interested in and lastly the price range. You will be displayed the properties according to your selected options pinpointed on a map so that you can visualise their exact location. Select the property card from the map and you will be directed to the property page."
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "Virtual tours map existing environments or create new environments for the user experience. These tours provide a walkthrough which aids the user into visualising what the environment will look like in real-time. The project tour provides a walkthrough of the project’s environment and provides an idea to the user of what the project will look like once its completed. Moreover, the locality tour provides a real-time visualisation of the surrounding location of the project."
            }
          />
        ),
      },
      {
        title: "A very important Question",
        content: (
          <AnswerSection
            content={
              "Note: This feature is only available in smartphones or tablets as it requires a camera module to map the digital structure onto the physical environment. For 3-D on plan, a printed floor plan will be required to use the service. The camera module of your smartphone/tablet will scan the floor plan upon which the actual structure will pop up on your screen. Kindly contact us for further details."
            }
          />
        ),
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <p className={classes.title}>FAQ</p>
        <Faq
          styles={{
            titleTextColor: "#176060",
            rowTitleColor: "#176060",
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default FaqContent;
