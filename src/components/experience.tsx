'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  return (
    <section id="experience" className="my-8 scroll-mt-28 sm:my-10">
      <SectionHeading
        heading="My Experience"
        content="Projects I worked on. Due to nature of internet businesses not all of them are still online."
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {experiencesData.map(({ title, description, location, date }) => (
          <VerticalTimelineElement
            key={title}
            visible
            contentStyle={{
              background: 'hsl(var(--secondary))',
              boxShadow: 'none',
              padding: '20px',
            }}
            contentArrowStyle={{ display: 'none' }}
            date={date}
            dateClassName="!font-medium text-muted-foreground"
            icon={<Icons.briefcase />}
            iconStyle={{
              boxShadow: 'none',
              border: '2px solid hsl(var(--foreground)',
            }}
          >
            <h3 className="font-medium">{title}</h3>
            <p className="!mt-0 !font-normal">{location}</p>
            <p className="text-muted-foreground !mt-1 !font-normal">
              {description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
