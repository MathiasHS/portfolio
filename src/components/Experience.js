import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";

export default function Experience() {
  return (
    <div className="bg-primaryBeige">
      <div className=" flex py-12  justify-center text-lg tracking-widest">
        <h1>Erfaring</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Juni 2022 - August 2022"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="mdi:forklift" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Lagermedarbeider
          </h3>
          <h4 className="">NDI Norge AS</h4>
          <p>Truckjøring, plukking og pakking av varer. Logistikk.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Mars 2021 - November 2021"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="fluent:paint-brush-16-regular" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Sprøytemaler
          </h3>
          <h4 className="">Overflatebehandling Sør AS</h4>
          <p>Behandling av kledning og lister til hus og hytte.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Desember 2020 - Januar 2021"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="codicon:tools" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Hjelpearbeider
          </h3>
          <h4 className="">Byggmester Per Otto Ingebretsen AS</h4>
          <p>Etterisolering av bygg.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Juni 2020 - Juli 2020"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="material-symbols:carpenter-outline-sharp" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Hjelpearbeider
          </h3>
          <h4 className="">VEF Entreprenør AS</h4>
          <p>Tømrerarbeid, anhuker og rydding.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Juni 2018 - Juli 2018"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="material-symbols:carpenter-outline-sharp" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Hjelpearbeider
          </h3>
          <h4 className="">VEF Entreprenør AS</h4>
          <p>Tømrerarbeid, anhuker og rydding.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Juni 2016 - Desember 2016"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="mdi:gantry-crane" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Kranfører
          </h3>
          <h4 className="">Glencore Nikkelverk AS</h4>
          <p>Kjørte traverskran. Høsting av nikkelplater.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "#212529",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="Juni 2015 - August 2015"
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="carbon:tool-kit" />}
        >
          <h3 className=" font-bold text-lg vertical-timeline-element-title">
            Vedlikeholdsarbeider
          </h3>
          <h4 className="">Kristiansand Dyrepark AS</h4>
          <p>
            Ansvar for pH-verdien i vannet og pumpene i badelandet.
            Vaktmesterarbeid rundt om i parken.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(31, 31, 31)", color: "#fff" }}
          icon={<Icon icon="ant-design:hourglass-outlined" />}
        />
      </VerticalTimeline>
    </div>
  );
}
