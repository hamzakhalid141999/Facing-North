import React from "react";
import classes from "./contentSection.module.css";

function ContentSection() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content_container}>
          <div className={classes.section}>
            <h2 className={classes.heading}>Booking Policy</h2>

            <p className={classes.para}>
              To secure the booking for a scheduled tour, a 50% advance payment
              is required, and the remaining payment must be cleared one month
              prior to the tour's departure.
            </p>

            <p className={classes.para}>
              For customized tours, 100% must be made at the time of booking,
              unless otherwise agreed upon.
            </p>

            <p className={classes.para_bold}>
              Cancellation of the tour shall be subject to the following
              charges, unless otherwise agreed:
            </p>

            <p className={classes.para}>
              - If the cancellation is made two or more months prior to
              departure, a deduction of 10% of the advance payment will be
              applied to cover administrative costs.
            </p>

            <p className={classes.para}>
              - If the cancellation is made between one to two months prior to
              departure, a deduction of 50% of the advance payment will be
              applied.
            </p>

            <p className={classes.para}>
              - If the cancellation is made less than one month prior to
              departure, a deduction of 75% of the advance payment will be
              applied.
            </p>

            <p className={classes.para}>
              - If the cancellation is made less than 15 days prior to
              departure, a deduction of 100% of the advance payment will be
              applied.
            </p>

            <p className={classes.para}>
              - It is important to note that these terms and conditions are
              legally binding and may only be altered or waived in writing by
              mutual agreement between the parties involved.
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.heading}>Insurance Policy</h2>

            <p className={classes.para}>
              Facing North does not assume any responsibility for providing
              travel and liability insurance, medical aid, or helicopter rescue
              coverage to participants joining our tours. As such, we advise all
              participants to secure appropriate travel insurance from a
              reliable source before embarking on our tours.
            </p>

            <p className={classes.para}>
              To ensure that participants are fully protected, we highly
              recommend investing in a comprehensive travel insurance policy
              that covers all the activities and areas included in their travel
              plans, including overseas medical costs and medical evacuation if
              necessary.
            </p>

            <p className={classes.para}>
              We recommend considering travel insurance providers such as "World
              Nomads" and "True Traveller" to obtain adequate coverage.
            </p>

            <p className={classes.para}>
              By obtaining comprehensive travel insurance, participants can have
              peace of mind knowing that they are fully protected against
              unexpected incidents that may arise during their travels with
              Facing North.
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.heading}>Wavier Policy</h2>

            <p className={classes.para}>
              This agreement serves to release Facing North from any and all
              liability for injuries and property damage that may occur during
              the tour. By signing this agreement, the undersigned party agrees
              to hold Facing North entirely free from any liability, including
              financial responsibility for injuries and property damage.
            </p>

            <p className={classes.para}>
              The undersigned party acknowledges the risks involved in the tour,
              including but not limited to property damage, illness caused by
              food consumption, hiking on rough terrain, and various activities
              at high altitudes. It is hereby confirmed that the undersigned
              party has appropriate travel insurance that covers such risks.
            </p>

            <p className={classes.para}>
              The undersigned party confirms that participation in the tour is
              voluntary and that all risks have been made clear. Additionally,
              the undersigned party does not have any conditions that increase
              the likelihood of experiencing injuries while engaging in the
              tour.
            </p>

            <p className={classes.para}>
              By signing below, the undersigned party forfeits all rights to
              bring a lawsuit against Facing North for any reason. Furthermore,
              the undersigned party acknowledges that if rented equipment
              offered by Facing North is damaged, they will be required to
              reimburse the total cost of the equipment.
            </p>

            <p className={classes.para_bold}>
              The undersigned party agrees to make every effort to obey safety
              precautions as listed in writing and as explained verbally, and to
              ask for clarification when necessary.
            </p>

            <p className={classes.para_bold}>
              The undersigned party has been fully made aware of the following
              conditions:
            </p>

            <p className={classes.para}>
              - On an adventure trip of this nature, weather, local politics,
              transport, and other factors beyond the control of the organizers
              can result in a change of itinerary. If alterations are necessary,
              the group leader and guide will decide the best possible
              alternative in the best interests of the group.
            </p>

            <p className={classes.para}>
              - Facing North does not provide travel and liability insurance,
              medical aid, and helicopter rescue coverage. Participants are
              advised to obtain travel insurance from a reliable source before
              joining the trip.
            </p>

            <p className={classes.para}>
              - In case of any unforeseen circumstances, including but not
              limited to natural catastrophes, political or security issues, any
              additional costs incurred will be covered by the participants.
            </p>

            <p className={classes.para}>
              - Facing North is not responsible for personal injuries and
              accidents or the loss of any valuable item.
            </p>

            <p className={classes.para}>
              - No refunds shall be made in case a participant leaves the trip
              during the event due to any reason.
            </p>
            <p className={classes.para}>
              - All participants must follow the itinerary provided. Facing
              North will not be responsible for any mishap and will bear no
              additional costs if any participant decides to deviate from the
              given schedule.
            </p>
            <p className={classes.para}>
              - No refunds shall be made in case of a natural disaster or any
              unforeseen circumstance beyond human control.
            </p>
            <p className={classes.para}>
              - Personal weapons and drugs are strictly prohibited.
            </p>
            <p className={classes.para}>
              - Participants must behave ethically with fellow group members.
            </p>
            <p className={classes.para}>
              - It is essential to note that these terms and conditions are
              legally binding and may only be altered or waived in writing by
              mutual agreement between the parties involved.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.form_container}>
        <div className={classes.form}>
          <div className={classes.single_row}>
            <input type={"checkbox"} />
            <p className={classes.input_para}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nisl libero, ornare non libero vitae, vestibulum egestas tellus.
            </p>
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input placeholder="Your Name" className="input_field" />
            <input placeholder="Date" className="input_field" />
          </div>

          <div className={classes.single_row}>
            <input type={"checkbox"} />
            <p className={classes.input_para}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nisl libero, ornare non libero vitae, vestibulum egestas tellus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nisl libero, ornare non libero vitae, vestibulum egestas tellus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div style={{ width: "100%" }} className="input_row_single">
            <textarea
              style={{ height: "150px" }}
              placeholder="Type your message here"
              className="input_field"
            />
          </div>

          <h2 className={classes.heading}>Personal Information</h2>

          <div style={{ width: "70%" }} className={`input_row_single`}>
            <input placeholder="Your Name" className="input_field" />
            <input placeholder="Last Name" className="input_field" />
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input placeholder="Gender" className="input_field" />
            <input placeholder="Passport or ID Card" className="input_field" />
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input placeholder="Nationality" className="input_field" />
            <input placeholder="Date of Birth" className="input_field" />
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input placeholder="Phone" className="input_field" />
            <input placeholder="Email" className="input_field" />
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input placeholder="Address" className="input_field" />
            <input placeholder="Blood Group" className="input_field" />
          </div>

          <div style={{ width: "70%" }} className="input_row_single">
            <input
              placeholder="Emergency Contact Name"
              className="input_field"
            />
            <input
              placeholder="Emergency Contact Number"
              className="input_field"
            />
          </div>

          <div className={classes.btn}>
            <p>SUBMIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
