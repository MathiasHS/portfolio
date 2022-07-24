import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import SectionTitle from "../utils/SectionTitle";

export default function Experience(props) {
  const resumeElementBg =
    localStorage.getItem("theme") === "dark"
      ? "rgb(223, 223, 223)"
      : "rgb(255, 255, 255)";
  const resumeArrowBg =
    localStorage.getItem("theme") === "dark"
      ? "7px solid rgb(223, 223, 223)"
      : "7px solid rgb(255, 255, 255)";

  const iconElementBg =
    localStorage.getItem("theme") === "dark"
      ? "rgb(127, 127, 127)"
      : "rgb(31, 31, 31)";

  return (
    <div className="bg-primaryBeige dark:bg-darkModeColor2">
      <SectionTitle title="Erfaring" className="dark:text-white" />
      <VerticalTimeline>
        {props.work.companies.map((exp) => (
          <VerticalTimelineElement
            key={exp.date}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: resumeElementBg,
              color: "#212529",
            }}
            dateClassName={
              localStorage.getItem("theme") === "dark" ? "exp-date-color" : ""
            }
            contentArrowStyle={{
              borderRight: resumeArrowBg,
            }}
            date={exp.date}
            iconStyle={{
              background: iconElementBg,
              color: "#fff",
            }}
            icon={<Icon icon={exp.icon} />}
          >
            <h3 className=" font-bold text-lg vertical-timeline-element-title">
              {exp.position}
            </h3>
            <h4>{exp.name}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: iconElementBg, color: "#fff" }}
          icon={<Icon icon="ant-design:hourglass-outlined" />}
        />
      </VerticalTimeline>
    </div>
  );
}
