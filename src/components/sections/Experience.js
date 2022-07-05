import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import SectionTitle from "../utils/SectionTitle";

export default function Experience(props) {
  return (
    <div className="bg-primaryBeige">
      <SectionTitle title="Erfaring" />
      <VerticalTimeline>
        {props.work.companies.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "#212529",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            date={exp.date}
            iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
            icon={<Icon icon={exp.icon} />}
          >
            <h3 className=" font-bold text-lg vertical-timeline-element-title">
              {exp.position}
            </h3>
            <h4 className="">{exp.name}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="ant-design:hourglass-outlined" />}
        />
      </VerticalTimeline>
    </div>
  );
}
