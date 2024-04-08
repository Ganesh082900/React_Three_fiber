import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";

export default function TimeLine() {
  const career = [{}];

  return (
    <section>
      <VerticalTimeline>
        {/* First Card */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3a4e5d",
            color: "#fff",
            margin: "-2%",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="July 23 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad, TS</h4>
          <p>
            Team Leading, Code reviews, User Experience, Encourage
            Collaboration, Documentation, Continual Learning
          </p>
        </VerticalTimelineElement>
        {/* Second Card */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3a4e5d",
            color: "#fff",
            margin: "-2%",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="Dec 22 - June 24"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">10X Academy</h4>
          <p>
            MERN stack projects, collaborated on team assignments, practiced
            coding regularly
          </p>
        </VerticalTimelineElement>
        {/* Third Card */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3a4e5d",
            color: "#fff",
            margin: "-2%",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="22' - 24' "
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">MBA-HR</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Telangana University
          </h4>
          <p>
            Absorb knowledge, Build connections, Evaluate data critically,
            Generate creative solutions.
          </p>
        </VerticalTimelineElement>

        {/* Fourt Card */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3a4e5d",
            color: "#fff",
            margin: "-2%",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="17' - 20'"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">BCTCA</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Osmania University, TS
          </h4>
          <p>
            Undertake internships, engage in research projects, network with
            professionals, and explore career options.
          </p>
        </VerticalTimelineElement>
        {/* Fifth Card */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3a4e5d",
            color: "#fff",
            margin: "-2%",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="15' - 17'"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Intermidiate</h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad, TS</h4>
          <p>Sri Chaitanya Jr Kalasala</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
